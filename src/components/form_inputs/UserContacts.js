import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import FormArrows from "../FormArrows";
import { BsArrowRightShort } from "react-icons/bs";
import RadioInput from "../formFields/RadioInput";

const UserName = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
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
      {({ values }) => (
        <Form>
          <div>
            <p className="h4">الخطوة الأخيرة</p>
            <p>
              تم الانتهاء من تحليل نتائجك ستعرف تفاصيل بشرتك في الصفحه التاليه
              يرجي كتابة بيانتك لارسال النتائج
            </p>
            <div
              className="cl-prime mb-2"
              style={{ width: "100%" }}
              role="group"
              aria-labelledby="radio-group"
            >
              <ul className="list-group flex-row justify-content-between">
                <div style={genderInputStyle}>
                  <RadioInput
                    valName="gender"
                    value="female"
                    txt="أنثى"
                    values={values}
                  />
                </div>
                <div style={genderInputStyle}>
                  <RadioInput
                    valName="gender"
                    value="male"
                    txt="ذكر"
                    values={values}
                  />
                </div>
              </ul>
            </div>

            <Field
              name="name"
              type="text"
              className="p-2 pr-3 cl-prime   rounded-pill"
              placeholder="اسمك"
            />
            <p style={{ color: "red", marginBottom: "1rem" }}>
              <ErrorMessage name="name" />
            </p>
            <Field
              name="age"
              type="number"
              className="p-2 pr-3 cl-prime   rounded-pill"
              min="0"
              placeholder=" عمرك"
            />
            <p style={{ color: "red", marginBottom: "1rem" }}>
              <ErrorMessage name="age" />
            </p>
            <Field
              name="phone"
              type="phone"
              className="p-2 pr-3 cl-prime   rounded-pill"
              placeholder="رقم التلفون"
            />
            <p style={{ color: "red", marginBottom: "1rem" }}>
              <ErrorMessage name="phone" />
            </p>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={
              values.name.length >= 2 &&
              values.age &&
              values.phone.length >= 11 &&
              values.gender
                ? false
                : true
            }
            lastStep={true}
            handleSubmit={handleSubmit}
          />
        </Form>
      )}
    </Formik>
  );
};

const genderInputStyle = {
  width: "45%",
  display: "inline-block",
};
export default UserName;
