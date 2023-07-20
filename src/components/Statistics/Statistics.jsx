// import { StatsElement } from 'components/StatsElement/StatsElement';
import PropTypes from 'prop-types';
// import css from './Statistics.module.css';
import { getRandomHexColor } from 'utils';
import {
  StatsSection,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </Item>
        ))}
      </List>
    </StatsSection>
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
