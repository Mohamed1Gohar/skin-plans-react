import Mooc from "../assets/media/images/download.png";
import Spons from "../assets/media/images/sponsors.png";
import SetRoutineBtn from "./SetRoutineBtn";

const About = () => {
  return (
    <section className="container my-5">
      <div className="mb-5 d-none d-lg-block">
        <img src={Spons} alt="شركاؤنا في النجاح" />
      </div>
      <div className="row justify-content-start align-items-center mb-3">
        <div className="col-xl-5 mb-4 offset-xl-2">
          <img src={Mooc} alt="Mooc" title="Mooc" style={{ width: "100%" }} />
        </div>
        <div className="col-xl-5 text-right">
          <h2 className="heading cl-prime">نقوم بالعمل المجهد بدلا منك</h2>
          <p className="my-5">
            Skin-plans هو برنامج مطور خصيصًا لمساعدتك في اختيار الروتين الانسب
            لكي بدقه واحترافيه،وفي غضون دقيقتين فقط.
          </p>
          <ul className="mb-4">
            <li style={listItemStyle}>
              <span style={listItemPointer} className="cl-prime">
                1
              </span>
              من بين مئات المنتجات نرشح لكي المنتج المناسب لبشرتك
            </li>
            <li style={listItemStyle}>
              <span style={listItemPointer} className="cl-prime">
                2
              </span>
              نحرص على أن يكون المنتج المرشح آمن تماماً على بشرتك
            </li>
            <li style={listItemStyle}>
              <span style={listItemPointer} className="cl-prime">
                3
              </span>
              ضمان لمدة 30 يوم في حالة وجود أي مشاكل تتعلق بالمنتج
            </li>
          </ul>
          <SetRoutineBtn text={"ابدأ الآن"} showArrow={false} />
        </div>
      </div>
    </section>
  );
};

const listItemStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
};

const listItemPointer = {
  fontSize: "2rem",
  marginLeft: "1rem ",
};

export default About;
