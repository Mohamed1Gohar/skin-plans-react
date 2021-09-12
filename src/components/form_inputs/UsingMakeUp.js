import { Formik, Field, Form } from "formik";
import FormArrows from "../FormArrows";

const UsingMakeUp = (props) => {
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
              <strong>أضع مستحضرات التجميل</strong>
            </p>
            <ul className="list-group">
              <li
                className={`list-group-item my-2  ${
                  values.usingMakeUp === "5" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="usingMakeUp"
                    value="5"
                    aria-label="5"
                    style={{ visibility: "hidden" }}
                  />
                  يوميا
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.usingMakeUp === "10" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="usingMakeUp"
                    value="10"
                    aria-label="10"
                    style={{ visibility: "hidden" }}
                  />
                  أحيانا
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.usingMakeUp === "15" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="usingMakeUp"
                    value="15"
                    aria-label="15"
                    style={{ visibility: "hidden" }}
                  />
                  لا أضع
                </label>
              </li>
            </ul>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!values.usingMakeUp}
          />
        </Form>
      )}
    </Formik>
  );
};

export default UsingMakeUp;
