import { lazy, Suspense } from "react";

import TodoIndexPage from "../pages/todo/todoIndexPag";

const Loading = () => <div>Loading....</div>

const TodoList =lazy(() => import("../pages/todo/todoListPage"))

function todoRouter() {
    return ({
        path: "/todo",
        Component: TodoIndexPage,
        children: [
            {
                path: "list",
                element: <Suspense fallback={<Loading/>}><TodoList/></Suspense>
            }
        ]
    })
}

export default todoRouter