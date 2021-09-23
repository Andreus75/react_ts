import axios from "axios";
import {IPosts} from "./IPosts";

const axiosInstans = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

const getPosts = () => {
    return axiosInstans.get<IPosts[]>('/posts');
}

export {getPosts}