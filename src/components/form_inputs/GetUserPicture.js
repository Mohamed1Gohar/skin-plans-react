import { Form, Formik } from "formik";
import { useState, useRef } from "react";
import FormArrows from "../FormArrows";
import { BsImage } from "react-icons/bs";
import { VscDeviceCamera } from "react-icons/vsc";
import { FaCheckCircle } from "react-icons/fa";
import userPicPlaceholder from "../../assets/media/images/userPicPlaceholder.png";
// import { useTransition, animated } from "react-spring";

// FaCheckCircle;
const GetUserPicture = (props) => {
  const [captured, setCaptured] = useState(false);
  const [scanning, setScanning] = useState(false); // prevent user from uploading images will scanning
  const [userPicSource, setUserPicSource] = useState(null);
  const handleSubmit = (values) => {
    props.next(values);
  };
  const userPic = useRef(null);
  const userSelfiePic = useRef(null);
  const handlePic = () => {
    setCaptured(false); // if user reuploaded new pic
    setScanning(true);
    setUserPicSource(null);
    console.log(userPicSource);
    setTimeout(() => {
      setCaptured(true);
      setScanning(false);
    }, 13000); // this timer depending on animation time 2.5 * 5 + 0.5 for more time
    setUserPicSource(URL.createObjectURL(userPic.current.files[0]));
  };
  const handleSelfiePic = () => {
    setCaptured(false); // if user reuploaded new pic
    setScanning(true);
    setUserPicSource(null);
    setTimeout(() => {
      setCaptured(true);
      setScanning(false);
    }, 13000); // this timer depending on animation time 2.5 * 5 + 0.5 for more time
    setUserPicSource(URL.createObjectURL(userSelfiePic.current.files[0]));
  };
  // const scanningBarAnimation = useTransition(userPicSource, null, {
  //   from: {
  //     top: "-11%",
  //     opacity: "0",
  //   },
  //   enter: {
  //     top: "98%",
  //     opacity: "1",
  //   },
  //   leave: {
  //     top: "-11%",
  //     opacity: "0",
  //   },
  // });

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form style={specialFormStyle}>
          <div className="container">
            <p
              style={{ maxWidth: "25rem", margin: "auto", fontSize: "0.8rem" }}
            >
              يمكنك ان تضع صورة لك وسيتمكن الذكاء الاصطناعي من توضيح المشكلة
              التي تعاني منها بشرتك لتسهيل معرفة الخيار الامثل لك
            </p>

            <div className="userPicContainer">
              <img
                src={userPicSource ? userPicSource : userPicPlaceholder}
                style={{ height: "35vh" }}
                alt="صورة المستخدم"
              />
              {captured && <FaCheckCircle style={completedIconStyle} />}

              {userPicSource && <div className="scanningBar"></div>}
            </div>

            <div className="d-flex justify-content-center my-lg-1">
              <div
                style={selfieContainerStyle}
                className="d-block d-lg-none bg-prime text-white"
              >
                <figure>
                  <VscDeviceCamera
                    style={{ ...iconStyle, width: "1.5rem", height: "1.5rem" }}
                  />
                </figure>
                <input
                  disabled={scanning}
                  type="file"
                  accept="image/*"
                  capture="camera"
                  onInput={!scanning ? handleSelfiePic : undefined}
                  style={selfieInputStyle}
                  ref={userSelfiePic}
                />
              </div>
              <div style={selfieContainerStyle} className="bg-prime text-white">
                <figure>
                  <BsImage style={iconStyle} />
                </figure>
                <input
                  disabled={scanning}
                  type="file"
                  accept=".jpg, .jpeg, .png, .bmp"
                  onInput={!scanning ? handlePic : undefined}
                  style={selfieInputStyle}
                  ref={userPic}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn cl-prime rounded-pill  m-auto "
              style={{ width: "12rem", border: "2px solid #363873" }}
            >
              تجاوز هذه الخطوة
            </button>
          </div>
          <FormArrows
            values={values}
            parentProps={props}
            condition={!captured}
          />
        </Form>
      )}
    </Formik>
  );
};

const specialFormStyle = {
  height: "50vh",
  display: "block",
  // marginTop: "15vh",
};

const selfieContainerStyle = {
  position: " relative",
  width: "5.5rem",
  padding: "0.25rem 0.5rem",
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
  width: "1.3rem",
  height: "1.3rem",
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
