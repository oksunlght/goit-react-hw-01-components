import css from './StatsElement.module.css';

export const StatsElement = ({ label, percentage, backgroundColor }) => {
  return (
    <li style={{ backgroundColor: backgroundColor }} className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
};
