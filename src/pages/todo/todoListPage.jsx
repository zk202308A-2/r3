import { useSearchParams } from "react-router";

function TodoListPage() {

    const [searchParam, setSearchParam] = useSearchParams()

    const page = searchParam.get("page") ||'1'

    console.log("page", page)
    


    return (
        <div>
            <div>Todo List Page </div>

        </div>
    );
}

export default TodoListPage;