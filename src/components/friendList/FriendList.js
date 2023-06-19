const FriendList = props => {
  const { friends } = props;

  return (
    <ul className="friend-list">
      {friends.map(friend => {
        let statusClass = friend.isOnline ? 'isOnline' : 'isOffline';
        return (
          <li className="item" key={friend.id}>
            <span className={statusClass}></span>
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
