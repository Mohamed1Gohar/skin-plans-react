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

  const API_KEY = "e69ae94fc40fb0ee7312a34838aa827c";
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=360630&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const CelsiusTemp = data.main.temp - 273.15;
        setTemp(CelsiusTemp);
        setHumid(data.main.humidity);
        setLoading(false);
      });
  }, []);

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          {loading ? (
            <p className="h3 text-center">
              جاري تحميل معلومات الطقس في منطقتك ...
            </p>
          ) : (
            <div
              className="cl-prime"
              role="group"
              aria-labelledby="radio-group"
            >
              <p className="h3 text-center mb-5">
                إليكِ معلومات الطقس في منطقتك والتي لها تأثير سلبي على بشرتك
              </p>
              {/* Temperature  */}
              <div className="mb-4 w-100">
                <div className="d-flex justify-content-between mb-2">
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
                  ></div>
                </div>
              </div>
              {/* Humidity  */}
              <div className="mb-4 w-100">
                <div className="d-flex justify-content-between mb-2">
                  <span dir="ltr">متوسطة</span>
                  <span>الرطوبة</span>
                </div>
                <div className="progress" dir="ltr">
                  <div
                    className="progress-bar bg-prime"
                    role="progressbar"
                    style={{
                      width: `${humid}%`,
                    }}
                  ></div>
                </div>
              </div>
              {/* Pollution */}
              <div className="mb-4 w-100">
                <div className="d-flex justify-content-between mb-2">
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
                  ></div>
                </div>
              </div>
              {/* UV Index */}
              <div className="mb-4 w-100">
                <div className="d-flex justify-content-between mb-2 ">
                  <span dir="ltr">عالية</span>
                  <span>الأشعة فوق البنفسجية</span>
                </div>
                <div className="progress" dir="ltr">
                  <div
                    className="progress-bar bg-prime"
                    role="progressbar"
                    style={{
                      width: `100%`,
                    }}
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
