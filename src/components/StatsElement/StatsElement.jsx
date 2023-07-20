// import css from './StatsElement.module.css';
import { Item, Label, Percentage } from './StatsElement.styled';

export const StatsElement = ({ label, percentage, backgroundColor }) => {
  return (
    <Item style={{ backgroundColor: backgroundColor }}>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </Item>
  );
};
