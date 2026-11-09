// Vercel Routing Middleware: Markdown for Agents.
//
// Requests that prefer `text/markdown` (via the Accept header) get a markdown
// version of the page; everyone else gets the normal HTML. Runs only on the
// paths in `config.matcher`, before Vercel's cache, so both representations
// live at the same URL.
import { next } from '@vercel/functions/middleware'
import home from './src/markdown/home.js'
import privacy from './src/markdown/privacy.js'

export const config = {
  matcher: ['/', '/privacy'],
}

const PAGES = {
  '/': home,
  '/privacy': privacy,
}

// Parse an Accept header into [{ type, q }] entries.
function parseAccept(header) {
  return header
    .split(',')
    .map((part) => {
      const [type, ...params] = part.trim().toLowerCase().split(';')
      let q = 1
      for (const param of params) {
        const [key, value] = param.trim().split('=')
        if (key === 'q') {
          const parsed = Number.parseFloat(value)
          q = Number.isNaN(parsed) ? 0 : parsed
        }
      }
      return { type: type.trim(), q }
    })
    .filter((entry) => entry.type)
}

// Highest q among the given media ranges, checked most specific first.
function quality(entries, ranges) {
  for (const range of ranges) {
    const matches = entries.filter((entry) => entry.type === range)
    if (matches.length) return Math.max(...matches.map((entry) => entry.q))
  }
  return 0
}

// Markdown only when the client names it explicitly (wildcards don't count)
// and ranks it at least as high as HTML.
export function prefersMarkdown(acceptHeader) {
  if (!acceptHeader) return false
  const entries = parseAccept(acceptHeader)
  const markdown = quality(entries, ['text/markdown'])
  const html = quality(entries, ['text/html', 'text/*', '*/*'])
  return markdown > 0 && markdown >= html
}

export default function middleware(request) {
  const { pathname } = new URL(request.url)
  const page = PAGES[pathname.replace(/\/+$/, '') || '/']
  const method = request.method.toUpperCase()

  if (
    page === undefined ||
    (method !== 'GET' && method !== 'HEAD') ||
    !prefersMarkdown(request.headers.get('accept'))
  ) {
    return next({ headers: { Vary: 'Accept' } })
  }

  return new Response(method === 'HEAD' ? null : page, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      Vary: 'Accept',
      'Cache-Control': 'public, max-age=0, must-revalidate',
      // Rough estimate (~4 characters per token).
      'x-markdown-tokens': String(Math.ceil(page.length / 4)),
    },
  })
}
