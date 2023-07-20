import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  width: 350px;
  height: 120px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  padding-left: 20px;

  border: 1px solid rgb(141, 136, 136);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  margin-right: 20px;
  border-radius: 50%;

  background-color: ${({ status }) => {
    if (status) {
      return `rgb(38, 161, 38)`;
    } else {
      return `rgb(238, 85, 58)`;
    }
  }};
`;

export const Avatar = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 20px;
  border: 1px solid rgb(141, 136, 136);
  border-radius: 15%;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
