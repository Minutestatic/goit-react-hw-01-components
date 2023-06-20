import css from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      <FriendListItem friends={friends} />
    </ul>
  );
};

export default FriendList;
