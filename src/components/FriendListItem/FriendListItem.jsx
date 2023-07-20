import PropTypes from 'prop-types';
// import css from './FriendListItem.module.css';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status status={isOnline}></Status>
      {/* {isOnline ? (
        <Status className={`${css.status} ${css.online}`}>{isOnline}</Status>
      ) : (
        <Status className={`${css.status} ${css.offline}`}>{isOnline}</Status>
      )} */}
      {/* <span className={css.status}>{isOnline}</span> */}
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
