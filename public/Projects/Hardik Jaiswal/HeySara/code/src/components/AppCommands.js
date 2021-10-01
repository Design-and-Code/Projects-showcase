import React, { useState } from "react";
import "../styles/App.css";
import InfoIcon from "@material-ui/icons/Info";
import CancelIcon from "@material-ui/icons/Cancel";

const AppCommands = () => {
  const [commands, showCommands] = useState(false);

  return (
    <div className="command-container">
      <button
        className="showCommand"
        onClick={() => {
          if (!commands) {
            showCommands(true);
            document.getElementById("myNav").style.height = '100%';
            console.log("Opened");
            return;
          }
        }}
      >
        <InfoIcon />
      </button>
        <>
          <div id="myNav" className="overlay">
            <CancelIcon
              className="closebtn"
              onClick={() => {
                showCommands(false);
                document.getElementById("myNav").style.height = '0%';
              }}
            />
            <ul className="overlay-content">
              <h5>Commands for Sara</h5>
              <li>
                Search Wikipedia for (YOUR COMMAND): Searches your query and
                redirects to Wikipedia
              </li>
              <li>
                Search Google for (YOUR COMMAND) / Search for (YOUR COMMAND):
                Searches your query on Google
              </li>
              <li>
                Browse (CHANNEL NAME / QUERY): Searches your query on YouTube
              </li>
              <li>
                Direction to (QUERY): Fetches you the directions to the query
              </li>
              <li>
                Weather : Gets you to the weather app and there you can search for your preferred city!
              </li>
              <li>
                Compose / Compose Email/ Mail: Gets the recipient, body and
                subject from the user and autofills them in the composed mail!
                Just the user needs to send it!
                <br />
                <code>
                  For PC Users: Please enable Mail as the default app for mails
                  for the working of this command. For android users enable
                  Pop-ups to always show for working of this command!
                </code>
              </li>
              <li>
                {" "}
                Play Music ( if you want to type the name of the song you want
                to play) / Play (Song Name) : For searching the song you want to
                play!
              </li>
              <li>Crack some Jokes: Tells you a random joke line!</li>
              <li>Note: Sara will not respond if you command her wrong!</li>
              <li>Note: Enable location, microphone and pop-up permissions for the better functioning of Sara!</li>
            </ul>
          </div>
        </>
    </div>
  );
};

export default AppCommands;
