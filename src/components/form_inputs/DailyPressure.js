import { Formik, Form } from "formik";
import FormArrows from "../FormArrows";
import RadioInput from "../formFields/RadioInput";

const DailyPressure = (props) => {
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

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <div
            className="cl-prime mb-3"
            role="group"
            aria-labelledby="radio-group"
          >
            <p>
              <strong>كمية الضغط النفسي التي اواجهها يومياً</strong>
            </p>
            <ul className="list-group">
              <RadioInput
                valName="dailyPressure"
                value="0"
                txt="ضغط شديد"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="dailyPressure"
                value="5"
                txt="ضغط متوسط"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="dailyPressure"
                value="15"
                txt="ضغط بسيط"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="dailyPressure"
                value="20"
                txt="لا يوجد ضغوطات"
                values={values}
                autoSubmit={autoSubmit}
              />

              {/* <li
                className={`list-group-item my-2  ${
                  values.dailyPressure === "0" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="dailyPressure"
                    value="0"
                    aria-label="0"
                    style={{ visibility: "hidden" }}
                  />
                  ضغط شديد
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.dailyPressure === "5" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="dailyPressure"
                    value="5"
                    aria-label="5"
                    style={{ visibility: "hidden" }}
                  />
                  ضغط متوسط
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.dailyPressure === "15" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="dailyPressure"
                    value="15"
                    aria-label="15"
                    style={{ visibility: "hidden" }}
                  />
                  ضغط بسيط
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.dailyPressure === "20" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="dailyPressure"
                    value="20"
                    aria-label="20"
                    style={{ visibility: "hidden" }}
                  />
                  لا يوجد ضغوطات
                </label>
              </li> */}
            </ul>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!values.dailyPressure}
          />
        </Form>
      )}
    </Formik>
  );
};

export default DailyPressure;
