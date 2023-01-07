import React from "react";
import { BsTrash } from "react-icons/bs";
import styled from "./ListBox.module.css";

export default function ListBox({ item, handleDelete, handleUpdate }) {
  return (
    <div className={styled.container}>
      <div className={styled.inputContainer}>
        <input
          type="checkbox"
          value={item.isComplete}
          onChange={() => {
            handleUpdate(item.title);
          }}
        />
        <label>{item && item.title}</label>
      </div>

      <button
        onClick={() => {
          handleDelete(item.title);
        }}
      >
        <BsTrash />
      </button>
    </div>
  );
}
