import PropTypes from 'prop-types';
import css from './FriendList.module.css';

function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={css.friend__item} key={id}>
      {isOnline ? (
        <span className={css.friend__online}></span>
      ) : (
        <span className={css.friend__offline}></span>
      )}
      <img className={css.friend__avatar} src={avatar} alt={name} width="48" />
      <p className={css.friend__name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
