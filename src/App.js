import "./App.scss";
import Register from "./Register/Register";
import { Route, Switch } from "react-router-dom";
import Login from "./Login/Login";
import { createContext, useEffect, useState } from "react";
import Feed from "./Feed/Feed";
import Header from "./Header/Header";
import { me } from "./services/user.service";
import { useHistory } from "react-router-dom";
import PostCreate from "./postCreate/PostCreate";
import Profile from "./Profile/Profile";
import Search from "./Search/Search";
import PostPage from "./PostPage/PostPage";

export const UserContext = createContext({ loggedIn: false });

function App() {
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    me()
      .then((loggedUser) => {
        if (!isLoggedIn(loggedUser)) {
          history.push("/login");
          return;
        }
        setUser(loggedUser);
      })
      .catch((err) => console.log(err));
  }, [history]);

  function isLoggedIn(user) {
    return user.hasOwnProperty("_id");
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        {isLoggedIn(user) && <Header />}
        <Switch>
          <Route path="/profile/:username">
            <Profile />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/post/create">
            <PostCreate />
          </Route>
          <Route path="/post/:id">
            <PostPage />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Feed />
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
