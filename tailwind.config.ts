import type { Config } from "tailwindcss";

const config: Config = {
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                surface: "var(--surface)",
                border: "var(--border)",
                text: "var(--text)",
                accent: "var(--accent)",
                "accent-soft": "var(--accent-soft)",
            },
        },
    },
};

export default config;
