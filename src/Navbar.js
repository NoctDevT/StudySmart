import react, { useContext, useState } from "react";

import { StreamList as data } from "./data.js";
import { UserContext } from "./useContext";
import { TodoList } from "./todoList";
import ReactAudioPlayer from "react-audio-player";

export const NavBar = () => {
  const { currentData, setData } = useContext(UserContext);
  const [volume, setVolume] = useState(0);
  const [radio, setRadio] = useState();

  console.log(data);

  return (
    <div className="sidebar">
      <div className="titleHeader">
        {" "}
        Study Hub{" "}
        <span role="img" aria-label="books">
          📚{" "}
        </span>
      </div>

      <div className="streamContents">
        Streams
        <div className="streamContainer">
          {data.map((data, index) => (
            <li
              className="listItem"
              key={index}
              onClick={() => {
                setData(data);
              }}
            >
              {data.content_type}
            </li>
          ))}
        </div>
        <div>
          <TodoList />
          {/* <input
            type="range"
            min="0"
            max="50"
            defaultValue={volume}
            onChange={(e) => setVolume(parseInt(e.target.value, 10))}
          /> */}
        </div>
        <div>Area for dropdown menu with radio sites listed</div>
      </div>
    </div>
  );
};

const AudioPlayer = ({ audio, volume, radio }) => {
  var radioUrl = radio
    ? radio.radioUrl[0]
    : "https://stream-mz.planetradio.co.uk/magic1054.mp3";
  console.log(radioUrl);
  return (
    <ReactAudioPlayer
      src={radioUrl}
      onPlay={() => {}}
      volume={volume / 100}
      controls={false}
      autoPlay
    />
  );
};
