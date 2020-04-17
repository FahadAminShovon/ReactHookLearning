import React, {useState, useEffect} from 'react';

const IntervalHookCounter = () => {

    const [count, setCount] = useState(0)



    useEffect( () =>{

    //   function doSomething () {
    //       console.log(someProp)
    //   }  
    //   doSomething()

      const interval = setInterval(tick, 1000)
      return () => {
          clearInterval(interval)
      }
    },[/*someProp*/])

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }
    return ( 
        <div>
            <h1>{count}</h1>
        </div>
     );
}
 
export default IntervalHookCounter;