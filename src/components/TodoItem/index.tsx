import React from "react";
import "./style.scss";
import { useAppDispatch } from "../../utils/hooks";
import { toggleIsComplete, deleteTodo } from "../../store/todoSlice";

type TodoItemProps = {
  id: string;
  title: string;
  isCompleted: boolean;
};

const TodoItem: React.FC<TodoItemProps> = ({ id, title, isCompleted }) => {
  const dispatch = useAppDispatch();

  return (
    <li className={isCompleted ? "checked" : ""}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => dispatch(toggleIsComplete(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(deleteTodo(id))}>
        <img
          className="delete-button-icon"
          src="./img/delete-button.png"
          alt="delete button"
        />
      </span>
    </li>
  );
};

export default TodoItem;
