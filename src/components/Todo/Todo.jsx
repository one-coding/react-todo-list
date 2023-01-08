import React from "react";
import { BsTrash } from "react-icons/bs";

import styles from "./Todo.module.css";

export default function Todo({ todo, onDelete, onUpdate }) {
  const { title, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    const update = {
      ...todo,
      status,
    };

    onUpdate(update);
  };
  const handleDelete = () => onDelete(todo.id);

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        id={`checkbox_${todo.id}`}
        type="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor={`checkbox_${todo.id}`}>
        {todo && title}
      </label>

      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <BsTrash />
        </button>
      </span>
    </li>
  );
}
