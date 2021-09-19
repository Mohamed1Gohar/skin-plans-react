import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import FormArrows from "../FormArrows";
import { BsArrowRightShort } from "react-icons/bs";

const UserName = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "برجاء ادخال اسمك بشكل صحيح")
          .required("برجاء ادخال  اسمك"),
        age: Yup.number()
          .integer()
          .required("برجاء ادخال  عمرك")
          .max(120, " برجاء ادخال عمر أقل من 120 عام"),
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
      {({ values, isValid }) => (
        <Form>
          <div>
            <label
              htmlFor="name"
              className="cl-prime mb-3"
              style={{ width: "16rem" }}
            >
              <strong>
                دعينا نعرف أكثر عنك لتسهيل التواصل والمساعده في حالة إذا رغبتي
                بذلك
                <br />
                برجاء ادخال اسمك
              </strong>
            </label>
            <Field name="name" type="text" className="p-2 cl-prime h5" />
            <br />
            <p style={{ color: "red" }}>
              <ErrorMessage name="name" />
            </p>
          </div>
          <div>
            <label>
              <strong>كم عمرك:</strong>
            </label>

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
          <div>
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
          <div className="d-flex container">
            <FormArrows
              values={values}
              parentProps={props}
              condition={isValid}
              lastStep={true}
              handleSubmit={handleSubmit}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserName;
