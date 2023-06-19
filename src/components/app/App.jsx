import Profile from "components/profile";
import Statistics from "components/statistics";
import FriendList from "components/friendList";
import TransactionHistory from "components/TransactionHistory";
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json'
import transactions from '../../data/transactions'




const App = () => {
  const { username, tag, location, avatar, stats: { followers, views, likes } } = user;
  
  return (
    <div >
      <Profile
        username = { username }
        tag = { tag } 
        location = { location }
        avatar = { avatar}
        followers = { followers }
        views = { views }
        likes = { likes }
      />

      <Statistics  title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions}/>
    </div>
  );
};

export default App;