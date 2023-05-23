import PropTypes from 'prop-types';
import css from './Profile.module.css';

function Profile({ username, avatar, tag, location, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.profile__description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.profile__avatar}
          width="150"
        />
        <p className={css.profile__name}>{username}</p>
        <p className={css.profile__tag}>@{tag}</p>
        <p className={css.profile__location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats__item}>
          <span className={css.stats__label}>Followers</span>
          <span className={css.stats__quantity}>{stats.followers}</span>
        </li>
        <li className={css.stats__item}>
          <span className={css.stats__label}>Views</span>
          <span className={css.stats__quantity}>{stats.views}</span>
        </li>
        <li className={css.stats__item}>
          <span className={css.stats__label}>Likes</span>
          <span className={css.stats__quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
