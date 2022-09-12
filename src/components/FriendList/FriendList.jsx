
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ id, isOnline, avatar, name }) => {
                return (
                    <li className="item" key={id}>
                        <span className="status">{isOnline}</span>
                        <img className="avatar" src={avatar} alt="User avatar" width="48" />
                        <p className="name">{name}</p>
                    </li>
                )
            })}
        </ul>
    )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool,
            id: PropTypes.number.isRequired,

        })
    )
}

export default FriendList


