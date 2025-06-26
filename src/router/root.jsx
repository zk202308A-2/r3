import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

const router = createBrowserRouter([
{
    path: "/",
    element: <div>Hello World</div>,
},
{
    path: "/about",
    Component: AboutPage
}
]);

export default router;


