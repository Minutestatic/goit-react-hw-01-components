import Profile from "components/profile";
import Statistics from "components/statistics";
import FriendList from "components/friendList";
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json'



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
      
      <FriendList friends={friends} />;
    </div>
  );
};

export default App;