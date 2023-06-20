import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => {
  return friends.map(friend => {
    let statusClass = friend.isOnline ? css.isOnline : css.isOffline;
    return (
      <li className={css.item} key={friend.id}>
        <span className={statusClass}></span>
        <img
          className={css.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{friend.name}</p>
      </li>
    );
  });
};
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendListItem;
