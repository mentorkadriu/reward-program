import style from "./RewardCard.module.css";
export default function RewardCard({ reward, className = "", ...rest }) {
  const { customerId, pointsPerMonths, totalPoints } = reward;
  return (
    <article className={`${style.card} ${className}`} {...rest}>
      <h3>Customer: {customerId}</h3>
      <ul className={style.list}>
        {Object.entries(pointsPerMonths).map(([key, value]) => {
          const month = new Date(`2022-${key}`).toLocaleString("default", {
            month: "long",
          });
          return (
            <li key={key}>
              <span>{month}:</span> <span>{value}</span>
            </li>
          );
        })}
        <li>
          <span>TotalPoints:</span>{" "}
          <span>
            <b>{totalPoints}</b>
          </span>
        </li>
      </ul>
    </article>
  );
}
