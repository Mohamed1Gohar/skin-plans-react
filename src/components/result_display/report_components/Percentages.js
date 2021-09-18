import { useSpring, animated } from "react-spring";
import { useEffect, useState, useRef } from "react";

const Percentages = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const animaStyle1 = useSpring({
      from: {
        width: "0%",
      },
      to: {
        width: startAnimation ? "63%" : "0%",
      },
      config: { duration: 500 },
    }),
    animaStyle2 = useSpring({
      from: {
        width: "0%",
      },
      to: {
        width: startAnimation ? "87%" : "0%",
      },
      config: { duration: 500 },
    }),
    animaStyle3 = useSpring({
      from: {
        width: "0%",
      },
      to: {
        width: startAnimation ? "75%" : "0%",
      },
      config: { duration: 500 },
    }),
    animaStyle4 = useSpring({
      from: {
        width: "0%",
      },
      to: {
        width: startAnimation ? "75%" : "0%",
      },
      config: { duration: 500 },
    });

  const data = [
    {
      name: "كولاجين",
      subTxt: "تحتاج بشرتك الى 37% من الكولاجين",
      color: "#7173b4",
      animationName: animaStyle1,
    },
    {
      name: "ريتينول",
      subTxt: "تحتاج بشرتك الى 13% من الريتينول",
      color: "#6466ab",
      animationName: animaStyle2,
    },
    {
      name: "الشاي الأخضر",
      subTxt: "تحتاج بشرتك الى 25% من الشاي الأخضر",
      color: "#53529e",
      animationName: animaStyle3,
    },
    {
      name: "الألوفيرا",
      subTxt: "تحتاج بشرتك الى 25% من الألوفيرا",
      color: "#30326b",
      animationName: animaStyle4,
    },
  ];

  const elementRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // to prevent error when component is no in the page so elementRef.current is undefined
      if (elementRef.current) {
        const startAnimationHeight =
          elementRef.current.offsetTop -
          window.innerHeight +
          elementRef.current.clientHeight;
        if (
          window.scrollY >= startAnimationHeight &&
          startAnimationHeight > 0
        ) {
          setStartAnimation(true);
        }
      }
    });
  }, [startAnimation]);

  return (
    <div
      className="result_comp_style mb-4 mb-lg-0"
      style={{ gridArea: "percent" }}
      ref={elementRef}
    >
      <p className="h4">بشرتك تحتوي على :</p>
      {data.map((c, i) => {
        return (
          <div key={i} className="text-right w-100 my-2">
            <strong>{c.name}</strong>
            <div className="progress w-100 my-2" style={{ height: "1rem" }}>
              <animated.div
                className="progress-bar text-right px-2 "
                role="progressbar"
                style={{
                  backgroundColor: c.color,
                  ...c.animationName,
                }}
              ></animated.div>
            </div>
            <p className="text-primary h6">{c.subTxt}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Percentages;
