import { createRootRoute, createRoute  } from "@tanstack/react-router";

import rootLayout from "./rootLayout";
import landingPage from "../features/landing/pages/landing-page";
import dashboardPage from "../features/dashboard/pages/dashboard-page";

const rootRoute = createRootRoute({
    component: rootLayout
});


const landingRoute = createRoute({
    getParentRoute: () => rootRoute, 
    path: '/landing',
    component: landingPage,
});


const dashboardRoute = createRoute({
    getParentRoute: () => rootRoute,   
    path: '/user',
    component: dashboardPage,
});

export const routeTree = rootRoute.addChildren([
    landingRoute,
    dashboardRoute,
]);