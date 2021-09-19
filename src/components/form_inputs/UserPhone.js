import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormArrows from "../FormArrows";

const UserPhone = (props) => {
  const handleSubmit = (values) => {
    // console.log(props);
    props.next(values);
  };

  return (
    <Formik
      validationSchema={Yup.object({
        phone: Yup.string()
          .trim()
          .matches(
            /^[002]{0,3}?[+2]{0,2}?01[1250][0-9]{8}$/g,
            "برجاء ادخال رقم صحيح مكون من 11 رقم"
          )
          .min(11, "برجاء ادخال رقم صحيح مكون من 11 رقم")
          .required("برجاء ادخال رقم تلفونك "),
      })}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <div className="phone">
            <label
              htmlFor="phone"
              className="cl-prime mb-3 mx-auto"
              style={{ width: "16rem" }}
            >
              <strong>
                أهلا {values.name}، <br />
                سعيدون بالتواصل معك 👋 <br />
                لابلاغك بتفاصيل بشرتك وما تحتاجه من عناصر مغذية <br />
                رقم الهاتف :
              </strong>
            </label>
            <Field name="phone" type="phone" className="p-2 cl-prime h5" />
            <p style={{ color: "red" }}>
              <ErrorMessage name="phone" />
            </p>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={values.phone.length < 11}
          />
        </Form>
      )}
    </Formik>
  );
};

export default UserPhone;
