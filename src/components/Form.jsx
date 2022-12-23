import React from "react";
import { HelperContext } from "../context";
import { CompA } from "./CompA";

export const Form = (props) => {

    const helperContext = React.useContext(HelperContext);

    return <div>
        <h1>Form</h1>
        <p>My Count:{helperContext.count}</p>
        <input type={"text"} placeholder={"Name"} value={helperContext.name} onChange={(e) => helperContext.setName(e.target.value)}/>
        <p>Name: {helperContext.name}</p>

        <CompA />
    </div>
}