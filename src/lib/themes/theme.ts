import { createSystem, defaultConfig } from "@chakra-ui/react"

export const config = createSystem(defaultConfig, {
    theme: {
        semanticTokens: {
            colors: {
                bg: {
                    DEFAULT: {
                        value: { _light: "{colors.white}", _dark: "#141414" },
                    },
                    subtle: {
                        value: { _light: "{colors.gray.50}", _dark: "#1a1a1a" },
                    },
                    muted: {
                        value: { _light: "{colors.gray.100}", _dark: "#262626" },
                    },
                    lowContrast: {
                        value: { _light: "{colors.gray.200}", _dark: "#333" },
                    },
                    mediumContrast: {
                        value: { _light: "{colors.gray.300}", _dark: "#444" },
                    },
                    highContrast: {
                        value: { _light: "{colors.gray.400}", _dark: "#555" },
                    },
                },
                fg: {
                    DEFAULT: {
                        value: { _light: "{colors.black}", _dark: "#e5e5e5" },
                    },
                    subtle: {
                        value: { _light: "{colors.gray.700}", _dark: "#c0c0c0" },
                    },
                    muted: {
                        value: { _light: "{colors.gray.600}", _dark: "#a8a8a8" },
                    },
                },
                primary: {
                    DEFAULT: {
                        value: { _light: "#3B82F6", _dark: "#60A5FA" },
                    },
                    subtle: {
                        value: { _light: "#93C5FD", _dark: "#2563EB" },
                    },
                    contrast: {
                        value: { _light: "#1E40AF", _dark: "#1E3A8A" },
                    },
                },
                secondary: {
                    DEFAULT: {
                        value: { _light: "#10B981", _dark: "#34D399" },
                    },
                    subtle: {
                        value: { _light: "#6EE7B7", _dark: "#059669" },
                    },
                    contrast: {
                        value: { _light: "#047857", _dark: "#065F46" },
                    },
                },
                accent: {
                    DEFAULT: {
                        value: { _light: "#FACC15", _dark: "#FDE047" },
                    },
                    subtle: {
                        value: { _light: "#FDE047", _dark: "#FBBF24" },
                    },
                    contrast: {
                        value: { _light: "#D97706", _dark: "#B45309" },
                    },
                },
            },
            typography: {
                fonts: {
                    body: { value: "'Inter', sans-serif" },
                    heading: { value: "'Poppins', sans-serif" },
                    mono: { value: "'Fira Code', monospace" },
                },
                fontWeights: {
                    normal: { value: "400" },
                    medium: { value: "500" },
                    bold: { value: "700" },
                },
                fontSizes: {
                    xs: { value: "0.75rem" },
                    sm: { value: "0.875rem" },
                    md: { value: "1rem" },
                    lg: { value: "1.125rem" },
                    xl: { value: "1.25rem" },
                    "2xl": { value: "1.5rem" },
                    "3xl": { value: "1.875rem" },
                    "4xl": { value: "2.25rem" },
                    "5xl": { value: "3rem" },
                },
            },
        },
    },
});
export const system = createSystem(defaultConfig, config)