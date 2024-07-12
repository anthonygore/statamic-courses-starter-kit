/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-body': theme('colors.slate[800]'),
                        '--tw-prose-headings': theme('colors.yellow[900]'),
                        '--tw-prose-links': theme('colors.yellow[800]'),
                    },
                },
            }),
        }
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
