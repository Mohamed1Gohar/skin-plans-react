import { Formik, Field, Form } from "formik";
import FormArrows from "../FormArrows";
import RadioInput from "../formFields/RadioInput";

const Cheeks = (props) => {
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
              <strong>نوع بشرتي…</strong>
            </p>
            <ul className="list-group">
              <RadioInput
                valName="cheeks"
                value="20"
                txt="دهنية"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="cheeks"
                value="15"
                txt="مختلطة"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="cheeks"
                value="10"
                txt="عادية"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="cheeks"
                value="5"
                txt="جافة"
                values={values}
                autoSubmit={autoSubmit}
              />
            </ul>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!values.cheeks}
          />
        </Form>
      )}
    </Formik>
  );
};
export default Cheeks;
