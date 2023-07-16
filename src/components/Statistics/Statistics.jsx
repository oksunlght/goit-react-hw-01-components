// import { StatsElement } from 'components/StatsElement/StatsElement';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from 'utils';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statlist}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
            className={css.item}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

// export const Statistics = ({ title, stats }) => {
//   return (
//     <section className={css.statistics}>
//       {title && <h2 className={css.title}>{title}</h2>}

//       <ul className={css.statlist}>
//         {stats.map(item => (
//           <StatsElement
//             key={item.id}
//             label={item.label}
//             percentage={item.percentage}
//             backgroundColor={getRandomHexColor()}
//           />
//         ))}
//       </ul>
//     </section>
//   );
// };
