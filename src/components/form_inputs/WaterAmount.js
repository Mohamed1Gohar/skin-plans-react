import { Formik, Field, Form } from "formik";
import FormArrows from "../FormArrows";

const WaterAmount = (props) => {
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
              <strong>أشرب …. كوب يوميا</strong>
            </p>
            <ul className="list-group">
              <li
                className={`list-group-item my-2  ${
                  values.waterAmount === "0" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="waterAmount"
                    value="0"
                    aria-label="0"
                    style={{ visibility: "hidden" }}
                  />
                  &lt; 5
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.waterAmount === "5" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="waterAmount"
                    value="5"
                    aria-label="5"
                    style={{ visibility: "hidden" }}
                  />
                  5-6
                </label>
              </li>
              <li
                className={`list-group-item my-2  ${
                  values.waterAmount === "10" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="waterAmount"
                    value="10"
                    aria-label="10"
                    style={{ visibility: "hidden" }}
                  />
                  6-7
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.waterAmount === "15" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="waterAmount"
                    value="15"
                    aria-label="15"
                    style={{ visibility: "hidden" }}
                  />
                  7-8
                </label>
              </li>
              <li
                className={`list-group-item my-2  ${
                  values.waterAmount === "20" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="waterAmount"
                    value="20"
                    aria-label="20"
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
            condition={!values.waterAmount}
          />
        </Form>
      )}
    </Formik>
  );
};

export default WaterAmount;
