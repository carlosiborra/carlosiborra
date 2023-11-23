/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans, 'sans-serif'],
				serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif, 'serif'],
				mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono, 'monospace']
			},

      colors: {
        primary: {
            '50': '#fffbeb',
            '100': '#fff5c6',
            '200': '#ffe988',
            '300': '#ffd84c',
            '400': '#ffc520',
            '500': '#f9a307',
            '600': '#dd7b02',
            '700': '#b75606',
            '800': '#94410c',
            '900': '#7a370d',
            '950': '#461b02',
        },
      }
		}
	},

	plugins: []
};
