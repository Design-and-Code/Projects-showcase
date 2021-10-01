import React, { useState, useEffect } from "react";
import Image from "../assets/heySara - Light.png";
import "../styles/App.css";
import AppSidebar from "../stacks/AppSidebar";
import AppMic from "./AppMic";
import styled, { ThemeProvider } from "styled-components";
import "../styles/Login.css";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/Theme";
import firebase from "./fire";
import AppThemeToggler from "./AppThemeToggler";

const StyledApp = styled.div``;

const Login = () => {
  const [theme, setTheme] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setName(user.displayName);
      setPhoto(user.photoURL);
      setIsLoggedIn(true);
    });
  }, [setIsLoggedIn]);

  return (
    <div>
      {isLoggedIn === false ? (
        <div className="LoginContainer">
          <img src={Image} alt="AuthLogo" />
          <button onClick={login} className="SignIn"> 
            Sign In with Google
          </button>
        </div>
      ) : (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <StyledApp>
            <AppSidebar name={name} photo={photo} />
            <AppThemeToggler theme={themeToggler} />
            <AppMic />
          </StyledApp>
        </ThemeProvider>
      )}
    </div>
  );
};

export default Login;
