import { Form, Formik } from "formik";
import { useEffect, useState, useRef } from "react";
import FormArrows from "../FormArrows";
import { BsImage } from "react-icons/bs";
import { VscDeviceCamera } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

// FaCheckCircle;
const GetUserPicture = (props) => {
  const [captured, setCaptured] = useState(false);
  const [userPicSource, setUserPicSource] = useState(null);
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  const userPic = useRef(null);
  const userSelfiePic = useRef(null);
  const handlePic = () => {
    setTimeout(() => {
      setCaptured(true);
    }, 12500); // this timer depending on animation time 2.5 * 5
    setUserPicSource(URL.createObjectURL(userPic.current.files[0]));
  };
  const handleSelfiePic = () => {
    setCaptured(true);
    setUserPicSource(URL.createObjectURL(userSelfiePic.current.files[0]));
  };
  useEffect(() => {}, []);

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <div className="container">
            <p style={{ maxWidth: "25rem" }}>
              لان معظم العملاء يواجهون مشاكل في معرفة ماتحتاجه بشرتهم، يمكنك ان
              تضعي صوره لك وسيتمكن الذكاء الاصطناعي من توضيح المشكله التي تعاني
              منها بشرتك لتسهيل معرفة الخيار الامثل لكِ
            </p>
            {userPicSource && (
              <div className="userPicContainer">
                <img
                  src={userPicSource}
                  className="userPic"
                  alt="صورة المستخدمة"
                />
                {captured && <FaCheckCircle style={completedIconStyle} />}
              </div>
            )}
            <div className="d-flex my-lg-1">
              <div style={selfieContainerStyle} className="d-block d-lg-none">
                <figure>
                  <VscDeviceCamera style={iconStyle} />
                </figure>
                <input
                  type="file"
                  accept="image/*"
                  capture="camera"
                  onInput={handleSelfiePic}
                  style={selfieInputStyle}
                  ref={userSelfiePic}
                />
              </div>
              <div style={selfieContainerStyle}>
                <figure>
                  <BsImage style={iconStyle} />
                </figure>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png, .bmp"
                  onInput={handlePic}
                  style={selfieInputStyle}
                  ref={userPic}
                />
              </div>
            </div>
            <NavLink
              to="/results"
              className="btn bg-prime text-white  rounded-pill border-0 m-auto"
              style={{ width: "11rem" }}
            >
              تجاوز هذه الخطوة
            </NavLink>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!captured}
            lastStep={true}
          />
        </Form>
      )}
    </Formik>
  );
};

const selfieContainerStyle = {
  margin: "auto",
  position: "relative",
};

const selfieInputStyle = {
  width: "2rem",
  height: "2rem",
  position: " absolute",
  top: " 0",
  left: " 0",
  opacity: " 0",
};

const iconStyle = {
  width: "2rem",
  height: "2rem",
};

const completedIconStyle = {
  fontSize: " 3rem",
  color: " #28a828",
  position: " absolute",
  top: " calc(50% - 1.5rem)",
  left: " calc(50% - 1.5rem)",
  background: " #ffff",
  borderRadius: " 50%",
  boxShadow: " 0 0 18px 9px rgb(255 255 255 / 50%)",
  border: " none",
  outline: " none",
};
export default GetUserPicture;
