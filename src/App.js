import "./styles.css";
import react, { useState, useEffect, useMemo, useContext } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { UserContext } from "./useContext";
import { NavBar } from "./Navbar";

export default function App() {
  return (
    <>
      <Main />
    </>
  );
}

const Main = () => {
  const [currentData, setData] = useState();
  const [video, setVideo] = useState();
  const [audio, setAudio] = useState(true);
  const providerValue = useMemo(
    () => ({ video, setVideo, currentData, setData }),
    [video, setVideo, currentData, setData]
  );

  useEffect(() => {
    if (currentData != null) {
      setVideo(currentData.contents[0].url);
      // setRadio(currentData.contents[1]);
      // radioName.current.innerText = currentData.contents[1].radioName;
    } else {
      setVideo("7HaJArMDKgI");
    }
  }, [currentData, video]);

  return (
    <UserContext.Provider value={providerValue}>
      <VideoPlayer youtubeId={video} audio={audio} />
      <NavBar />
    </UserContext.Provider>
  );
};
