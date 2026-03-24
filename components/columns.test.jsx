import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Columns, { Column, Item } from './columns'

const mockData = [
  {
    key: 'item1',
    title: 'Book One',
    url: 'http://example.com/1',
    status: 'To Read',
    notes: '<p>Some notes for book one</p>'
  },
  {
    key: 'item2',
    title: 'Book Two',
    url: 'http://example.com/2',
    status: 'Reading',
    notes: '<p>Currently reading this</p>'
  },
  {
    key: 'item3',
    title: 'Book Three',
    url: 'http://example.com/3',
    status: 'Read',
    notes: '<p>Finished this one</p>'
  },
  {
    key: 'item4',
    title: 'Book Four',
    url: 'http://example.com/4',
    status: 'To Read',
    notes: '<p>Another to read</p>'
  }
]

describe('Item', () => {
  it('renders correctly with title, link, and notes', () => {
    const item = mockData[0]
    render(<Item item={item} />)

    const link = screen.getByRole('link', { name: 'Book One' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'http://example.com/1')

    // Using test-id or looking for dangerouslySetInnerHTML content
    expect(screen.getByText('Some notes for book one')).toBeInTheDocument()
  })
})

describe('Column', () => {
  it('renders title and multiple items', () => {
    const items = [mockData[0], mockData[3]]
    render(<Column title="To Read" items={items} />)

    expect(screen.getByRole('heading', { level: 2, name: 'To Read' })).toBeInTheDocument()
    expect(screen.getByText('Book One')).toBeInTheDocument()
    expect(screen.getByText('Book Four')).toBeInTheDocument()
  })

  it('renders title with no items', () => {
    render(<Column title="Empty" items={[]} />)
    expect(screen.getByRole('heading', { level: 2, name: 'Empty' })).toBeInTheDocument()
    expect(screen.queryByRole('article')).not.toBeInTheDocument()
  })
})

describe('Columns', () => {
  it('renders all three columns and filters data correctly', () => {
    render(<Columns data={mockData} />)

    // Check columns
    expect(screen.getByRole('heading', { level: 2, name: 'To Read' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Reading' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Read' })).toBeInTheDocument()

    // Check item placements by ensuring all titles are present
    expect(screen.getByText('Book One')).toBeInTheDocument()
    expect(screen.getByText('Book Two')).toBeInTheDocument()
    expect(screen.getByText('Book Three')).toBeInTheDocument()
    expect(screen.getByText('Book Four')).toBeInTheDocument()
  })

  it('handles case-insensitive status', () => {
    const dataWithMixedCase = [
      {
        ...mockData[0],
        status: 'TO READ'
      },
      {
        ...mockData[1],
        status: 'reading'
      }
    ]

    render(<Columns data={dataWithMixedCase} />)
    expect(screen.getByText('Book One')).toBeInTheDocument()
    expect(screen.getByText('Book Two')).toBeInTheDocument()
  })
})
