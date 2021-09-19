import { Formik, Form } from "formik";
import FormArrows from "../FormArrows";
import RadioInput from "../formFields/RadioInput";
const SlimLines = (props) => {
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
              <strong>الخطوط الرفيعة الموجودة على بشرتي</strong>
            </p>
            <ul className="list-group">
              <RadioInput
                valName="slimLines"
                value="15"
                txt="تظهر عند الابتسام"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="slimLines"
                value="10"
                txt="خفيفة"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="slimLines"
                value="5"
                txt="واضحة"
                values={values}
                autoSubmit={autoSubmit}
              />
            </ul>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!values.slimLines}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SlimLines;
