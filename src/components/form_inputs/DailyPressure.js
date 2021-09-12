import { Formik, Field, Form } from "formik";
import FormArrows from "../FormArrows";

const DailyPressure = (props) => {
  const handleSubmit = (values) => {
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
              <strong>كمية الضغط النفسي التي اواجهها يومياً</strong>
            </p>
            <ul className="list-group">
              <li
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
              </li>
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
