import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        app: {
          bg: 'rgb(var(--color-bg) / <alpha-value>)',
          surface: 'rgb(var(--color-surface) / <alpha-value>)',
          surfaceMuted: 'rgb(var(--color-surface-muted) / <alpha-value>)',
          border: 'rgb(var(--color-border) / <alpha-value>)',
          ink: 'rgb(var(--color-ink) / <alpha-value>)',
          muted: 'rgb(var(--color-muted) / <alpha-value>)',
          accent: 'rgb(var(--color-accent) / <alpha-value>)',
          accentSoft: 'rgb(var(--color-accent-soft) / <alpha-value>)',
          success: 'rgb(var(--color-success) / <alpha-value>)',
          warning: 'rgb(var(--color-warning) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        float: '0 18px 45px -28px rgba(28, 44, 58, 0.45)',
      },
      maxWidth: {
        reading: '70ch',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [typography],
}
