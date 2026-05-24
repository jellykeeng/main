const theme = {
  colors: {
    bgDark: "#0A0A0A",
    bgDarkSecondary: "#111111",
    bgLight: "#F5F5F0",
    bgLightSecondary: "#EEEEE8",

    textPrimary: "#FFFFFF",
    textSecondary: "#999999",
    textMuted: "#888888",
    textDark: "#1A1A1A",
    textDarkSecondary: "#555555",

    accent: "#C8A97E",
    accentHover: "#D4B896",
    accentDark: "#B89868",

    borderDark: "#2A2A2A",
    borderLight: "#D5D5D0",
    borderLightSecondary: "#C5C5C0",

    white: "#FFFFFF",
    black: "#000000",
    overlay: "rgba(0, 0, 0, 0.5)",
    glow: "rgba(200, 169, 126, 0.15)",
  },

  fonts: {
    heading: "'Playfair Display', 'Georgia', serif",
    body: "'Inter', 'Helvetica Neue', 'Arial', sans-serif",
  },

  fontSizes: {
    xs: "0.75rem",
    sm: "0.8125rem",
    base: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    "4xl": "2.5rem",
    "5xl": "3.5rem",
    "6xl": "4.5rem",
    hero: "5.5rem",
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
    "4xl": "6rem",
    "5xl": "8rem",
    "6xl": "10rem",
    section: "8rem",
    sectionLg: "10rem",
  },

  layout: {
    maxWidth: "1280px",
    containerPadding: "2rem",
    headerHeight: "64px",
  },

  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px",
  },

  transitions: {
    fast: "0.15s ease",
    normal: "0.3s ease",
    slow: "0.5s ease",
    verySlow: "0.8s cubic-bezier(0.16, 1, 0.3, 1)",
  },

  shadows: {
    glow: "0 0 60px rgba(200, 169, 126, 0.1)",
    card: "0 1px 3px rgba(0, 0, 0, 0.1)",
    cardHover: "0 4px 20px rgba(0, 0, 0, 0.15)",
    productGlow: "0 0 120px 40px rgba(60, 60, 70, 0.3)",
  },

  radii: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "24px",
    full: "9999px",
  },
};

export const media = {
  sm: `@media (max-width: ${theme.breakpoints.sm})`,
  md: `@media (max-width: ${theme.breakpoints.md})`,
  lg: `@media (max-width: ${theme.breakpoints.lg})`,
  xl: `@media (max-width: ${theme.breakpoints.xl})`,
  minSm: `@media (min-width: ${theme.breakpoints.sm})`,
  minMd: `@media (min-width: ${theme.breakpoints.md})`,
  minLg: `@media (min-width: ${theme.breakpoints.lg})`,
  minXl: `@media (min-width: ${theme.breakpoints.xl})`,
};

export default theme;