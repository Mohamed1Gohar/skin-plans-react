import { Form, Formik } from "formik";
import { useEffect, useState, useRef } from "react";
import FormArrows from "../FormArrows";
import { BsImage } from "react-icons/bs";
import { VscDeviceCamera } from "react-icons/vsc";

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
  // const video = useRef(null),
  //   canvas = useRef(null);
  // let cxt;
  useEffect(() => {
    // cxt = canvas.current.getContext("2d");
    // navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    //   video.current.srcObject = stream;
    //   setTimeout(() => {
    //     capPic();
    //   }, 3000);
    // });
  }, []);

  // const capPic = () => {
  //   cxt.drawImage(
  //     video.current,
  //     0,
  //     0,
  //     canvas.current.width,
  //     canvas.current.height
  //   );
  //   video.current.srcObject.getVideoTracks().forEach((track) => track.stop());
  //   setCaptured(true);
  // };
  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          {/* <div
            className="m-auto videoContainer"
            style={{
              maxWidth: "600px",
              maxHeight: "450px",
            }}
          >
            <video
              ref={video}
              style={{
                display: `${captured ? "none" : "block"}`,
              }}
              autoPlay
            ></video>
            <canvas
              ref={canvas}
              style={{
                width: "auto",
                height: "auto",
                display: `${captured ? "block" : "none"}`,
              }}
            ></canvas> */}

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
              </div>
            )}
            <div className="d-flex">
              <div style={selfieContainerStyle} className="d-block d-lg-none">
                <figure>
                  <VscDeviceCamera style={iconStyle} />
                </figure>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png, .bmp"
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
          </div>
          {/* </div> */}
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

export default GetUserPicture;
