import PropTypes from 'prop-types';
import { ListItem, Status } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <Status isActive={isOnline === true}></Status>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]).isRequired,
};

export default FriendListItem;
