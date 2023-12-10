import type { Config } from 'tailwindcss'

const config: Config = {
    important: true,
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        container: {
            screens: {
                sm: '100%',
                md: '100%',
                lg: '1024px',
                xl: '1200px',
            },
            center: true,
            padding: {
                DEFAULT: '16px',
                md: '0',
                lg: '0',
                xl: '0',
                '2xl': '0',
            },
        },
        extend: {
            colors: {
                blue: {
                    ultramarine: '#5151fe',
                },
                blackcurrant: '#090B17',
            },
        },
    },
    plugins: [],
}
export default config
