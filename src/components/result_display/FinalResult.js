import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import ContentWhileFetching from "./ContentWhileFetching";
import FinalReport from "./FinalReport";

const FinalResult = () => {
  const [resultReceived, setResultReceived] = useState(false);
  const [timeout, setTimeout] = useState(false);

  const showingTime = 9000;

  const API_LINK = "https://api.openweathermap.org/data/2.5";
  const API_KEY = "e69ae94fc40fb0ee7312a34838aa827c";

  useEffect(() => {
    // set timeout to true after animation time over
    setTimeout(() => {
      setTimeout(true);
    }, showingTime);

    // make cal request
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(
        `${API_LINK}/weather/?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setResultReceived(true);
          console.log("data received ");
        });
    });
  }, []);

  const reportAnimationIn = useSpring({
    from: {
      opacity: "0",
      display: "none",
    },
    to: {
      opacity: "1",
      display: `${resultReceived && timeout && "block"}`,
    },
    delay: showingTime,
    // delay: 0,
  });
  const reportAnimationOut = useSpring({
    to: {
      display: `${resultReceived && timeout && "none"}`,
    },
    from: { display: "block" },
    // delay: 0,
    delay: showingTime,
  });
  return (
    <>
      <animated.div style={reportAnimationOut}>
        <ContentWhileFetching
          resultReceived={resultReceived}
          showingTime={showingTime}
        />
      </animated.div>
      <animated.div style={reportAnimationIn}>
        <FinalReport />
      </animated.div>
    </>
  );
};

export default FinalResult;
