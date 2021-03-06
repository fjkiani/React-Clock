import React from 'react'


// onClick methods will uplift the state 
// will be called in app.js


function Break (props) {
        function decreaseCounter () {
            //cant decrease lower than 1
            if (props.break === 1) {
                return
            }
            props.decreaseBreak();
        }
        function increaseCounter () {
             if (props.break === 3) {
                 return
             }
             props.increaseBreak();
        }
        

    return (
        <div>
            <h4>How many breaks do you need?</h4>
         <section>
            <button onClick = {decreaseCounter}>Down</button>
            <p>{props.break}</p>
            <button onClick = {increaseCounter}>Up</button>
         </section>
        </div>
    )
}

export default Break

