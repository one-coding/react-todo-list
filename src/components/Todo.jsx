import React, { useCallback, useState } from "react";
import TodoHeader from "./TodoHeader";
import styled from "./Todo.module.css";
import TodoMain from "./TodoMain";
import ListInput from "./ListInput";

export default function Todo() {
  const [navList, setNavList] = useState(initailNavList);

  const [filter, setFilter] = useState("total");

  const [list, setList] = useState([]);

  const onInput = (title) => {
    title &&
      setList((list) => [...list, { title, type: "todo", isComplete: false }]);
  };

  const handleUpdate = (title) => {
    setList((prev) => {
      return list.map((v) => {
        if (v.title === title) {
          return {
            title: v.title,
            type: !v.isComplete ? "completed" : "todo",
            isComplete: !v.isComplete,
          };
        }
        return v;
      });
    });
  };

  const handleDelete = (title) => {
    setList((prev) => {
      return list.filter((v) => v.title !== title);
    });
  };

  return (
    <div className={styled.container}>
      <TodoHeader navList={navList} />

      <TodoMain
        list={list}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
      <ListInput onInput={onInput} />
    </div>
  );
}

const initailNavList = [
  {
    title: "전체",
    isSelected: true,
  },
  {
    title: "할 일",
    isSelected: false,
  },
  {
    title: "완료",
    isSelected: false,
  },
];
