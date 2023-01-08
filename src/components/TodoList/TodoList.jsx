import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodosFromLocalStorage);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleUpdate = (updated) =>
    setTodos(todos.map((v) => (v.id === updated.id ? updated : v)));

  const handleDelete = (id) => setTodos(todos.filter((v) => v.id !== id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filterd = getFilterdTodo(todos, filter);

  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {filterd.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))}
        </ul>

        <AddTodo onAdd={handleAdd} />
      </section>
    </>
  );
}

function readTodosFromLocalStorage() {
  console.log("tlfgod");
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function getFilterdTodo(todos, filter) {
  if (filter === "all") {
    return todos;
  }

  return todos.filter((v) => v.status === filter);
}
