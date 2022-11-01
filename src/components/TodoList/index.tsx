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
      <ul className="todos-container-list">{mappedTodos}</ul>
      <span>{activeTodosCounter} active items left</span>
      <button onClick={() => todoFilter("all")}>All</button>
      <button onClick={() => todoFilter(false)}>Active</button>
      <button onClick={() => todoFilter(true)}>Completed</button>
      <button onClick={() => dispatch(removeCompletedTodos())}>
        Clear completed
      </button>
    </div>
  );
};

export default TodoList;
