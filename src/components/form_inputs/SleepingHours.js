import { Formik, Field, Form } from "formik";
import FormArrows from "../FormArrows";

const SleepingHours = (props) => {
  const handleSubmit = (values) => {
    console.log(values);
    props.next(values);
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
              <li
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
              </li>
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
