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
    <li className={isCompleted ? "li-item checked" : "li-item"}>
      <div className="task-container">
        <div className="checkbox-and-title-container">
          <input
            className="rounded-checkbox"
            id="todo-checkbox"
            type="checkbox"
            checked={isCompleted}
            onChange={() => dispatch(toggleIsComplete(id))}
          />
          <div className="task-title">{title}</div>
        </div>
        <div onClick={() => dispatch(deleteTodo(id))}>
          <img
            className="delete-button-icon"
            src="./img/delete-button.png"
            alt="delete button"
          />
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
