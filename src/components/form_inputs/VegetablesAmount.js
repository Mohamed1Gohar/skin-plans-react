import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import FormArrows from "../FormArrows";
import VegetablesImg from "../../assets/media/images/vegetables_intro.png";

import RadioInput from "../formFields/RadioInput";

const animationDuration = 15000;
const VegetablesAmount = (props) => {
  let submitTimeout;
  const handleSubmit = (values) => {
    clearTimeout(submitTimeout);
    props.next(values);
  };

  const autoSubmit = (values) => {
    clearTimeout(submitTimeout);
    submitTimeout = setTimeout(() => {
      handleSubmit(values);
    }, 500);
  };

  const mediaMatch = window.matchMedia("(min-width: 500px)");
  const [matches, setMatches] = useState(mediaMatch.matches);

  const [hideBar, setHideBar] = useState(false);

  const animPropsProgressBarFill = useSpring({
    to: {
      width: "100%",
      position: "absolute",
      height: "0.5rem",
      borderRadius: "0.5rem",
      display: `${hideBar ? "none" : "block"}`,
    },
    from: {
      width: "0%",
      position: "absolute",
      height: "0.5rem",
      borderRadius: "0.5rem",
    },
    config: { duration: animationDuration - 300 },
  });

  const animPropsProgressBar = useSpring({
    to: {
      height: "0.5rem",
      position: "absolute",
      display: `${hideBar ? "none" : "block"}`,
    },
    from: {
      position: "absolute",
      height: "0.5rem",
    },
    config: { duration: animationDuration - 300 },
  });

  const animPropsFadeIn = useSpring({
    to: { opacity: 1, display: "block", width: "100%" },
    from: { opacity: 0, display: "none", width: "100%" },
    delay: animationDuration,
    config: { duration: 1000 },
  });

  const animPropsFadeOut = useSpring({
    to: { opacity: 0, display: "none" },
    from: { opacity: 1, display: "block" },
    delay: animationDuration,
    config: { duration: 1000 },
  });

  useEffect(() => {
    setTimeout(() => {
      setHideBar(true);
    }, animationDuration);

    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  const styles = {
    container: (windowWidth) => ({
      width: windowWidth ? "33rem" : "90%",
    }),
  };
  return (
    <div
      className="cl-prime mb-3 d-flex flex-column justify-content-center align-items-center text-center pt-4"
      style={styles.container(matches)}
    >
      {!props.data.vegetablesAmount && (
        <>
          <animated.div style={animPropsFadeOut} className="h5">
            جاري معالجة بيناتك
          </animated.div>

          <div
            style={{ position: "relative", width: "100%", margin: "1rem 0" }}
            dir="ltr"
          >
            <animated.div
              className="w-100 progress"
              style={animPropsProgressBar}
            ></animated.div>
            <animated.div
              className="progress-bar bg-prime"
              role="progressbar"
              style={animPropsProgressBarFill}
            ></animated.div>
          </div>
          <animated.div style={animPropsFadeOut} className="h5">
            <strong style={{ lineHeight: "1.3" }}>
              عندما يتعلق الأمر بالانتظام على روتين معين، تجنبي دائمًا المنتجات
              الكماوية واختاري المكونات الطبيعية. يرشح لك skin- plans منتجات
              طبيعيه لتقليل مخاطر التعامل مع مشاكل البشرة وتهيجها لاحقًا
            </strong>
            <img
              src={VegetablesImg}
              alt="original product"
              className="img-fluid mt-3"
            />
          </animated.div>
        </>
      )}
      <animated.div style={!props.data.vegetablesAmount ? animPropsFadeIn : {}}>
        <Formik initialValues={props.data} onSubmit={handleSubmit}>
          {({ values }) => (
            <Form style={{ width: "100%" }}>
              <div role="group" aria-labelledby="radio-group">
                <p>
                  <strong>أتناول الخضروات … خلال الأسبوع</strong>
                </p>
                <ul className="list-group">
                  <RadioInput
                    valName="vegetablesAmount"
                    value="0"
                    txt="لا أتناول الخضروات "
                    values={values}
                    autoSubmit={autoSubmit}
                  />
                  <RadioInput
                    valName="vegetablesAmount"
                    value="5"
                    txt="مرتين"
                    values={values}
                    autoSubmit={autoSubmit}
                  />
                  <RadioInput
                    valName="vegetablesAmount"
                    value="10"
                    txt="5-3 مرات"
                    values={values}
                    autoSubmit={autoSubmit}
                  />
                  <RadioInput
                    valName="vegetablesAmount"
                    value="20"
                    txt="يومياََ"
                    values={values}
                    autoSubmit={autoSubmit}
                  />
                </ul>
              </div>
              <FormArrows
                values={values}
                parentProps={props}
                condition={!values.vegetablesAmount}
              />
            </Form>
          )}
        </Formik>
      </animated.div>
    </div>
  );
};

export default VegetablesAmount;
