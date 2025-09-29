import "./misComponentes.css";
import CustomButton from "./components/CustomButton";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function addCount() {
    console.log(count + 1);
    setCount(count + 1);
  }
  return (
    <div>
      <CustomButton
        disabled={false}
        text="Click me"
        variant="primary"
        size="medium"
        onClick={addCount}
      />
      <CustomButton
        disabled={false}
        text="Click me"
        variant="secondary"
        size="small"
        onClick={addCount}
      />
      <CustomButton
        text="Don't click me"
        variant="danger"
        size="large"
        disabled={true}
        onClick={addCount}
      />
      <CustomButton
        disabled={false}
        text="Click me"
        variant="primary"
        size="large"
        onClick={addCount}
      />
      <CustomButton
        disabled={false}
        text="Click me"
        variant="secondary"
        size="medium"
        onClick={addCount}
      />
    </div>
  );
}
