
const Profile = ({ name, tag, location, avatar, stats: { followers, views, likes } }) => (
    <div className="profile">
        <div className="description">
            <img
                src={avatar}
                alt="User avatar"
                className="avatar"
            />
            <p> Name: {name}</p>
            <p> @: {tag}</p>
            <p>location: {location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className="label">Followers: {followers}</span>
            </li>
            <li>
                <span className="label">Views: {views}</span>
            </li>
            <li>
                <span className="label">Likes: {likes}</span>
            </li>
        </ul>
    </div>
);

export default Profile