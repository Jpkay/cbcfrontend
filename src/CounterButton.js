import React, { useState } from 'react';

const CounterButton = () => {


    const [state, setState] = useState(
        {
            count: 0
            
        }
    ) // [state, ?]

    

    const changeCount = () => {

        let newCount = state.count+1;

        setState(
            {
                count: newCount
                
            }
        )
        
    }

    return (
        <button 
            onClick={changeCount}
            className= 'btn btn-primary'> {state.count} </button>
    )
}

export default CounterButton;
