import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { Form } from './components/Form';
import { HelperContext } from './context';
import React from 'react';

function App() {

  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");

  return (
    <div className="App">
      <HelperContext.Provider value={{ count, setCount, name, setName }}>
        <Counter />
        <Form />
      </HelperContext.Provider>
    </div>
  );
}

export default App;
