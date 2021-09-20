import { Formik, Form } from "formik";
import FormArrows from "../FormArrows";
import RadioInput from "../formFields/RadioInput";

const UserGender = (props) => {
  let submitTimeout;
  const handleSubmit = (values) => {
    clearTimeout(submitTimeout);
    props.next(values);
  };

  const autoSubmit = (values) => {
    clearTimeout(submitTimeout);
    submitTimeout = setTimeout(() => {
      handleSubmit(values);
    }, 500);
  };
  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <div
            className="cl-prime mb-3"
            style={{ width: "100%" }}
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
              <RadioInput
                valName="gender"
                value="female"
                txt="أنثى"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="gender"
                value="male"
                txt="ذكر"
                values={values}
                autoSubmit={autoSubmit}
              />
            </ul>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!values.gender}
            firstStep={true}
          />
        </Form>
      )}
    </Formik>
  );
};
export default UserGender;
