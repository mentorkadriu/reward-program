import style from "./Spinner.module.css";

export default function Spinner({ className = "", ...rest }) {
  return (
    <div className={`${style.spinner} ${className}`} {...rest}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
