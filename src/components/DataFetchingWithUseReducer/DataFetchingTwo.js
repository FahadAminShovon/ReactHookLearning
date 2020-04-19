import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading: false,
                error: '',
                post: action.payload
            }

        case 'FETCH_ERROR':
            return{
                loading: false,
                error: 'Something Went wrong',
                post: {}
            }
        
        default:
            return state
    }
}

const DataFetchingTwo = () => {
    const [state, dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(resposne=>{
                dispatch({type:'FETCH_SUCCESS', payload:resposne.data})
            })
            .catch(error =>{
                dispatch({type:'FETCH_ERROR'})
            })
    }, [])

    return ( 
        <div>
            {state.loading? 'loading' : state.post.title}
            {state.error? 'error': ''}
        </div>
     );
}
 
export default DataFetchingTwo;