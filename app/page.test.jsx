import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Page from './page'
import { loadData } from '../lib/load-data'
import Columns from 'components/columns'

// Mock loadData
vi.mock('../lib/load-data', () => ({
  loadData: vi.fn()
}))

// Mock Columns component
vi.mock('components/columns', () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid="columns" />)
}))

describe('Page', () => {
  it('loads data and renders Columns with that data', async () => {
    const mockData = [{ title: 'Test Book', status: 'Read' }]
    loadData.mockResolvedValue(mockData)

    // Since Page is an async component, we await its result
    const ResolvedPage = await Page()
    render(ResolvedPage)

    expect(loadData).toHaveBeenCalled()
    expect(Columns).toHaveBeenCalledWith(
      expect.objectContaining({ data: mockData }),
      expect.anything()
    )
    expect(screen.getByTestId('columns')).toBeInTheDocument()
  })
})
