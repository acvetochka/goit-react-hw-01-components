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
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
