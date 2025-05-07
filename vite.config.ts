import { defineConfig } from 'vite'
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tsconfigPaths(),
        TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
        react(),
        tailwindcss()
    ],
})
