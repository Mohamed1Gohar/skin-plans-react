import { Formik, Form } from "formik";
import FormArrows from "../FormArrows";
import RadioInput from "../formFields/RadioInput";

const Wrinkles = (props) => {
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
            className="mb-3 cl-prime"
            role="group"
            aria-labelledby="radio-group"
          >
            <p>
              <strong>التجاعيد على بشرتي</strong>
            </p>
            <ul className="list-group">
              <RadioInput
                valName="wrinkles"
                value="20"
                txt="غير موجودة حتى الآن"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="wrinkles"
                value="10"
                txt="قليلة و سطحية"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="wrinkles"
                value="5"
                txt="منتشرة و عميقة"
                values={values}
                autoSubmit={autoSubmit}
              />
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
