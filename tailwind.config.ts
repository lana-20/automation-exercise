import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dlb-bg': '#0f1a2a',
        'dlb-bg-dark': '#0a1220',
        'dlb-card': '#13243a',
        'dlb-off-white': '#f5f0eb',
        'dlb-coral': '#d4552a',
        'dlb-coral-light': '#e8785a',
        'dlb-mint': '#4aa8a5',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
