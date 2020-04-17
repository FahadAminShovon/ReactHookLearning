import React, {useState, useEffect} from 'react';

const HookMouse = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePostion = e =>{
        console.log("Mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("use effect is being called")
        window.addEventListener("mousemove", logMousePostion)
    },[])


    return ( 
        <div>
            X: {x} - Y:{y}
        </div>
     );
}
 
export default HookMouse;