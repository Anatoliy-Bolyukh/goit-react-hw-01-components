
import PropTypes from "prop-types";
import css from '../FriendList/friendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.list}>
            {friends.map(({ id, isOnline, avatar, name }) => {
                return (
                    <li className={css.item} key={id}>
                        <span className={css.status} style={{ backgroundColor: isOnline ? "green" : "red" }}></span>
                        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{name}</p>
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


