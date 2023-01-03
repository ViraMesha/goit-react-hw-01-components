import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import { List } from "./FriendList.styled";


const FriendList = ({friends}) => {
    return (
        <List className="friend-list">
            {friends.map(({id, avatar, name, isOnline}) => (
                     <FriendListItem key={id}
                 avatar={avatar}
                 name = {name}
                 isOnline = {isOnline}
                 />
            )
            )}
</List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    )
}

export default FriendList;