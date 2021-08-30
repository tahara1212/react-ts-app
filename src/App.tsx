import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { useState } from "react";
import { Todo } from "./Todo.model";

// function App() {
//   return <div className="App"></div>;
// }

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    // stateの引数で最新の一つ前のstateを受け取る
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]); // tips:stateは非同期に実施される為、todosをスプレッドで展開しても最新のstateを保持しているとは限らない
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
