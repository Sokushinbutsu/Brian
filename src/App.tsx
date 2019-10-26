import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { TextField } from "./components/TextField";
const App: React.FC = () => {
  return (
    <>
      <TextField
        text="hello"
        person={{ firstName: "Brian", lastName: "Nelson" }}
      />
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </>
  );
};

export default App;
