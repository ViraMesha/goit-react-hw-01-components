import PropTypes from "prop-types";
import { ListItem, Status } from "./FriendListItem.styled";

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <ListItem>{
    isOnline ? <Status variant="online" isActive={isOnline === true}></Status> : <Status variant="offline" isActive={isOnline === false}></Status>}
  <img className="avatar" src={avatar} alt={name} width="48" />
  <p className="name">{name}</p>
</ListItem>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
isOnline: PropTypes.oneOf([true, false]).isRequired,
}

export default FriendListItem