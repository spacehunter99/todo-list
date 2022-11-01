import { useAppSelector, useAppDispatch } from "../../utils/hooks";
import { removeCompletedTodos } from "../../store/todoSlice";
import "./style.scss";
import TodoItem from "../TodoItem";
import { Todo } from "./../../store/todoSlice";
import { useState, useEffect } from "react";

const TodoList: React.FC = () => {
  const allTodos = useAppSelector((state) => state.todos.todosList);

  const [filteredTodos, setFilteredTodos] = useState(allTodos);

  useEffect(() => {
    setFilteredTodos(allTodos);
  }, [allTodos]);

  function todoFilter(status: string | boolean): void {
    if (status === "all") {
      setFilteredTodos(allTodos);
    } else {
      let newList = [...allTodos].filter((todo) => todo.isCompleted === status);
      setFilteredTodos(newList);
    }
  }

  const activeTodosCounter = allTodos.filter(
    (todo: Todo) => todo.isCompleted === false
  ).length;

  const dispatch = useAppDispatch();

  const mappedTodos = filteredTodos.map((item) => {
    return (
      <TodoItem
        key={item.id}
        id={item.id}
        title={item.title}
        isCompleted={item.isCompleted}
      />
    );
  });

  return (
    <div className="todos-container">
      <ul className="todos-container-list">
        {mappedTodos.length > 0 ? (
          mappedTodos
        ) : (
          <p className="empty-list-figure">list is empty</p>
        )}
      </ul>
      <div className="bottom-panel">
        <div className="bottom-panel-left">
          {activeTodosCounter} active items left
        </div>
        <div className="bottom-panel-central">
          <button className="all-button" onClick={() => todoFilter("all")}>
            All
          </button>
          <button className="active-button" onClick={() => todoFilter(false)}>
            Active
          </button>
          <button className="completed-button" onClick={() => todoFilter(true)}>
            Completed
          </button>
        </div>
        <div className="bottom-panel-right">
          <button
            className="clear-completed-button"
            onClick={() => dispatch(removeCompletedTodos())}
          >
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
