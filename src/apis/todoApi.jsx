import axios from "axios";

export async function getTodoList(page) {

    //https://jsonplaceholder.typicode.com/todos

    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}`)

    return res.data


}