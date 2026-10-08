/*
 * Optional Tailwind v3 adapter for tokens.css. Not part of the design system itself.
 * Import ../tokens.css in your global stylesheet. Utility keys equal the token value
 * (p-8 = 8px = --space-8), and the default scales are replaced, not extended.
 */
const px = (n) => `${n}px`;

module.exports = {
  theme: {
    fontFamily: { sans: ['var(--font-sans)'] },
    spacing: Object.fromEntries([0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80].map((n) => [n, n ? px(n) : '0'])),
    borderRadius: {
      none: '0', sm: '4px', md: '8px', lg: '12px', xl: '20px', '2xl': '32px', full: '9999px',
    },
    fontSize: {
      display: ['80px', { lineHeight: '88px', letterSpacing: '-2px', fontWeight: '500' }],
      h1: ['64px', { lineHeight: '72px', letterSpacing: '-2px', fontWeight: '500' }],
      h2: ['40px', { lineHeight: '48px', letterSpacing: '-1px', fontWeight: '500' }],
      h3: ['32px', { lineHeight: '40px', fontWeight: '500' }],
      h4: ['24px', { lineHeight: '32px', fontWeight: '700' }],
      'body-lg': ['20px', { lineHeight: '28px', fontWeight: '500' }],
      'body-md': ['16px', { lineHeight: '24px' }],
      'body-sm': ['14px', { lineHeight: '20px' }],
      caption: ['12px', { lineHeight: '16px', fontWeight: '500' }],
    },
    colors: {
      transparent: 'transparent',
      primary: { DEFAULT: 'var(--color-primary)', hover: 'var(--color-primary-hover)', pressed: 'var(--color-primary-pressed)' },
      'on-primary': 'var(--color-on-primary)',
      link: 'var(--color-link)',
      bg: 'var(--color-bg)',
      surface: { DEFAULT: 'var(--color-surface)', warm: 'var(--color-surface-warm)' },
      inverse: { bg: 'var(--color-inverse-bg)', text: 'var(--color-inverse-text)' },
      overlay: 'var(--color-overlay)',
      text: { primary: 'var(--color-text-primary)', secondary: 'var(--color-text-secondary)', tertiary: 'var(--color-text-tertiary)' },
      border: { DEFAULT: 'var(--color-border)', subtle: 'var(--color-border-subtle)' },
      success: 'var(--color-success)', warning: 'var(--color-warning)',
      error: 'var(--color-error)', info: 'var(--color-info)',
    },
  },
};
