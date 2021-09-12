import { Formik, Field, Form } from "formik";
import FormArrows from "../FormArrows";
const Wrinkles = (props) => {
  const handleSubmit = (values) => {
    console.log(values);
    props.next(values);
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
              <li
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
              </li>
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
