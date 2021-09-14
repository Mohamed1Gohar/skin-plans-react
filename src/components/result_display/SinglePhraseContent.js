import { useSpring, animated } from "react-spring";
import { VscLoading, VscCheck } from "react-icons/vsc";

const SinglePhraseContent = ({ animationDuration, phrase }) => {
  const fadeoutIcons = useSpring({
    from: { opacity: 1, display: "inline-block" },
    to: { opacity: 0, display: "none" },
    delay: animationDuration + 500,
  });
  const fadeinIcons = useSpring({
    from: { opacity: 0, display: "none" },
    to: { opacity: 1, display: "inline-block" },
    delay: animationDuration + 500,
  });

  const greenTxt = useSpring({
    from: { color: "#363873" },
    to: { color: "#green" },
    delay: animationDuration + 500,
  });
  return (
    <li style={{ listStyle: "none", padding: "0.5rem 1rem" }}>
      <animated.div style={{ color: "green", ...iconStyle, ...fadeinIcons }}>
        <VscCheck />
      </animated.div>
      <animated.div style={{ ...iconStyle, ...fadeoutIcons }}>
        <VscLoading className="spinner" />
      </animated.div>
      <animated.div style={{ display: "inline-block", ...greenTxt }}>
        {phrase}
      </animated.div>
    </li>
  );
};

// margin-left: 1rem;
// font-size:1.3rem;
const iconStyle = {
  marginLeft: "1rem",
  fontSize: "1.3rem",
};

export default SinglePhraseContent;
