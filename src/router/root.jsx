import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import AboutPage from "../pages/aboutPage";
import MainPage from "../pages/mainPage";

const router = createBrowserRouter([
{
    path: "/",
    Component: MainPage
},
{
    path: "/about",
    Component: AboutPage
}
]);

export default router;


