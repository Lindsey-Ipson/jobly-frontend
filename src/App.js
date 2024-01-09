import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import RoutesList from "./routes/RoutesList";
import NavBar from "./navigation/NavBar";
import JoblyApi from "./common/api";
import LoadingSpinner from "./common/LoadingSpinner";
import UserContext from "./common/UserContext";
import useLocalStorageState from "./hooks/useLocalStorageState";
import './App.css';

function App() {

  const [token, setToken] = useLocalStorageState("authToken");
  const [currentUser, setCurrentUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [userInfoLoaded, setUserInfoLoaded] = useState(false);

  useEffect(() => {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwtDecode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setApplicationIds(new Set(currentUser.applications));
          setCurrentUser(currentUser);
        } catch (err) {
          setCurrentUser(null);
        }
      }
      setUserInfoLoaded(true);
    }
    setUserInfoLoaded(false);
    getCurrentUser();
  }
  , [token]);

  async function login (data) {
    try {
      let token = await JoblyApi.login(data);
      setToken(token);
      return {loggedIn: true};
    }
    catch (errs) {
      return {loggedIn: false, errs: errs}
    };
    }

  async function signup (data) {
    try {
      let token = await JoblyApi.signup(data);
      setToken(token);
      return {signedUp: true};
    }
    catch (errs) {
      return {signedUp: false, errs: errs}
    };
  }

  async function logout () {
    setCurrentUser(null);
    setToken(null);
  }

  function currentUserAppliedToJob (id) {
    return applicationIds.has(id);
  }

  function applyToJob (id) {
    if (!currentUserAppliedToJob(id)) {
      JoblyApi.applyToJob(currentUser.username, id);
      setApplicationIds(new Set([...applicationIds, id]));
    }
  }

  if (!userInfoLoaded) return <LoadingSpinner />;

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{currentUser, setCurrentUser, currentUserAppliedToJob, applyToJob}}>
          <NavBar logout={ logout }/>
          <RoutesList login={ login } signup={ signup } />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
