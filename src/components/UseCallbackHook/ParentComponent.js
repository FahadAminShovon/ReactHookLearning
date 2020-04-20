import React, { useState, useCallback } from 'react';
import Count from './Count';
import Button from './Button';
import Title from './Title';

const ParentComponent = () => {

    const [age, setAge] = useState(25)
    const [salery, setSalery] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    },[age])

    const incrementSalery = useCallback(() => {
        setSalery(salery + 10000)
    },[salery])
    

    return ( 
        <div>
            <Title/>
            <Count text = 'Age' count = {age}/>
            <Button handleClick = {incrementAge}>Increment Age</Button>
            <Count text = 'Salery' count = {salery}/>
            <Button handleClick = {incrementSalery}>Increment Salery</Button>
        </div>
     );
}
 
export default ParentComponent;