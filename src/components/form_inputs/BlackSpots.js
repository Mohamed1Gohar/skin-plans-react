import { Formik, Field, Form } from "formik";
import FormArrows from "../FormArrows";
const BlackSpots = (props) => {
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
              <strong>البقع الداكنة في بشرتي موجودة بنسبة..؟</strong>
            </p>
            <ul className="list-group">
              <li
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
              </li>
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
