import { Formik, Form } from "formik";
import FormArrows from "../FormArrows";
import RadioInput from "../formFields/RadioInput";

const BlackSpots = (props) => {
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
              <strong>البقع الداكنة في بشرتي موجودة بنسبة..؟</strong>
            </p>
            <ul className="list-group">
              <RadioInput
                valName="blackSpots"
                value="15"
                txt="منعدمة"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="blackSpots"
                value="10"
                txt="صغيرة"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="blackSpots"
                value="5"
                txt="متوسطة"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="blackSpots"
                value="0"
                txt="كبيرة"
                values={values}
                autoSubmit={autoSubmit}
              />
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
