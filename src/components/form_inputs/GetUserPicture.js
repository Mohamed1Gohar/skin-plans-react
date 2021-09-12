import { Form, Formik } from "formik";
import { useEffect, useState, useRef } from "react";
import FormArrows from "../FormArrows";

const GetUserPicture = (props) => {
  const [captured, setCaptured] = useState(false);

  const handleSubmit = (values) => {
    props.next(values, true);
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
          <div
            className="m-auto videoContainer"
            style={{
              maxWidth: "600px",
              maxHeight: "450px",
            }}
          >
            {/* <video
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
            <input
              type="file"
              accept="image/*"
              capture="camera"
              className="d-lg-none"
              onInput={() => setCaptured(true)}
            />
            <input
              type="file"
              accept="image/*"
              onInput={() => setCaptured(true)}
            />
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

export default GetUserPicture;
