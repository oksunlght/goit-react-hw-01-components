import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;

  border-collapse: collapse;

  border: 1px solid rgb(141, 136, 136);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Head = styled.thead`
  width: 200px;
  height: 50px;

  text-transform: uppercase;
  color: white;
  font-size: 14px;
  background-color: rgba(42, 156, 213, 0.908);
`;

export const Item = styled.th`
  &:not(:last-child) {
    border-right: 1px solid rgb(243, 236, 236);
  }
`;
