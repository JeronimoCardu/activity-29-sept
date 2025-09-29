export default function MyButton(props) {
  return (
    <button
      className={` btn btn-${props.size} btn-${props.variant}`}
    >
      {props.text}
    </button>
  );
}
