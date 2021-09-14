import Percentage from "../../../assets/media/gifs/chartts.gif";

import { useSpring, animated } from "react-spring";


const Percentages = () => {
    const animaStyle1 = useSpring({
        from: {
          width: "0%",
        },
        to: {
          width: "63%",
        },
        config: { duration: 1000 },
      }),
      animaStyle2 = useSpring({
        from: {
          width: "0%",
        },
        to: {
          width: "87%",
        },
        delay: 1500,
        config: { duration: 1000 },
      }),
      animaStyle3 = useSpring({
        from: {
          width: "0%",
        },
        to: {
          width: "75%",
        },
        delay: 3000,
        config: { duration: 1000 },
      }),
      animaStyle4 = useSpring({
        from: {
          width: "0%",
        },
        to: {
          width: "75%",
        },
        delay: 4500,
        config: { duration: 1000 },
      });

    const data = [
      {
        name: "كولاجين",
        percent: 63,
        subTxt: "تحتاج بشرتك الى 37% من الكولاجين",
        color: "#7173b4",
        animationName: animaStyle1,
      },
      {
        name: "ريتينول",
        percent: 87,
        subTxt: "تحتاج بشرتك الى 13% من الريتينول",
        color: "#6466ab",
        animationName: animaStyle2,
      },
      {
        name: "الشاي الأخضر",
        percent: 75,
        subTxt: "تحتاج بشرتك الى 25% من الشاي الأخضر",
        color: "#53529e",
        animationName: animaStyle3,
      },
      {
        name: "الألوفيرا",
        percent: 75,
        subTxt: "تحتاج بشرتك الى 25% من الألوفيرا",
        color: "#30326b",
        animationName: animaStyle4,
      },
    ];

  return (
    <div className="result_comp_style mb-0" style={{ gridArea: "percent" }}>
      <p className="h4">بشرتك تحتوي على :</p>
      {data.map((c, i) => {
        return (
          <div key={i} className="text-right w-100 my-2">
            <strong>{c.name}</strong>
            {console.log(c.animationName)}
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

      <img src={Percentage} alt="graph" />
    </div>
  );
};

export default Percentages;
