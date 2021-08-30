import React from "react";
import styled from "@emotion/styled";
// type TodoListProps = {
//   items: { id: string; text: string }[];
// }

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const SUl = styled.ul`
    list-style: none;
    width: 90%;
    max-width: 40rem;
    margin: 2rem auto;
    padding: 0;
  `;

  const SLi = styled.li`
    margin: 1rem 0;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  return (
    <SUl>
      {props.items.map((todo) => (
        <SLi key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>削除</button>
        </SLi>
      ))}
    </SUl>
  );
};

export default TodoList;
