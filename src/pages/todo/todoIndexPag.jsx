import { Outlet } from "react-router";
import BasicLayout from "../../layouts/basicLayout";

function TodoIndexPage() {
    return ( 
        <BasicLayout>
            <div>
                Todo Menus...
            </div>
            <Outlet/>
        </BasicLayout>
    );
}

export default TodoIndexPage;