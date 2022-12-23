import React from 'react';
import { HelperContext } from '../context';

export const Counter = (props) => {

    const helperContext = React.useContext(HelperContext);

    return <div>
        <h1>Counter</h1>
        <p>My Name: {helperContext.name}</p>
        <p>Count: {helperContext.count}</p>
        <button onClick={(e) => helperContext.setCount(helperContext.count + 1)}>Increment</button>
    </div>
}