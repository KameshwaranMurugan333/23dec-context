import React from "react";

export const HelperContext = React.createContext({
    count: 0,
    setCount: () => false,
    name: "",
    setName: () => false
});

export const ThemeContext = React.createContext({
    theme: "dark"
});