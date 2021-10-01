import React, { useEffect, useState } from "react";
import MicNoneIcon from "@material-ui/icons/MicNone";
import "../styles/AppMic.css";

const AppMic = () => {
  // variable for storing the speech of the user
  var transcript;
  const url =
    "https://guarded-castle-95476.herokuapp.com/https://official-joke-api.appspot.com/random_joke";

  // State Hooks for joke command
  const [setup, setSetup] = useState(null);
  const [punchline, setPunchLine] = useState(null);

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState("");

  // Speech Recognition
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  // Function for text-to-speech
  const readOutLoud = (message) => {
    window.responsiveVoice.speak(message);
  };

  const getJoke = () => {
    fetch(url)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setSetup(data.setup);
        setPunchLine(data.punchline);
      });
  };
  useEffect(() => {
    getJoke();
  }, []);

  // all voice commands and their espective functions
  const voiceCommands = () => {
    // When the user's speech ends, this function gets called
    recognition.onspeechend = function () {
      recognition.stop();
    };

    // When the recognition is processed for results this function gets called
    recognition.onresult = function (event) {
      // The user's speech is stored in this variable
      transcript = event.results[0][0].transcript;

      // Voice commands
      if (transcript.includes("search")) {
        if (transcript.includes("Wikipedia")) {
          let arr = transcript.split(" ");
          arr.splice(0, 3);
          let query = arr.join(" ");
          readOutLoud(`Searching Wikipedia for ${query}`);
          window.open(
            `http://en.wikipedia.org/w/index.php?search=${query}`,
            "_blank"
          );
        } else if (transcript.includes("Google")) {
          let arr = transcript.split(" ");
          arr.splice(0, 3);
          let query = arr.join(" ");
          readOutLoud(`Searching Google for ${query}`);
          window.open(`https://www.google.com/search?q=${query}`, "_blank");
        } else {
          let arr = transcript.split(" ");
          arr.splice(0, 2);
          let query = arr.join(" ");
          readOutLoud(`Searching Google for ${query}`);
          window.open(`https://www.google.com/search?q=${query}`, "_blank");
        }
      } else if (transcript.includes("browse")) {
        let arr = transcript.split(" ");
        arr.splice(0, 1);
        let query = arr.join(" ");
        readOutLoud(`Searching YouTube for ${query}`);
        window.open(
          `http://www.youtube.com/results?search_query=${query}`,
          "_blank"
        );
      } else if (transcript.includes("direction")) {
        let arr = transcript.split(" ");
        arr.splice(0, 2);
        let query = arr.join(" ");
        readOutLoud(`Finding direction to ${query}`);
        window.open(
          `http://maps.google.com/maps/?q=directions to${query}`,
          "_blank"
        );
      } else if (transcript.includes("weather")) {
        readOutLoud("Opening Weather App")
        window.open('https://weather-app-pseudopythonic.netlify.app/','_blank')
      } else if (transcript.includes("new tab")) {
        window.open("https://www.google.com/", "_blank");
        readOutLoud("Opening a new Tab");
      } else if (
        transcript.includes("compose") ||
        transcript.includes("mail") ||
        transcript.includes("email")
      ) {
        let recipient = window.prompt("Enter the e-mail address of recipient");
        let subject = window.prompt("Enter the subject of the mail");
        let body = window.prompt("Enter the body of the mail");
        readOutLoud(`Composing mail to ${recipient}`);
        window.open(
          `mailto:${recipient}?subject=${subject}&body=${body}`,
          "_blank"
        );
      } else if (transcript.includes("play")) {
        if (transcript.includes("music")) {
          let song = window.prompt(
            "Enter the name of the song you want to listen"
          );
          readOutLoud(`Opening ${song} on JioSaavn`);
          window.open(`https://www.jiosaavn.com/search/${song}`, "_blank");
        } else {
          let arr = transcript.split(" ");
          arr.splice(0, 1);
          let query = arr.join(" ");
          readOutLoud(`Opening ${query} on JioSaavn`);
          window.open(`https://www.jiosaavn.com/search/${query}`, "_blank");
        }
      } else if (setup && punchline) {
        if (transcript.includes("joke") || transcript.includes("jokes")) {
          getJoke();
          readOutLoud(setup);
          setTimeout(() => {
            readOutLoud(punchline);
          }, 4000);
        }
      } else {
        readOutLoud("Can't reach to the server right now!");
      }
    };
  };

  useEffect(() => {
    voiceCommands();
  });

  return (
    <div id="MicContainer" className="parent">
      <button
        onClick={() => {
          recognition.start();
        }}
        type="button"
        className="mic"
      >
        <MicNoneIcon fontSize="large" className="micIcon" />
      </button>
    </div>
  );
};

export default AppMic;
