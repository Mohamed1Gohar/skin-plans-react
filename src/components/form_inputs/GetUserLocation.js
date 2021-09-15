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
