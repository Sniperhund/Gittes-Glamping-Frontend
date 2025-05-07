import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import "./styles/global.scss"
import WebFont from 'webfontloader'

const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true
})

WebFont.load({
    google: {
        families: ["Zen Loop", "NanumGothic"]
    }
})

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
