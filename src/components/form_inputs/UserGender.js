import { Formik, Field, Form } from "formik";
import FormArrows from "../FormArrows";

const UserGender = (props) => {
  const handleSubmit = (values) => {
    console.log(" values", values);
    props.next(values);
  };

  const autoSubmit = (values, isSubmitting) => {
    console.log("formik is submitting ", isSubmitting);
    if (!isSubmitting) {
      setTimeout(() => {
        handleSubmit(values);
      }, 3000);
    }
    console.log("issubmitting", isSubmitting);
  };
  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {({ values, isSubmitting, setSubmitting }) => (
        <Form>
          {console.log(setSubmitting)}
          <div
            className="cl-prime mb-3"
            style={{ width: "16rem" }}
            role="group"
            aria-labelledby="radio-group"
          >
            <p>
              <strong>
                النساء لديهم بشرة أنعم و أرق مقارنة بالرجال، لذلك تظهر علامات
                التقدم في السن على بشرتهم بشكل أسرع <br /> انا…..
              </strong>
            </p>

            <ul className="list-group">
              <li
                className={`list-group-item my-2  ${
                  values.gender === "male" && "active"
                }`}
              >
                <label className="d-block">
                  <Field
                    type="radio"
                    name="gender"
                    value="male"
                    aria-label="male"
                    style={{ visibility: "hidden" }}
                    // onInput={() => {
                    //   autoSubmit(values, isSubmitting);
                    //   setSubmitting(!isSubmitting);
                    // }}
                  />
                  ذكر
                </label>
              </li>
              <li
                className={`list-group-item my-2  ${
                  values.gender === "female" && "active"
                }`}
              >
                <label className="d-block">
                  <Field
                    type="radio"
                    name="gender"
                    value="female"
                    aria-label="female"
                    style={{ visibility: "hidden" }}
                    // onInput={() => {
                    //   autoSubmit(values, isSubmitting);
                    //   setSubmitting(!isSubmitting);
                    // }}
                  />
                  أنثى
                </label>
              </li>
            </ul>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!values.gender}
          />
        </Form>
      )}
    </Formik>
  );
};
export default UserGender;
