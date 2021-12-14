import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import NewTodo from "./components/NewTodo";
import { v4 as uuidv4 } from "uuid";

function App() {
  const data = [
    { id: uuidv4(), title: "Buy Milk", description: "Description", do: false },
    { id: uuidv4(), title: "Read Book", description: "Description", do: true },
  ];
  const [todos, setTodos] = React.useState(data);
  return (
    <div className="flex items-center flex-col">
      <Header />
      <List todos={todos} setTodos={setTodos} />
      {todos.filter((todo) => todo.do === true).length > 0 && (
        <button
          onClick={() => {
            setTodos((prev) => {
              return prev.filter((todo) => todo.do === false);
            });
          }}
          className="my-2 mx-auto text-red-600 text-xs"
        >
          Remove Completed Todos
        </button>
      )}
      <NewTodo setTodos={setTodos} />
    </div>
  );
}

export default App;
