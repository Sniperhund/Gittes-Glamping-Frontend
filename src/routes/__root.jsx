import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Nav } from '../components/Nav'
import Footer from '../components/footer/Footer'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    const location = useLocation()

    return (
        <>
            <Nav homePage={location.pathname == "/"} />
            <Outlet />
            <TanStackRouterDevtools position="bottom-right" />
            <Footer />
        </>
    )
}
