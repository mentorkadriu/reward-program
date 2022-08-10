import { useContext } from "react";
import RewardCard from "../RewardCard/RewardCard";
import style from "./RewardsList.module.css";
import AppContext from "../../contexts/AppContext";

export default function RewardsList({ className = "", ...rest }) {
  const { rewards } = useContext(AppContext);
  return (
    <section className={`${style.list} ${className}`} {...rest}>
      {rewards.map((reward) => (
        <RewardCard key={reward.customerId} reward={reward} />
      ))}
    </section>
  );
}
