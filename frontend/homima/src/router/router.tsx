import {createRootRoute, createRouter, createRoute } from '@tanstack/react-router';
import HomePage from '../pages/Homepage'
import CreateRoomPage from '../pages/CreateRoom'
import AboutPage from '../pages/Aboutpage'

const rootRoute = createRootRoute();


const homeRoute = createRoute({
    path: '/',
    component: HomePage,
    getParentRoute: () => rootRoute,
});

const createRoomRoute = createRoute({
    path: '/create-room',
    component: CreateRoomPage,
    getParentRoute: () => rootRoute,
});

const aboutPage = createRoute({
    path: '/about',
    component: AboutPage,
    getParentRoute: () => rootRoute,
});

const routeTree = rootRoute.addChildren([homeRoute, createRoomRoute, aboutPage]);

export const router = createRouter({ routeTree});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}