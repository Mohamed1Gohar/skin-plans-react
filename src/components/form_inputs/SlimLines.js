import { Formik, Field, Form } from "formik";
import FormArrows from "../FormArrows";

const SlimLines = (props) => {
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
              <strong>الخطوط الرفيعه الموجودة على بشرتي</strong>
            </p>
            <ul className="list-group">
              <li
                className={`list-group-item my-2  ${
                  values.SlimLines === "15" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="slimLines"
                    value="15"
                    aria-label="15"
                    style={{ visibility: "hidden" }}
                  />
                  تظهر عند الابتسام
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.slimLines === "10" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="slimLines"
                    value="10"
                    aria-label="10"
                    style={{ visibility: "hidden" }}
                  />
                  خفيفة
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.slimLines === "5" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="slimLines"
                    value="5"
                    aria-label="5"
                    style={{ visibility: "hidden" }}
                  />
                  واضحة
                </label>
              </li>
            </ul>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!values.slimLines}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SlimLines;
