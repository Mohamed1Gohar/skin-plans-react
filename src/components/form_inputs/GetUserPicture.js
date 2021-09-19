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
        <Form style={specialFormStyle}>
          <div className="container" style={{ marginTop: "3rem" }}>
            <p style={{ maxWidth: "25rem" }}>
              لان معظم العملاء يواجهون مشاكل في معرفة ماتحتاجه بشرتهم، يمكنك ان
              تضعي صوره لك وسيتمكن الذكاء الاصطناعي من توضيح المشكله التي تعاني
              منها بشرتك لتسهيل معرفة الخيار الامثل لكِ
            </p>
            {userPicSource && (
              <div className="userPicContainer">
                <img
                  src={userPicSource}
                  style={{ maxHeight: "40vh" }}
                  alt="صورة المستخدمة"
                />
                {captured && <FaCheckCircle style={completedIconStyle} />}
              </div>
            )}
            <div className="d-flex justify-content-center my-lg-1">
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
              onClick={() => handleSubmit(values)}
              style={{ width: "12rem" }}
            >
              تجاوز هذه الخطوة
            </NavLink>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!captured}
            lastStep={true}
            handleSubmit={handleSubmit}
          />
        </Form>
      )}
    </Formik>
  );
};

const specialFormStyle = {
  height: "100vh",
  display: "block",
  paddingTop: "4rem",
};

const selfieContainerStyle = {
  position: " relative",
  width: "5.5rem",
  padding: "0.1rem 0.5rem",
  border: "2px solid #363873",
  margin: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "3rem",
};

const selfieInputStyle = {
  width: "100%",
  height: "100%",
  position: " absolute",
  top: " 0",
  left: " 0",
  opacity: " 0",
};

const iconStyle = {
  width: "1.5rem",
  height: "1.5rem",
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
