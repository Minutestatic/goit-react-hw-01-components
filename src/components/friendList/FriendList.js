import css from './friend-list.module.css';

const FriendList = props => {
  const { friends } = props;

  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => {
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
      })}
    </ul>
  );
};

export default FriendList;
