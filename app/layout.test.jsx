import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import RootLayout, { metadata } from './layout'

// Mock next/image
vi.mock('next/image', () => {
  return {
    default: (props) => {
      // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
      return <img {...props} />
    }
  }
})

describe('RootLayout', () => {
  let consoleErrorSpy;

  beforeEach(() => {
    // Suppress React 18 DOM nesting warnings for html/body tags
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation((msg, ...args) => {
      if (typeof msg === 'string' && msg.includes('validateDOMNesting')) {
        return;
      }
      console.warn(msg, ...args);
    });
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('exports correct metadata', () => {
    expect(metadata).toEqual({
      title: 'My reading list',
      description: 'Barak Korren`s reading list',
    })
  })

  it('renders correctly with children', () => {
    const { container } = render(
      <RootLayout>
        <div data-testid="child-element">Child Content</div>
      </RootLayout>
    )

    // Check main layout elements
    expect(screen.getByRole('heading', { level: 1, name: 'My reading list' })).toBeInTheDocument()

    // Check GitHub link and image
    const githubLink = screen.getByRole('link', { name: /github/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/ifireball/reading-list')
    const githubImage = screen.getByRole('img', { name: 'GitHub' })
    expect(githubImage).toBeInTheDocument()
    expect(githubImage).toHaveAttribute('src', '/github-mark.svg')

    // Check if children are rendered
    expect(screen.getByTestId('child-element')).toBeInTheDocument()
    expect(screen.getByText('Child Content')).toBeInTheDocument()

    // Check footer copyright text with current year
    const currentYear = new Date().getFullYear().toString()
    const timeElement = screen.getByText(currentYear)
    expect(timeElement).toBeInTheDocument()
    expect(timeElement.tagName.toLowerCase()).toBe('time')

    // HTML and lang attributes might be inside container, checking HTML tag
    const htmlElement = container.querySelector('html')
    expect(htmlElement).toBeInTheDocument()
    expect(htmlElement).toHaveAttribute('lang', 'en')
  })
})
