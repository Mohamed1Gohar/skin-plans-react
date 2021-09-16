import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
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
      })}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <div className="name">
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
          <div className="d-flex container">
            <button
              type="submit"
              className="btn text-white my-3 bg-prime"
              style={{ borderRadius: "3rem", width: "3.4rem", margin: "auto" }}
              disabled={values.name.length < 2}
            >
              <BsArrowRightShort style={{ fontSize: "2rem" }} />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserName;
