import PropTypes from "prop-types";
import css from '../Profile/profile.module.css'

const Profile = ({ user, tag, location, avatar, stats: { followers, views, likes } }) => (
    <div className={css.profile}>
        <div className={css.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />
            <p className={css.name}> Name: {user}</p>
            <p className={css.tag}> @: {tag}</p>
            <p className={css.location}>location: {location}</p>
        </div>

        <ul className={css.stats}>
            <li className={css.item}>
                <span className="label">Followers: {followers}</span>
            </li>
            <li className={css.item}>
                <span className="label">Views: {views}</span>
            </li>
            <li className={css.item}>
                <span className="label">Likes: {likes}</span>
            </li>
        </ul>
    </div>
);


Profile.propTypes = {
    user: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
    })
}

export default Profile