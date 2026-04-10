import { courses as staticCourses } from '@/data/courses'

const NUMERIC_FIELDS = new Set(['slots'])

function parseCSV(text) {
  // Normalise Windows (\r\n) and old-Mac (\r) line endings before splitting
  const lines = text.trim().replace(/\r/g, '').split('\n')
  if (lines.length < 2) return staticCourses

  const headers = lines[0].split(',').map((h) => h.trim().replace(/^"|"$/g, ''))

  return lines.slice(1).map((line) => {
    // Handle quoted fields with commas inside
    const values = []
    let current = ''
    let inQuotes = false
    for (let i = 0; i < line.length; i++) {
      const ch = line[i]
      if (ch === '"') {
        inQuotes = !inQuotes
      } else if (ch === ',' && !inQuotes) {
        values.push(current.trim())
        current = ''
      } else {
        current += ch
      }
    }
    values.push(current.trim())

    const obj = {}
    headers.forEach((h, i) => {
      const raw = (values[i] || '').replace(/^"|"$/g, '')
      obj[h] = NUMERIC_FIELDS.has(h) ? (raw === '' ? undefined : Number(raw)) : raw
    })
    return obj
  }).filter((c) => c.id) // skip empty rows
}

export async function fetchCourses() {
  const SHEET_ID = process.env.GOOGLE_SHEET_COURSES_ID
  if (!SHEET_ID) return staticCourses

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`
  try {
    const res = await fetch(url, { next: { revalidate: 7200 } })
    if (!res.ok) return staticCourses
    const text = await res.text()
    const parsed = parseCSV(text)
    return parsed.length > 0 ? parsed : staticCourses
  } catch {
    return staticCourses
  }
}
