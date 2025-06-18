
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'nunito': ['Nunito Sans', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Giọt Máu Vàng Design System Colors
				'compassion-red': '#E23E57',
				'supportive-blue': '#4A6B8A',
				'warm-gray': '#F0F2F5',
				'deep-gray': '#374151',
				'gentle-gray': '#9CA3AF',
				'harmony-green': '#5CB85C',
				'kindness-orange': '#FF9800',
				'success-green': '#5CB85C',
				'warning-yellow': '#F4D03F',
				'error-red': '#EF5350',
				'info-blue': '#5BC0DE'
			},
			spacing: {
				'xs': '6px',
				's': '10px',
				'm': '18px',
				'l': '28px',
				'xl': '36px'
			},
			borderRadius: {
				'md-custom': '10px',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'md-custom': '0 6px 12px rgba(0,0,0,0.12)',
			},
			fontSize: {
				'display': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
				'heading-1': ['30px', { lineHeight: '1.3', fontWeight: '600' }],
				'heading-2': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
				'heading-3': ['20px', { lineHeight: '1.5', fontWeight: '500' }],
				'body-large': ['17px', { lineHeight: '1.6', fontWeight: '400' }],
				'body': ['15px', { lineHeight: '1.6', fontWeight: '400' }],
				'caption': ['13px', { lineHeight: '1.4', fontWeight: '400' }],
				'micro': ['11px', { lineHeight: '1.3', fontWeight: '400' }]
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-soft': {
					'0%, 100%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.02)', opacity: '0.9' }
				},
				'ripple': {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(4)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
				'ripple': 'ripple 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
