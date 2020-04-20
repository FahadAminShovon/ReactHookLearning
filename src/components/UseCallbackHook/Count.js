import React from 'react';

const Count = ({text, count }) => {
    console.log(`rendering Count - ${text}`)
    return ( 
        <div>
            {text} - {count}
        </div>
     );
}
 
export default React.memo(Count);