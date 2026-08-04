'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { cn } from '@/lib/utils'

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme()

  const label = mounted
    ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`
    : 'Toggle theme'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={cn(
        'relative inline-flex h-9 w-9 items-center justify-center rounded-lg',
        'border border-white/10 bg-white/5 text-gray-300',
        'transition-colors hover:border-primary/40 hover:text-primary',
        'print:hidden',
        className
      )}
    >
      {/* Both icons render; opacity/rotation cross-fades them so the control
          never reflows. suppressHydrationWarning is unnecessary because the
          icons are identical on server and client — only CSS differs. */}
      <Sun
        size={16}
        className={cn(
          'absolute transition-all duration-300',
          mounted && theme === 'dark'
            ? 'rotate-0 scale-100 opacity-100'
            : 'rotate-90 scale-0 opacity-0'
        )}
      />
      <Moon
        size={16}
        className={cn(
          'absolute transition-all duration-300',
          mounted && theme === 'light'
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-0 opacity-0'
        )}
      />
    </button>
  )
}
