import React, {useState, useEffect} from 'react';
import axios from 'axios';


const DataFetching = () => {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(id)

    const handleClick = () =>{
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err.responst)
            })
    }, [idFromButtonClick])

    return ( 
        <div>
            <input type = "text"
                value = {id}
                onChange = {e => setId(e.target.value)}
            />
            <button type = "button" onClick = {handleClick}>Fetch Data</button>

            <h1>{post.title}</h1>

        </div>
     );
}
 
export default DataFetching;