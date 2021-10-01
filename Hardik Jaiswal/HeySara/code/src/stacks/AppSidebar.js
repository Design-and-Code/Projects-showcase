import React from "react";
import AppHeader from "../components/AppHeader";
import AppUserDetials from "../components/AppUserDetails";
import AppLists from "./AppLists";
import "../styles/AppSidebar.css";
import AppCopyright from "../components/AppCopyright";

const AppSidebar = (props) => {
  return (
    <div className="main">
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="open"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <AppHeader />
        <AppUserDetials userName={props.name} userPhoto = {props.photo} />
        <AppLists />
        <AppCopyright />
      </div>
    </div>
  );
};

export default AppSidebar;
