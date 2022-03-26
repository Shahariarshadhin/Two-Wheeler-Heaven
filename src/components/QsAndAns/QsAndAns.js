import React from 'react';
import './QsAndAns.css'
const QsAndAns = () => {
    return (
        <div className='ans'>
            <h1>Qs & Ans</h1>
            <h2>Props Vs State</h2>
            <h4>Props :</h4>
            <p>Props are immutable.</p>
            <p>You can pass properties from parent components.</p>
            <p>Determine the view upon creation and then they ramin static.</p>

            <h4>State :</h4>
            <p>State are mutable</p>
            <p>You can define states in the component itself</p>
            <p>The state  is set and updated by the object</p>
            <h5>Both are accessible as attributes of the component class and compose components with a different representation.</h5>

            <h4>How useState works?</h4>
            <p>UseState is a react hook. We need import first for using it.Then we call it inside a function component. In there we pass a default value, that will be our current state. useState will return two values, one is current state and another one is a set funtion to update the current state. After that we'll use that set function with the current state passed inside of it to use. That will rerander the state changed by the useState. Also we can pass a funtion inside the set funtion to update the value. This will give use more flexibility to modify the state.</p>
        </div>


    );
};

export default QsAndAns;