import { todo } from "node:test";
import React, { useRef } from "react";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // console.log(todo);

  return (
    <form
      className="input"
      // onSubmit={(e) => {
      //   handleAdd(e);
      //   inputRef.current?.blur();
      // }}
      onSubmit={handleAdd}
    >
      <input
        className="input__box"
        type="text"
        placeholder="Enter a Task"
      value={todo}
        // ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Enter
      </button>
    </form>
  );
};

export default InputField;
