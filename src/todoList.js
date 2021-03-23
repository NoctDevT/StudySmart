import React, { useReducer, useState } from "react";

function reducer(state, action) {
  var conditionCheck = state.todoCount === 0;

  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],

        todoCount: state.todoCount + 1
      };

    case "toggle-todo":
      return {
        todos: state.todos.map((t, index) =>
          index === action.index ? { ...t, completed: !t.completed } : t
        ),
        todoCount: conditionCheck ? state.todoCount : state.todoCount - 1
      };
    default:
      return state;
  }
}

export const TodoList = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0
  });
  const [text, setText] = useState();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", text });
          setText("");
        }}
      >
        <div className="taskTitle"> Task List </div>

        <div className="todoInputContainer">
          <div className="inputTitle"> Enter a task </div>
          <input
            value={text}
            className="todo_input "
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </form>

      <div className="todo_title">Number of tasks : {todoCount}</div>
      <div className="todoContainer">
        {todos.map((t, index) => (
          <div
            key={t.text}
            className="todo_item"
            onClick={() => dispatch({ type: "toggle-todo", index })}
            style={{
              textDecoration: t.completed ? "line-through" : "none"
            }}
          >
            {" "}
            {t.text} {t.completed ? ": 🟢" : ":  🔴"}
          </div>
        ))}
      </div>
    </div>
  );
};
