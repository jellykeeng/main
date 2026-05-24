const theme = {
  colors: {
    background: "#000814",
    foreground: "#f0f4f8",
    card: "#0a1128",
    cardForeground: "#f0f4f8",
    primary: "#7c3aed",
    primaryForeground: "#ffffff",
    secondary: "#1e1b4b",
    secondaryForeground: "#f0f4f8",
    muted: "#1a1f3a",
    mutedForeground: "#94a3b8",
    accent: "#5b21b6",
    accentForeground: "#ffffff",
    border: "rgba(139, 92, 246, 0.2)",
    purple400: "#a78bfa",
    purple500: "#7c3aed",
    purple600: "#7c3aed",
    purple700: "#6d28d9",
    purple950: "#1a0533",
    violet500: "#8b5cf6",
    violet600: "#7c3aed",
  },

  fonts: {
    sans: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },

  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
  },

  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
  },

  layout: {
    maxWidth: "80rem",
    px: "1.5rem",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },

  transitions: {
    fast: "150ms ease",
    normal: "300ms ease",
    slow: "500ms ease",
    verySlow: "700ms ease",
  },

  radii: {
    sm: "calc(0.875rem - 4px)",
    md: "calc(0.875rem - 2px)",
    lg: "0.875rem",
    xl: "calc(0.875rem + 4px)",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
};

export const media = {
  sm: `@media (min-width: ${theme.breakpoints.sm})`,
  md: `@media (min-width: ${theme.breakpoints.md})`,
  lg: `@media (min-width: ${theme.breakpoints.lg})`,
  xl: `@media (min-width: ${theme.breakpoints.xl})`,
};

export default theme;