import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import FormArrows from "../FormArrows";

const GetUserLocation = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const [temp, setTemp] = useState(0);
  const [humid, setHumid] = useState(0);
  const [loading, setLoading] = useState(true);

  const API_LINK = "https://api.openweathermap.org/data/2.5";
  const API_KEY = "e69ae94fc40fb0ee7312a34838aa827c";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      fetch(
        `${API_LINK}/weather/?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTemp(data.main.temp);
          setHumid(data.main.humidity);
          setLoading(false);
        });
    });
  }, []);

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          {loading ? (
            <p className="h1">جاري التحميل...</p>
          ) : (
            <div
              className="cl-prime mb-3"
              role="group"
              aria-labelledby="radio-group"
            >
              {/* Temperature  */}
              <div className="mb-2">
                <div className="d-flex justify-content-between">
                  <span dir="ltr">{temp.toFixed()} C</span>
                  <span>درجة الحرارة</span>
                </div>
                <div className="progress" dir="ltr">
                  <div
                    className="progress-bar bg-prime"
                    role="progressbar"
                    style={{
                      width: `${(temp * 100) / 50}%`,
                    }}
                    aria-valuenow={`${temp}`}
                    aria-valuemin="0"
                    aria-valuemax="50"
                  ></div>
                </div>
              </div>
              {/* Humidity  */}
              <div className="mb-2">
                <div className="d-flex justify-content-between">
                  <span dir="ltr"></span>
                  <span>الرطوبة</span>
                </div>
                <div className="progress" dir="ltr">
                  <div
                    className="progress-bar bg-prime"
                    role="progressbar"
                    style={{
                      width: `${humid}%`,
                    }}
                    aria-valuenow={`${humid}`}
                    aria-valuemin="0"
                    aria-valuemax=""
                  ></div>
                </div>
              </div>
              {/* Pollution */}
              <div className="mb-2">
                <div className="d-flex justify-content-between">
                  <span dir="ltr">عالية</span>
                  <span>درجة التلوث</span>
                </div>
                <div className="progress" dir="ltr">
                  <div
                    className="progress-bar bg-prime"
                    role="progressbar"
                    style={{
                      width: `85%`,
                    }}
                    aria-valuenow="80%"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              {/* UV Index */}
              <div className="mb-2">
                <div className="d-flex justify-content-between">
                  <span dir="ltr">عالية</span>
                  <span>مستوى الأشعة فوق البنفسجية</span>
                </div>
                <div className="progress" dir="ltr">
                  <div
                    className="progress-bar bg-prime"
                    role="progressbar"
                    style={{
                      width: `100%`,
                    }}
                    aria-valuenow="100%"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          )}
          <FormArrows values={values} parentProps={props} condition={loading} />
        </Form>
      )}
    </Formik>
  );
};

export default GetUserLocation;
