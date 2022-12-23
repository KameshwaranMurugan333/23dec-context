import React from "react";
import { HelperContext } from "../context";

export const CompF = (props) => {

    const helperContext = React.useContext(HelperContext);

    return <div>
        <h1>CompF</h1>
        <p>Count: {helperContext.count}</p>
    </div>
}