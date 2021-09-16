import { Formik, Form } from "formik";
import FormArrows from "../FormArrows";
import RadioInput from "../formFields/RadioInput";

const SleepingHours = (props) => {
  let submitTimeout;
  const handleSubmit = (values) => {
    clearTimeout(submitTimeout);
    props.next(values);
  };

  const autoSubmit = (values) => {
    clearTimeout(submitTimeout);
    submitTimeout = setTimeout(() => {
      handleSubmit(values);
    }, 1000);
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
              <strong>عادةً، نومي يكون ...</strong>
            </p>
            <ul className="list-group">
              <RadioInput
                valName="sleepingHours"
                value="0"
                txt="غير منتظم ومتقلب - < 5"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="sleepingHours"
                value="10"
                txt="6 - 8"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="sleepingHours"
                value="20"
                txt="+8"
                values={values}
                autoSubmit={autoSubmit}
              />

              {/* <li
                className={`list-group-item my-2  ${
                  values.sleepingHours === "5" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="sleepingHours"
                    value="5"
                    aria-label="5"
                    style={{ visibility: "hidden" }}
                  />
                  &lt; 5 - غير منتظم ومتقلب
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.sleepingHours === "20" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="sleepingHours"
                    value="20"
                    aria-label="20"
                    style={{ visibility: "hidden" }}
                  />
                  6-8
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.sleepingHours === "10" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="sleepingHours"
                    value="10"
                    aria-label="10"
                    style={{ visibility: "hidden" }}
                  />
                  +8
                </label>
              </li> */}
            </ul>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!values.sleepingHours}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SleepingHours;
