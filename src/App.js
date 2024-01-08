import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// import jwtDecode from "jwt-decode";
import { jwtDecode } from "jwt-decode";
import RoutesList from "./routes/RoutesList";
import NavBar from "./navigation/NavBar";
import JoblyApi from "./common/api";
import LoadingSpinner from "./common/LoadingSpinner";
import './App.css';

function App() {

  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [userInfoLoaded, setUserInfoLoaded] = useState(false);

  useEffect(() => {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwtDecode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
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
      console.log("token", token);
      return {loggedIn: true};
    }
    catch (errs) {
      console.error("Attempt to login failed.", "Errors:", errs);
      return {loggedIn: false, errs: errs}
    };
    }

  async function signup (data) {
    try {
      let token = await JoblyApi.signup(data);
      setToken(token);
      return "Signed up!";
    }
    catch (err) {
      return err;
    }
  }

  if (!userInfoLoaded) return <LoadingSpinner />;

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesList login={ login } signup={ signup }/>
      </BrowserRouter>
    </div>
  );
}

export default App;
