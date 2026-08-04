import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Every token below resolves through a CSS variable set in globals.css,
        // so switching [data-theme] repaints the whole site without any
        // component needing a `dark:` variant. The `<alpha-value>` placeholder
        // is what keeps opacity modifiers (bg-white/5, border-white/10) working.
        //
        // `white` and `gray` are overridden deliberately: they are semantic
        // here, not literal. In light mode `white` resolves to near-black.
        white: 'rgb(var(--c-white) / <alpha-value>)',
        gray: {
          200: 'rgb(var(--c-gray-200) / <alpha-value>)',
          300: 'rgb(var(--c-gray-300) / <alpha-value>)',
          400: 'rgb(var(--c-gray-400) / <alpha-value>)',
          500: 'rgb(var(--c-gray-500) / <alpha-value>)',
          600: 'rgb(var(--c-gray-600) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'rgb(var(--c-primary) / <alpha-value>)',
          dark: 'rgb(var(--c-primary-dark) / <alpha-value>)',
          light: 'rgb(var(--c-primary-light) / <alpha-value>)',
        },
        background: {
          DEFAULT: 'rgb(var(--c-background) / <alpha-value>)',
          light: 'rgb(var(--c-background-light) / <alpha-value>)',
          lighter: 'rgb(var(--c-background-lighter) / <alpha-value>)',
        },
        accent: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          pink: '#ec4899',
          cyan: '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgb(var(--c-glow) / 0.3)' },
          '50%': { boxShadow: '0 0 40px rgb(var(--c-glow) / 0.6)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00ff88' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient':
          'linear-gradient(135deg, rgb(var(--c-background)) 0%, rgb(var(--c-background-lighter)) 50%, rgb(var(--c-background)) 100%)',
        'card-gradient':
          'linear-gradient(135deg, rgb(var(--c-white) / 0.1) 0%, rgb(var(--c-white) / 0.05) 100%)',
        'primary-gradient':
          'linear-gradient(135deg, rgb(var(--c-primary)) 0%, rgb(var(--c-primary-dark)) 50%, rgb(var(--c-primary)) 100%)',
        'text-gradient': 'linear-gradient(135deg, var(--grad-1), var(--grad-2), var(--grad-3))',
      },
      boxShadow: {
        'glow': '0 0 20px rgb(var(--c-glow) / 0.3)',
        'glow-lg': '0 0 40px rgb(var(--c-glow) / 0.4)',
        'glow-xl': '0 0 60px rgb(var(--c-glow) / 0.5)',
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
