import React from "react";
import "./style.scss";

type TodoInputFormProps = {
  inputText: string;
  updateInputText: (newValue: string) => void;
  handleButtonClick: () => void;
};

const TodoInputForm: React.FC<TodoInputFormProps> = ({
  inputText,
  updateInputText,
  handleButtonClick,
}) => {
  return (
    <div>
      <input
        placeholder="What needs to be done?"
        value={inputText}
        onChange={(e) => updateInputText(e.target.value)}
      />
      <button onClick={handleButtonClick}>Add todo</button>
    </div>
  );
};

export default TodoInputForm;
