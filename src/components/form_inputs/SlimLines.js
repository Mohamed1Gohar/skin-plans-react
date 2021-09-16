import { Formik, Form } from "formik";
import FormArrows from "../FormArrows";
import RadioInput from "../formFields/RadioInput";
const SlimLines = (props) => {
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
              <strong>الخطوط الرفيعه الموجودة على بشرتي</strong>
            </p>
            <ul className="list-group">
              <RadioInput
                valName="slimLines"
                value="15"
                txt="تظهر عند الابتسام"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="slimLines"
                value="10"
                txt="خفيفة"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="slimLines"
                value="5"
                txt="واضحة"
                values={values}
                autoSubmit={autoSubmit}
              />

              {/* <li
                className={`list-group-item my-2  ${
                  values.slimLines === "15" ? "active" : null
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
              </li> */}
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
