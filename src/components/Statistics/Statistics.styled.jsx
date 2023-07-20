import styled from '@emotion/styled';

export const StatsSection = styled.section`
  width: 450px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
  padding-top: 30px;
  border: 1px solid rgb(141, 136, 136);
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  color: rgb(55, 54, 54);
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 90px;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
`;

export const Percentage = styled.span`
  font-size: 26px;
  color: #fff;
  font-weight: 700;
`;
