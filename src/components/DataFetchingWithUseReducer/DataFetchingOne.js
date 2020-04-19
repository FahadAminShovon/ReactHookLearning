import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DataFetchingOne = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(resposne=>{
                setLoading(false)
                setPost(resposne.data)
                setError('')
            })
            .catch(error =>{
                setLoading(false)
                setPost({})
                setError('Something went wrong')
            })
    }, [])
    return ( 
        <div>
            {loading? 'loading' : post.title}
            {error? 'error': ''}
        </div>
     );
}
 
export default DataFetchingOne;