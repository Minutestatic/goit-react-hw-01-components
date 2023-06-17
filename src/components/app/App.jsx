import Profile from "components/profile/";
import Statistics from "components/statistics/";
import user from '../../data/user.json';
import data from '../../data/data.json';



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
      <Statistics  stats={data} />
    </div>
  );
};

export default App;