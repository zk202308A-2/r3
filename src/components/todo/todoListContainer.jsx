import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { getTodoList } from "../../apis/todoApi";


function TodoListContainer() {

    const [searchParam, setSearchParam] = useSearchParams()

    const page = searchParam.get("page") ||'1'

    console.log("page", page)

    useEffect(() => {
        getTodoList(page).then((result) => {
            console.log(result);
        })
    }, [page])


    return ( 
        <div>
            <div>Todo List Container</div>
            <ul>

            </ul>
        </div>
     );
}

export default TodoListContainer;