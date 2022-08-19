import { useState, Fragment } from "react";
import "./App.css";
import Counter from "./Counter";
import UserActive from "./UserActive";

function App() {
  const [count, setCount] = useState(3);
  const [isActive] = useState(true);

  const showGreeting = (numb) => {
    // let result = "";
    // if (numb >= 18) {
    //   result = "Eres mayor de edad 🍻";
    // } else {
    //   result = "no puedes tomar alcohol";
    // }
    // return result;

    // return  (age >= 18) ? 'Hola, eres mayor de edad 😎' : 'No eres mayor de edad 😕';
    const message =
      numb >= 18 ? (
        <span>Hola, eres mayor de edad 😎</span>
      ) : (
        <span>No eres mayor de edad 😕</span>
      );

    return message;
  };

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* JSX */}
      {showGreeting(18)}

      {/* CONDTIONAL RENDERING */}
      {/*  { IF () 👉🏽 validacion && component } */}
      {count > 2 && <Counter />}

      {/*  { IF ELSE () 👉🏽 validacion ? TRUE : FALSE  } */}
      {isActive === true ? <UserActive /> : <h4>Usuario NO activo</h4>}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
