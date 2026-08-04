/**
 * Print stylesheet for /resume.
 *
 * The CSS is injected via dangerouslySetInnerHTML rather than as a JSX text
 * child. As a text child, React escapes the double quotes in the attribute
 * selectors to &quot; during SSR but emits literal quotes on the client, which
 * is a hydration mismatch — and a mismatch inside <style> makes React discard
 * the whole server render and fall back to client-side rendering.
 *
 * Note the doubled backslashes: inside a JS template literal, `\\/` emits the
 * `\/` that CSS needs to escape the slash in Tailwind's `border-white/10`.
 */
const printCss = `
  @media print {
    @page { size: A4; margin: 14mm 14mm; }

    html, body {
      background: #ffffff !important;
      color: #111827 !important;
    }

    main { background: #ffffff !important; }

    h1, h2, h3 { color: #0f172a !important; }

    p, span, li, a { color: #374151 !important; }

    .border-white\\/10,
    .border-white\\/15,
    .border-primary\\/30,
    .border-primary\\/40 { border-color: #e5e7eb !important; }

    [class*="bg-background-light"],
    [class*="bg-white/5"],
    [class*="bg-primary/10"] { background: #f9fafb !important; }

    section { break-inside: avoid; margin-bottom: 18px !important; }

    article { break-inside: avoid; }
  }
`

export default function ResumePrintStyles() {
  return <style dangerouslySetInnerHTML={{ __html: printCss }} />
}
