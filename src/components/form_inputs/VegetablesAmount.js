import { Formik, Field, Form } from "formik";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import FormArrows from "../FormArrows";
import VegetablesImg from "../../assets/media/images/vegetables_intro.png";

const animationDuration = 10000;
const VegetablesAmount = (props) => {
  const handleSubmit = (values) => {
    console.log(values);
    props.next(values);
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
    to: { opacity: 1, display: "block" },
    from: { opacity: 0, display: "none" },
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
      width: windowWidth ? "33rem" : "18rem",
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
            style={{ position: "relative", width: "100%", margin: "0.5rem 0" }}
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
              الكيماوية واختاري المكونات الطبيعية. يرشح لكي skin- plans منتجات
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
            <Form>
              <div role="group" aria-labelledby="radio-group">
                <p>
                  <strong>أتناول الخضروات … خلال الأسبوع</strong>
                </p>
                <li
                  className={`list-group-item my-2  ${
                    values.vegetablesAmount === "0" ? "active" : null
                  }`}
                >
                  <label className="d-block mb-0">
                    <Field
                      type="radio"
                      name="vegetablesAmount"
                      value="0"
                      aria-label="0"
                      style={{ visibility: "hidden" }}
                    />
                    لا أتناول الخضروات
                  </label>
                </li>

                <li
                  className={`list-group-item my-2  ${
                    values.vegetablesAmount === "5" ? "active" : null
                  }`}
                >
                  <label className="d-block mb-0">
                    <Field
                      type="radio"
                      name="vegetablesAmount"
                      value="5"
                      aria-label="5"
                      style={{ visibility: "hidden" }}
                    />
                    مرتين
                  </label>
                </li>

                <li
                  className={`list-group-item my-2  ${
                    values.vegetablesAmount === "10" ? "active" : null
                  }`}
                >
                  <label className="d-block mb-0">
                    <Field
                      type="radio"
                      name="vegetablesAmount"
                      value="10"
                      aria-label="10"
                      style={{ visibility: "hidden" }}
                    />
                    3-5 مرات
                  </label>
                </li>

                <li
                  className={`list-group-item my-2  ${
                    values.vegetablesAmount === "20" ? "active" : null
                  }`}
                >
                  <label className="d-block mb-0">
                    <Field
                      type="radio"
                      name="vegetablesAmount"
                      value="20"
                      aria-label="20"
                      style={{ visibility: "hidden" }}
                    />
                    يوميا
                  </label>
                </li>
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