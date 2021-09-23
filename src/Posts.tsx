import {useEffect, useState} from "react";
import {IPosts} from "./IPosts";
import {getPosts} from "./post.api";
import Post from "./Post";

const Posts = () => {

    let [posts, setPosts] = useState<IPosts[]>();

    useEffect(() => {
        getPosts().then(value => setPosts(value.data))
    },[]);

    return <div>
        {
            posts?.map(value => <Post {...value} key={value.id}/>)
        }
    </div>
}

export default Posts;