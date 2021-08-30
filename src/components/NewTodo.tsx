import React, { useRef } from "react";
import styled from "@emotion/styled";
// import { css, keyframes } from "@emotion/react";

type NewTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  // styles
  const SForm = styled.form`
    width: 90%;
    max-width: 40rem;
    margin: 2rem auto;
  `;

  const SFormControl = styled.div`
    margin-bottom: 1rem;
  `;

  const SDisplayBlock = styled.label`
    display: block;
    width: 100%;
  `;

  const SLabel = styled(SDisplayBlock)`
    font-weight: bold;
  `;

  const SInput = styled(SDisplayBlock.withComponent("input"))`
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.25rem;
    &:focus {
      outline: none;
      border-color: #50005a;
    }
  `;

  const SButton = styled.button`
    background: #50005a;
    border: 1px solid #50005a;
    color: white;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &:hover,
    :active {
      background: #6a0a77;
      border-color: #6a0a77;
    }
  `;

  // refを使用してDOM要素にアクセスする
  const textInputRef = useRef<HTMLInputElement>(null); // tips:useRefはジェネリック型で、初期値はundefined
  // フォーム送信時のイベント
  const todoSubmitHandler = (event: React.FormEvent) => {
    // フォームが持つデフォルトの動作をキャンセルする
    event.preventDefault(); // tips:form要素に送信先が指定されていない場合、現在のURLに対してフォーム内容を送信し、リロードされる
    const enterdText = textInputRef.current!.value;
    props.onAddTodo(enterdText);
  };
  return (
    <SForm onSubmit={todoSubmitHandler}>
      <SFormControl>
        <SLabel htmlFor="todo-text">TODO内容</SLabel>
        <SInput type="text" id="todo-text" ref={textInputRef} />
      </SFormControl>
      <SButton type="submit">TODO追加</SButton>
    </SForm>
  );
};

export default NewTodo;
