import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import fs from 'fs/promises'
import { loadData, validateData } from './load-data'

vi.mock('fs/promises', () => {
  return {
    default: {
      readdir: vi.fn(),
      readFile: vi.fn()
    },
    readdir: vi.fn(),
    readFile: vi.fn()
  }
})

describe('load-data', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    // Mock readdir to return some yaml files
    fs.readdir.mockResolvedValue([
      'book1.yaml',
      'book2.yaml',
      'not-a-yaml.txt'
    ])
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('loadData', () => {
    it('loads and parses yaml files, converting notes to HTML', async () => {
      // Mock readFile to return yaml content
      fs.readFile.mockImplementation((filePath) => {
        if (filePath.endsWith('book1.yaml')) {
          return Promise.resolve(`
title: The Book
url: http://example.com/1
status: To Read
notes: This is **bold** text
`)
        }
        if (filePath.endsWith('book2.yaml')) {
          return Promise.resolve(`
title: Second Book
url: http://example.com/2
status: Read
notes: Just a note
`)
        }
      })

      const data = await loadData()

      expect(data).toHaveLength(2)

      const book1 = data.find(item => item.key === 'book1.yaml')
      expect(book1.title).toBe('The Book')
      expect(book1.url).toBe('http://example.com/1')
      expect(book1.status).toBe('To Read')
      expect(book1.notes).toContain('<strong>bold</strong>')

      const book2 = data.find(item => item.key === 'book2.yaml')
      expect(book2.title).toBe('Second Book')
      expect(book2.notes).toContain('Just a note')
    })
  })

  describe('validateData', () => {
    const validSchema = JSON.stringify({
      type: "object",
      properties: {
        title: { type: "string" },
        url: { type: "string", format: "uri" },
        status: { type: "string" },
        notes: { type: "string" }
      },
      required: ["title", "url", "status", "notes"],
      additionalProperties: false
    })

    it('returns true when all data matches the schema', async () => {
      fs.readFile.mockImplementation((filePath) => {
        if (filePath.endsWith('schema.json')) {
          return Promise.resolve(validSchema)
        }
        if (filePath.endsWith('book1.yaml')) {
          return Promise.resolve(`
title: The Book
url: http://example.com/1
status: To Read
notes: Valid notes
`)
        }
        if (filePath.endsWith('book2.yaml')) {
          return Promise.resolve(`
title: Second Book
url: http://example.com/2
status: Read
notes: More valid notes
`)
        }
      })

      const isValid = await validateData()
      expect(isValid).toBe(true)
    })

    it('returns false when any data is invalid according to the schema', async () => {
      fs.readFile.mockImplementation((filePath) => {
        if (filePath.endsWith('schema.json')) {
          return Promise.resolve(validSchema)
        }
        if (filePath.endsWith('book1.yaml')) {
          return Promise.resolve(`
title: The Book
# missing url
status: To Read
notes: Valid notes
`)
        }
        if (filePath.endsWith('book2.yaml')) {
          return Promise.resolve(`
title: Second Book
url: http://example.com/2
status: Read
notes: More valid notes
`)
        }
      })

      const isValid = await validateData()
      expect(isValid).toBe(false)
    })

    it('returns false when additional properties are found', async () => {
      fs.readFile.mockImplementation((filePath) => {
        if (filePath.endsWith('schema.json')) {
          return Promise.resolve(validSchema)
        }
        if (filePath.endsWith('book1.yaml')) {
          return Promise.resolve(`
title: The Book
url: http://example.com/1
status: To Read
notes: Valid notes
extraProp: should fail
`)
        }
        if (filePath.endsWith('book2.yaml')) {
          return Promise.resolve(`
title: Second Book
url: http://example.com/2
status: Read
notes: More valid notes
`)
        }
      })

      const isValid = await validateData()
      expect(isValid).toBe(false)
    })
  })
})
