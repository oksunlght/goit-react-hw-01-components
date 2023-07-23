import PropTypes from 'prop-types';
import { TransactionRow, Type, Amount, Currency } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <TransactionRow>
      <Type>{type}</Type>
      <Amount>{amount}</Amount>
      <Currency>{currency}</Currency>
    </TransactionRow>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
