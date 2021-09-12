import { Formik, Field, Form } from "formik";
import FormArrows from "../FormArrows";

const Cheeks = (props) => {
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
              <strong>نوع بشرتي…</strong>
            </p>
            <ul className="list-group">
              <li
                className={`list-group-item my-2  ${
                  values.cheeks === "20" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="cheeks"
                    value="20"
                    aria-label="20"
                    style={{ visibility: "hidden" }}
                  />
                  دهنية
                </label>
              </li>
              <li
                className={`list-group-item my-2  ${
                  values.cheeks === "15" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="cheeks"
                    value="15"
                    aria-label="15"
                    style={{ visibility: "hidden" }}
                  />
                  مختلطة
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.cheeks === "10" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="cheeks"
                    value="10"
                    aria-label="10"
                    style={{ visibility: "hidden" }}
                  />
                  عادية
                </label>
              </li>
              <li
                className={`list-group-item my-2  ${
                  values.cheeks === "5" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="cheeks"
                    value="5"
                    aria-label="5"
                    style={{ visibility: "hidden" }}
                  />
                  جافة
                </label>
              </li>
            </ul>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!values.cheeks}
          />
        </Form>
      )}
    </Formik>
  );
};
export default Cheeks;
