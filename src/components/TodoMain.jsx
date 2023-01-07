import React from "react";
import ListBox from "./ListBox";
import styled from "./TodoMain.module.css";

export default function TodoMain({ list, handleDelete, handleUpdate }) {
  if (list && list.length < 1) {
    return (
      <main>
        <p>항목이 없습니다</p>
      </main>
    );
  }
  return (
    <main className={styled.mainContainer}>
      {list.map((item, idx) => (
        <ListBox
          item={item}
          key={idx}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </main>
  );
}
