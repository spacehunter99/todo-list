import React from "react";
import "./style.scss";
import { useState } from "react";
import { useAppDispatch } from "../../utils/hooks";
import { addTodo } from "../../store/todoSlice";

import TodoInputForm from "../TodoInputForm";
import TodoList from "../TodoList";

const App: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    if (inputText.trim().length > 0) {
      dispatch(addTodo(inputText));
      setInputText("");
    }
  };

  return (
    <div className="main-container">
      <h1>todos</h1>
      <TodoInputForm
        inputText={inputText}
        updateInputText={setInputText}
        handleButtonClick={handleButtonClick}
      />
      <TodoList />
    </div>
  );
};

export default App;
