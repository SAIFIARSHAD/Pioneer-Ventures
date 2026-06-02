/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                background: '#F7F9FC',
                surface: '#FFFFFF',
                surfaceSoft: '#EEF4F8',
                border: '#D8E2EA',
                text: '#1F2937',
                muted: '#5B6472',
                primary: '#139EC7',
                primarySoft: '#1BB4E0',
                accent: '#B10F1F',
                accentDark: '#8E0C19',
                buttonDark: '#0E7FA0',
                buttonDarkHover: '#0B6985',
                highlight: '#E6F6FB',
            },
            boxShadow: {
                glow: '0 10px 30px rgba(19, 158, 199, 0.10)',
                card: '0 12px 28px rgba(15, 23, 42, 0.08)',
            },
            maxWidth: {
                container: '1200px',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            transitionTimingFunction: {
                premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
        },
    },
    plugins: [],
};