import { Formik, Form } from "formik";
import FormArrows from "../FormArrows";
import RadioInput from "../formFields/RadioInput";

const SleepingHours = (props) => {
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
              <strong>عادةً، نومي يكون ...</strong>
            </p>
            <ul className="list-group">
              <RadioInput
                valName="sleepingHours"
                value="0"
                txt="غير منتظم و متقلب - < 5"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="sleepingHours"
                value="10"
                txt="6 - 8"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="sleepingHours"
                value="20"
                txt="+8"
                values={values}
                autoSubmit={autoSubmit}
              />
            </ul>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!values.sleepingHours}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SleepingHours;
