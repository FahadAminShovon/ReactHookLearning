import React, {useState, useEffect} from 'react';

const HookCounterOne = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `you clicked ${count} times`
    })

    return ( 
        <div>
            <button onClick = {()=>setCount(prevCount => prevCount + 1)}>Count: {count}</button>
        </div>
     );
}
 
export default HookCounterOne;