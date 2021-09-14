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
        age: Yup.number().integer().required("برجاء ادخال  عمرك"),
      })}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values, isValid }) => (
        <Form>
          <div className="cl-prime mb-3">
            <p>
              <strong>كم عمرك:</strong>
            </p>
            <Field name="age" type="number" className="p-2 cl-prime h5" />
            <br />
            <p style={{ color: "red" }}>
              <ErrorMessage name="age" />
            </p>
            {console.log(isValid)}
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
