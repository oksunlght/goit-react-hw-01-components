import styled from '@emotion/styled';

export const TransactionRow = styled.tr`
  margin: 0;
  padding: 0;

  &:nth-child(2n) {
    background-color: rgba(192, 192, 192, 0.452);
  }
`;

export const Type = styled.td`
  font-size: 14px;
  text-align: center;
  color: grey;

  width: 200px;
  height: 50px;

  text-transform: capitalize;
  border-right: 1px solid rgba(192, 192, 192, 0.882);
`;

export const Amount = styled.td`
  font-size: 14px;
  text-align: center;
  color: grey;

  width: 200px;
  height: 50px;

  text-transform: capitalize;
  border-right: 1px solid rgba(192, 192, 192, 0.882);
`;

export const Currency = styled.td`
  font-size: 14px;
  text-align: center;
  color: grey;

  width: 200px;
  height: 50px;
`;
