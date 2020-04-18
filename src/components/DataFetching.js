import React, {useState, useEffect} from 'react';
import axios from 'axios';


const DataFetching = () => {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err.responst)
            })
    }, [id])

    return ( 
        <div>
            <input type = "text"
                value = {id}
                onChange = {e => setId(e.target.value)}
            />
            <h1>{post.title}</h1>
        </div>
     );
}
 
export default DataFetching;