import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#070818',
        'text-color': '#fff',
        'main-color': '#ff0000',
        'second-color': '#808080',
        'other-color': '#12141c',
      },
      fontSize: {
        'heading-font': '5.2rem',
        'second-heading': '3.5rem',
        'paragraph-font': '1.1rem',
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'section-title-aura': 'sectionTitleAura 2.4s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'card-reveal': 'cardReveal 0.75s ease both',
        'template-aura-in': 'templateAuraIn 0.9s ease forwards',
        'template-heading-in': 'templateHeadingIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'template-card-in': 'templateCardIn 0.72s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { left: '-100%' },
          '50%': { left: '0%' },
        },
        sectionTitleAura: {
          from: {
            opacity: '0.68',
            transform: 'translate(-50%, -50%) scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1.03)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        cardReveal: {
          from: {
            opacity: '0',
            transform: 'translateY(24px) scale(0.98)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        templateAuraIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.88)',
          },
          to: {
            opacity: '0.5',
            transform: 'scale(1)',
          },
        },
        templateHeadingIn: {
          from: {
            opacity: '0',
            transform: 'translateY(18px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        templateCardIn: {
          from: {
            opacity: '0',
            transform: 'translateY(24px) scale(0.97)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
      },
      backgroundImage: {
        'home-hero': 'linear-gradient(rgba(7, 8, 24, 0.84), rgba(7, 8, 24, 0.84)), url(/images/header.jpg)',
      },
    },
  },
  plugins: [],
};

export default config;
