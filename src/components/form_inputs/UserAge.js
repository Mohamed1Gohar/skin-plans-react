import { Formik, Field, Form } from "formik";
import FormArrows from "../FormArrows";

const UserAge = (props) => {
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
              <strong>كم عمرك:</strong>
            </p>
            <ul className="list-group">
              <li
                className={`list-group-item my-2  ${
                  values.age === "20" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="age"
                    value="20"
                    aria-label="20"
                    style={{ visibility: "hidden" }}
                  />
                  &lt; 20
                </label>
              </li>
              <li
                className={`list-group-item my-2  ${
                  values.age === "15" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="age"
                    value="15"
                    aria-label="15"
                    style={{ visibility: "hidden" }}
                  />
                  20-30
                </label>
              </li>
              <li
                className={`list-group-item my-2  ${
                  values.age === "5" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="age"
                    value="5"
                    aria-label="5"
                    style={{ visibility: "hidden" }}
                  />
                  31-40
                </label>
              </li>
              <li
                className={`list-group-item my-2  ${
                  values.age === "0" ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="radio"
                    name="age"
                    value="0"
                    aria-label="0"
                    style={{ visibility: "hidden" }}
                  />
                  40 &gt;
                </label>
              </li>
            </ul>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!values.age}
          />
        </Form>
      )}
    </Formik>
  );
};

export default UserAge;
