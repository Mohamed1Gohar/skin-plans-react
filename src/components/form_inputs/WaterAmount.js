import { Formik, Form } from "formik";
import FormArrows from "../FormArrows";
import RadioInput from "../formFields/RadioInput";

const WaterAmount = (props) => {
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
            <p style={{ margin: "0.5rem 0" }}>
              <strong>أشرب …. كوب يوميا</strong>
            </p>
            <ul className="list-group">
              <RadioInput
                valName="waterAmount"
                value="0"
                txt=" < 5"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="waterAmount"
                value="5"
                txt="6 - 5"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="waterAmount"
                value="10"
                txt="7 - 6"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="waterAmount"
                value="15"
                txt="8 - 7"
                values={values}
                autoSubmit={autoSubmit}
              />
              <RadioInput
                valName="waterAmount"
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
            condition={!values.waterAmount}
          />
        </Form>
      )}
    </Formik>
  );
};

export default WaterAmount;
