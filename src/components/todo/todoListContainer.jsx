import { useSearchParams } from "react-router";


function TodoListContainer() {

    const [searchParam, setSearchParam] = useSearchParams()

    const page = searchParam.get("page") ||'1'

    console.log("page", page)

    return ( 
        <div>
            <div>Todo List Container</div>
            <ul>

            </ul>
        </div>
     );
}

export default TodoListContainer;