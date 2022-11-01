import React from "react";
import "./style.scss";

type TodoInputFormProps = {
  inputText: string;
  updateInputText: (newValue: string) => void;
  handleButtonClick: (event: React.FormEvent<HTMLElement>) => void;
};

const TodoInputForm: React.FC<TodoInputFormProps> = ({
  inputText,
  updateInputText,
  handleButtonClick,
}) => {
  return (
    <form className="todos-form" onSubmit={handleButtonClick}>
      <input
        className="todos-form-input"
        placeholder="What needs to be done?"
        value={inputText}
        onChange={(e) => updateInputText(e.target.value)}
      />
      <button
        className="todos-form-button"
        onClick={(event) => handleButtonClick(event)}
      >
        ✓
      </button>
    </form>
  );
};

export default TodoInputForm;
