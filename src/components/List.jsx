import React from "react";

export default function List({ todos, setTodos }) {
  return todos.length > 0 ? (
    <ul className="space-y-2 w-full divide-gray-200 max-w-sm px-5 mx-auto">
      {todos.map((item) => (
        <li
          key={item.id}
          onClick={() => {
            setTodos((prev) => {
              return prev.map((todo) => {
                if (todo.id === item.id) {
                  return { ...todo, do: !todo.do };
                }
                return todo;
              });
            });
          }}
          className="py-4 flex bg-gray-50 rounded hover:bg-gray-100 select-none cursor-pointer"
        >
          <div className={`${item.do ? "line-through opacity-40" : ""} ml-3`}>
            <p className="text-sm font-medium  text-gray-900">{item.title}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <div className="text-sm">No Todos</div>
  );
}
