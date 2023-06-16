import Profile from "components/profile/";
import user from '../../data/user.json';


const App = () => {
  const { username, tag, location, avatar, stats:{followers,views, likes}} = user;
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
    </div>
  );
};

export default App;