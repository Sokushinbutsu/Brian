import React, { Fragment, useState } from "react";
import "./App.css";

type FormElem = React.FormEvent<HTMLFormElement>;

interface Todo {
  text: string;
  complete: boolean;
}
const App: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodo] = useState<Todo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    createTodo(value);
    setValue("");
  };

  const createTodo = (text: string): void => {
    const newTodoArray: Todo[] = [...todos, { text, complete: false }];
    setTodo(newTodoArray);
  };

  // For the following two functions I learned that a setter created by useState can take in the old state
  // which allows for a much cleaner way of updating state.
  // I'm leaving my original code here so I can look back on my learning process.

  const completeTodo = (index: number): void => {
    // const newTodoArray: Todo[] = [...todos];
    // newTodoArray[index].complete = !newTodoArray[index].complete;
    // setTodo(newTodoArray);

    setTodo(state =>
      state.map((todo: Todo, i: number) =>
        i === index ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const removeTodo = (index: number): void => {
    // const newTodoArray: Todo[] = [...todos];
    // let filtered = newTodoArray.filter((todo: Todo, i: number) => i !== index);
    // setTodo(filtered);

    setTodo(state => state.filter((todo: Todo, i: number) => i !== index));
  };

  return (
    <Fragment>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add ToDo</button>
      </form>

      <section>
        {todos.map((todo: Todo, index: number) => (
          <Fragment key={index}>
            <div>{todo.text}</div>
            <button type="button" onClick={() => completeTodo(index)}>
              {todo.complete ? "Complete" : "Incomplete"}
            </button>
            <button type="button" onClick={() => removeTodo(index)}>
              {"remove"}
            </button>
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
};

export default App;
