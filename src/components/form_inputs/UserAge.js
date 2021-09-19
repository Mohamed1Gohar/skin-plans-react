import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormArrows from "../FormArrows";

const UserAge = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      validationSchema={Yup.object({
        age: Yup.number()
          .integer()
          .required("برجاء ادخال  عمرك")
          .max(120, " برجاء ادخال عمر أقل من 120 عام"),
      })}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <div className="cl-prime mb-3">
            <p>
              <strong>كم عمرك:</strong>
            </p>
            <Field
              name="age"
              type="number"
              className="p-2 cl-prime h5"
              min="0"
            />
            <br />
            <p style={{ color: "red" }}>
              <ErrorMessage name="age" />
            </p>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!values.age}
          />
        </Form>
      )}
    </Formik>
  );
};

export default UserAge;
