import { createRootRoute, createRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router';



const RootLayout = () => <Outlet />

export const rootRoute = createRootRoute({
    component: RootLayout,
})

export const landingRoute = createRoute({
    getParentRoute: () => rootRoute, 
    path: '/',
    component: landingPage,
})

