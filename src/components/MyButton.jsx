export default function MyButton(props) {
  return (
    <button
      onClick={!props.disabled ? props.onClick : () => {}}
      className={`${props.disabled && "disabled"} btn btn-${props.size} btn-${
        props.variant
      }`}
    >
      {props.text}
    </button>
  );
}
