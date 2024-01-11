import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Use 'class' for manual control
  theme: {
    extend: {
      colors: {
        'custom-blue': '#ece6e2', // Example custom color
        'custom-purple': '#0e0e13', // Another custom color
        // Add as many custom colors as you need
      },
      fontSize: {
        'custom': '1em',
      },
      spacing: {
        '14vw': '14vw',
      },
    },
  },
  plugins: [],
}

export default config;
