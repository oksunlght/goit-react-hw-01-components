import styled from '@emotion/styled';

export const Container = styled.div`
  width: 450px;
  height: auto;

  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
  margin-top: 50px;
  border: 1px solid grey;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const ProfileDescription = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

export const Avatar = styled.img`
  margin-bottom: 30px;
  margin-top: 50px;
  width: 150px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  border: 1px solid grey;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font-size: 26px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
  color: grey;
`;

export const Location = styled.p`
  margin-bottom: 50px;
  text-align: center;
  font-size: 18px;
  color: grey;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  padding: 15px;
  width: 150px;
  height: 100px;
  justify-content: center;
  flex-direction: column;

  border-top: 1px solid grey;

  background-color: rgba(156, 201, 224, 0.477);

  &:not(:last-child) {
    border-right: 1px solid grey;
  }
`;

export const Label = styled.span`
  margin-bottom: 10px;
  text-align: center;
  font-size: 16px;

  color: grey;
`;

export const Quantity = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;
