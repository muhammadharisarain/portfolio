'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
  /** False until the client has read the stored/system preference. */
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => {},
  mounted: false,
})

export function useTheme() {
  return useContext(ThemeContext)
}

/**
 * Blocking script that runs before first paint so the correct theme is on
 * <html> before any pixels are drawn. Without this, a visitor whose stored or
 * system preference is light gets a dark flash on every navigation.
 *
 * Kept in sync with the resolution order below: stored choice wins, then the
 * OS preference, then dark.
 */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('${STORAGE_KEY}');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`

function resolveInitialTheme(): Theme {
  if (typeof document !== 'undefined') {
    const attr = document.documentElement.getAttribute('data-theme')
    if (attr === 'light' || attr === 'dark') return attr
  }
  return 'dark'
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // Start from whatever themeInitScript already put on <html>, so the first
  // client render agrees with the server-rendered markup.
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTheme(resolveInitialTheme())
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Private browsing / storage disabled — the theme still applies for this
      // session, it just will not be remembered.
    }
  }, [theme, mounted])

  // Follow the OS while the visitor has not made an explicit choice.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (e: MediaQueryListEvent) => {
      let stored: string | null = null
      try {
        stored = localStorage.getItem(STORAGE_KEY)
      } catch {
        // ignore
      }
      if (!stored) setTheme(e.matches ? 'light' : 'dark')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}
