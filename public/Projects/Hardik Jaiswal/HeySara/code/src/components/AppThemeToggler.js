import React, { useState } from "react";
import "../styles/AppThemeToggler.css";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import AppCommands from "./AppCommands";
import AppSourceCode from "./AppSourceCode";

const AppThemeToggler = (props) => {
  const [icon, setIcon] = useState(<Brightness3Icon />);
  const [toggled, setToggled] = useState(false);

  return (
    <div id="main">
      <AppSourceCode />
      <AppCommands />
      <button
        className="toggler"
        type="button"
        onClick={() => {
          {
            props.theme();
          }
          if (!toggled) {
            setToggled(true);
            setIcon(<Brightness5Icon />);
            return;
          }
          if (toggled) {
            setToggled(false);
            setIcon(<Brightness3Icon />);
            return;
          }
        }}
      >
        {icon}
      </button>
    </div>
  );
};

export default AppThemeToggler;
