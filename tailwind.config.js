/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        '1': '#ED5565',
        '2': '#FC6E51',
        '3': '#FFCE54',
        '4': '#2ECC71',
        '5': '#5D9CEC',
        '6': '#AC92EC',
      }),
      colors: {
        'primary-100': '#F3F4F6',
        'primary-200': '#E5E7EB',
        'primary-300': '#D1D5DB',
        'primary-400': '#9CA3AF',
        'primary-500': '#6B7280',
        'primary-600': '#4B5563',
        'primary-700': '#374151',
        'primary-800': '#1F2937',
        'primary-900': '#111827',
        'background': '#1B2230',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
