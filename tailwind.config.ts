import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        'primary-dark': '#1e40af',
        secondary: '#10b981',
        accent: '#f59e0b',
      },
    },
  },
  plugins: [],
}
export default config
