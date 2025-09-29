import "./misComponentes.css";
import MyButton from "./components/MyButton";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function addCount() {
    console.log(count + 1);
    setCount(count + 1);
  }
  return (
    <div>
      <MyButton
        disabled={false}
        text="Click me"
        variant="primary"
        size="medium"
        onClick={addCount}
      />
      <MyButton
        disabled={false}
        text="Click me"
        variant="secondary"
        size="small"
        onClick={addCount}
      />
      <MyButton
        text="Don't click me"
        variant="danger"
        size="large"
        disabled={true}
        onClick={addCount}
      />
      <MyButton
        disabled={false}
        text="Click me"
        variant="primary"
        size="large"
        onClick={addCount}
      />
      <MyButton
        disabled={false}
        text="Click me"
        variant="secondary"
        size="medium"
        onClick={addCount}
      />
    </div>
  );
}
