import "./App.css";
import MyButton from "./components/MyButton";
import "./misComponentes.css";

export default function App() {
  return (
    <div>
      <MyButton
        disabled={false}
        text="Click me"
        variant="primary"
        size="medium"
        onClick=""
      />
      <MyButton
        disabled={false}
        text="Click me"
        variant="secondary"
        size="small"
        onClick=""
      />
      <MyButton
        text="Don't click me"
        variant="danger"
        size="large"
        disabled={true}
        onClick=""
      />
      <MyButton
        disabled={false}
        text="Click me"
        variant="primary"
        size="large"
        onClick=""
      />
      <MyButton
        disabled={false}
        text="Click me"
        variant="secondary"
        size="medium"
        onClick=""
      />
    </div>
  );
}
