import { Formik, Form } from "formik";
import FormArrows from "../FormArrows";
import RadioInput from "../formFields/RadioInput";

const Wrinkles = (props) => {
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
            className="mb-3 cl-prime"
            role="group"
            aria-labelledby="radio-group"
          >
            <p>
              <strong>التجاعيد على بشرتي</strong>
            </p>
            <ul className="list-group">
              <RadioInput
                valName="wrinkles"
                value="20"
                txt="غير موجودة حتى الآن"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="wrinkles"
                value="10"
                txt="قليلة و سطحية"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="wrinkles"
                value="5"
                txt="منتشرة و عميقة"
                values={values}
                autoSubmit={autoSubmit}
              />

              {/* <li
                className={`list-group-item my-2  ${
                  values.wrinkles === "20" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="wrinkles"
                    value="20"
                    aria-label="20"
                    style={{ visibility: "hidden" }}
                  />
                  غير موجودة حتى الآن
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.wrinkles === "10" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="wrinkles"
                    value="10"
                    aria-label="10"
                    style={{ visibility: "hidden" }}
                  />
                  قليلة وسطحية
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.wrinkles === "5" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="wrinkles"
                    value="5"
                    aria-label="5"
                    style={{ visibility: "hidden" }}
                  />
                  منتشرة وعميقة
                </label>
              </li> */}
            </ul>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!values.wrinkles}
          />
        </Form>
      )}
    </Formik>
  );
};

export default Wrinkles;
