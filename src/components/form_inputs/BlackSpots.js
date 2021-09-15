import { Formik, Field, Form } from "formik";
import FormArrows from "../FormArrows";
import RadioInput from "../formFields/RadioInput";

const BlackSpots = (props) => {
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
              <strong>البقع الداكنة في بشرتي موجودة بنسبة..؟</strong>
            </p>
            <ul className="list-group">
              <RadioInput
                valName="blackSpots"
                value="15"
                txt="منعدمة"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="blackSpots"
                value="10"
                txt="صغيرة"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="blackSpots"
                value="5"
                txt="متوسطة"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="blackSpots"
                value="0"
                txt="كبيرة"
                values={values}
                autoSubmit={autoSubmit}
              />

              {/* <li
                className={`list-group-item my-2  ${
                  values.blackSpots === "15" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="blackSpots"
                    value="15"
                    aria-label="15"
                    style={{ visibility: "hidden" }}
                  />
                  منعدمة
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.blackSpots === "10" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="blackSpots"
                    value="10"
                    aria-label="10"
                    style={{ visibility: "hidden" }}
                  />
                  صغيرة
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.blackSpots === "5" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="blackSpots"
                    value="5"
                    aria-label="5"
                    style={{ visibility: "hidden" }}
                  />
                  متوسطة
                </label>
              </li>

              <li
                className={`list-group-item my-2  ${
                  values.blackSpots === "0" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="blackSpots"
                    value="0"
                    aria-label="0"
                    style={{ visibility: "hidden" }}
                  />
                  كبيرة
                </label>
              </li> */}
            </ul>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!values.blackSpots}
          />
        </Form>
      )}
    </Formik>
  );
};

export default BlackSpots;
