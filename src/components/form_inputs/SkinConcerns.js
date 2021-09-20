import { Formik, Field, Form } from "formik";
import FormArrows from "../FormArrows";

const SkinConcerns = (props) => {
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
            aria-labelledby="checkbox-group"
          >
            <p>
              <strong>بشرتي تعاني من ….. (يمكنك اختيار اكتر من مشكلة)</strong>
            </p>
            <ul className="list-group">
              <li
                className={`list-group-item my-2  ${
                  values.skinConcerns.includes("1") ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="checkbox"
                    name="skinConcerns"
                    value="1"
                    style={{ visibility: "hidden" }}
                  />
                  الجفاف
                </label>
              </li>
              <li
                className={`list-group-item my-2  ${
                  values.skinConcerns.includes("2") ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="checkbox"
                    name="skinConcerns"
                    value="2"
                    style={{ visibility: "hidden" }}
                  />
                  الخطوط الرفيعة
                </label>
              </li>
              <li
                className={`list-group-item my-2  ${
                  values.skinConcerns.includes("3") ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="checkbox"
                    name="skinConcerns"
                    value="3"
                    style={{ visibility: "hidden" }}
                  />
                  البقع الداكنة
                </label>
              </li>
              <li
                className={`list-group-item my-2  ${
                  values.skinConcerns.includes("4") ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="checkbox"
                    name="skinConcerns"
                    value="4"
                    style={{ visibility: "hidden" }}
                  />
                  التجاعيد
                </label>
              </li>
              <li
                className={`list-group-item my-2  ${
                  values.skinConcerns.includes("5") ? "active" : null
                }`}
              >
                <label className="d-block mb-0">
                  <Field
                    type="checkbox"
                    name="skinConcerns"
                    value="5"
                    style={{ visibility: "hidden" }}
                  />
                  الانتفاخ أسفل العين
                </label>
              </li>
            </ul>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            firstStep={true}
            condition={values.skinConcerns.length === 0}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SkinConcerns;
