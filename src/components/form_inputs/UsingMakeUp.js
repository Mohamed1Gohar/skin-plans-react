import { Formik, Form } from "formik";
import FormArrows from "../FormArrows";
import RadioInput from "../formFields/RadioInput";

const UsingMakeUp = (props) => {
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
            role="group"
            aria-labelledby="radio-group"
          >
            <p>
              <strong>أضع مستحضرات التجميل</strong>
            </p>
            <ul className="list-group">
              <RadioInput
                valName="usingMakeUp"
                value="5"
                txt="يوميا"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="usingMakeUp"
                value="10"
                txt="أحيانا"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="usingMakeUp"
                value="15"
                txt="لا أضع"
                values={values}
                autoSubmit={autoSubmit}
              />
            </ul>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!values.usingMakeUp}
          />
        </Form>
      )}
    </Formik>
  );
};

export default UsingMakeUp;
