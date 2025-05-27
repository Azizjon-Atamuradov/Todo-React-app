import React from "react";
import styles from "./todoitem.module.css";

const TodoItem = ({ item, todos, setTodos }) => {
  const handleDelete = (item) => {
    console.log("Delete button clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  };

  const handleClick = (name) => {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const className = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
};

export default TodoItem;
