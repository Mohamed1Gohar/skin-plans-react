import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import ContentWhileFetching from "./ContentWhileFetching";
import FinalReport from "./FinalReport";

const FinalResult = () => {
  // in case need to fetch data in the future
  const [resultReceived, setResultReceived] = useState(false);
  const [timeout, setTimeout] = useState(false);

  const showingTime = 9000;

  useEffect(() => {
    // set timeout to true after animation time over
    setTimeout(() => {
      setTimeout(true);
    }, showingTime);

    // fetch data
    setResultReceived(true); // comment this when using api
    // fetch()
    // .then(res => res.json())
    // .then(data => {
    //   // setResultReceived(true)
    // })
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
    delay: showingTime + 2000,
    // delay: 0,
  });
  const reportAnimationOut = useSpring({
    to: {
      display: `${resultReceived && timeout && "none"}`,
    },
    from: { display: "block" },
    // delay: 0,
    delay: showingTime + 2000,
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
