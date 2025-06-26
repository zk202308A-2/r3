import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

import { lazy, Suspense } from "react";
import TodoIndexPage from "../pages/todo/todoIndexPag";

const Loading = () => <div>Loading....</div>

const Main = lazy(() => import("../pages/mainPage"))
const About = lazy(() => import("../pages/aboutPage"))

const TodoList =lazy(() => import("../pages/todo/todoListPage"))

const router = createBrowserRouter([
{
    path: "/",
    element: <Suspense fallback={<Loading/>}><Main/></Suspense>,

},
{
    path: "/about",
    element: <Suspense fallback={<Loading/>}><About/></Suspense>,
},
{
    path: "/todo",
    Component: TodoIndexPage,
    children: [
        {
            path: "list",
            element: <Suspense fallback={<Loading/>}><TodoList/></Suspense>
        }
    ]
}
]);

export default router;


