import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import AboutPage from "../pages/aboutPage";

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


