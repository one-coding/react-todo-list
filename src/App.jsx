import Todo from "./components/Todo";
import styled from "./App.module.css";

function App() {
  return (
    <div className={styled.container}>
      <Todo />
    </div>
  );
}

export default App;
