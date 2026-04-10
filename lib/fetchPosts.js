const NUMERIC_FIELDS = new Set([])

function parseCSV(text) {
  const lines = text.trim().replace(/\r/g, '').split('\n')
  if (lines.length < 2) return []

  const headers = lines[0].split(',').map((h) => h.trim().replace(/^"|"$/g, ''))

  return lines.slice(1).map((line) => {
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
  }).filter((p) => p.slug)
}

function parseDate(dateStr) {
  // dd/mm/yyyy → Date
  const [d, m, y] = (dateStr || '').split('/')
  return new Date(y, m - 1, d)
}

export async function fetchPosts() {
  const SHEET_ID = process.env.GOOGLE_SHEET_POSTS_ID
  if (!SHEET_ID) return []

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const text = await res.text()
    const posts = parseCSV(text)
    return posts
      .filter((p) => p.published === 'true')
      .sort((a, b) => parseDate(b.date) - parseDate(a.date))
  } catch {
    return []
  }
}
