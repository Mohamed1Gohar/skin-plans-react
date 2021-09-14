import { useSpring, animated } from "react-spring";
import Logo from "../../assets/media/images/logo.png";
import SinglePhraseContent from "./SinglePhraseContent";

const ContentWhileFetching = ({ resultReceived, showingTime }) => {
  const content = [
    "مزامنة نوع البشرة مع المشاكل التي تواجهها…",
    "حساب درجة التجاعيد بالنسبة للسن....",
    "حساب درجة الخطوط الرفيعة بالنسبة للسن…",
    "حساب ملائمة اسلوب نومك مع صحة بشرتك...",
    "حساب كمية المياه المستهلكة يومياً بالنسبة لصحة بشرتك...",
    "حساب تفاصيل نمط حياتك ومدى تأثيره على بشرتك...",
    "جاري البحث عن افضل منتج مناسب لك من بين قاعدة البيانات…",
    "جاري انشاء تقرير عن بشرتك………….",
  ];

  const progressBarFill = useSpring({
    from: {
      width: "0%",
    },
    to: {
      width: `${resultReceived ? "100%" : "90%"}`,
    },
    config: { duration: showingTime },
  });
  return (
    <div className="cl-prime text-right">
      <p className="h4">
        <img
          src={Logo}
          alt="skin plans"
          style={{
            display: "inline-block",
            width: "10rem",
            marginLeft: "0.5rem",
          }}
        />
        يرشح لك المنتج المناسب، الغني بالعناصر الطبيعية المغذية للبشرة والملائمة
        لنوعيتها
      </p>
      <div className="progress my-3">
        <animated.div
          style={progressBarFill}
          className="progress-bar   bg-prime"
          role="progressbar"
        ></animated.div>
      </div>
      <ul className="list-group">
        <p className="h5">جاري حساب النتائج…</p>
        {content.map((c, i) => {
          const eachItemAnimationTime = showingTime / 7;
          return (
            <SinglePhraseContent
              key={i}
              phrase={c}
              animationDuration={eachItemAnimationTime * i}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContentWhileFetching;
