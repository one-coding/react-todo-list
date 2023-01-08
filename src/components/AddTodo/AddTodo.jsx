import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), title: text, status: "active" });
    setText("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        id="todoInput"
        className={styles.input}
        name="todoInput"
        type="text"
        placeholder="to do add"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
}
