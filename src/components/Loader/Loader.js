import Spinner from "../Spinner/Spinner";
import style from "./Loader.module.css";

export default function Loader({ className = "", ...rest }) {
  return (
    <div className={`${style.wrapper} ${className}`}>
      <Spinner />
    </div>
  );
}
