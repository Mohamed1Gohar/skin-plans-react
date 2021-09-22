import { BsCheck } from "react-icons/bs";

const Info = () => {
  const content = [
    {
      head: "الريتينول بنسبة 25%",
      secTxt:
        "بسبب افتقار بشرتك لفيتامين أ والذي يؤدي دوراََ   كبيراََ في القضاء على التصبغات الجلدية والندوب ويعمل على:",
      listItems: [
        "إعادة بناء الخلايا التالفة في البشرة",
        "محاربة التجاعيد والخطوط الرفيعة",
        "منح البشرة النضارة ومحاربة البهتان",
        "مكافحة البثور وتنظيف المسامات الواسعة",
        "معالجة التصبغات وندوب حب الشباب",
        "محاربة الجفاف وترطيب البشرة",
      ],
    },
    {
      head: "كولاجين بنسبة 37%",
      secTxt:
        "بسبب تحويل نسبة كبيرة من الكولاجين التي يمتصها الجسم لأحماض أمينية لتغذية باقي الجسد بدون التأثير على الجلد، ولذلك يجب امداد البشرة بالكولاجين وذلك لأجل :",
      listItems: [
        "القضاء على خطوط الوجه والتجاعيد",
        "إبراز الشفايف والخدود بمظهر أكثر امتلاء",
        "منح البشرة النضارة ومحاربة البهتاالقضاء على الخطوط البيضاء والسيلوليت في أجزاء الجسم المختلفة",
        "توحيد لون البشرة والقضاء على البقع الداكنة",
        "معالجة التصبغات وندوب حب الشباب",
        "ترقيق وتنعيم الجلد",
      ],
    },
    {
      head: "25% من الالوفيرا والشاي الاخضر",
      secTxt:
        " لاحتوائهم على فيتامينات ومعادن ومضادات اكسده لمحاربة علامات التقدم في السن المبكره ومنع تكون الرئوس السوداء والحد من البثور والتصبغات.",
    },
  ];
  return (
    <div
      className="text-right result_comp_style mb-4"
      style={{ gridArea: "info" }}
    >
      <p className="h5">
        معدل دوران الخلايا في بشرتك بطيء نسبياً
        <br />
        بشرتك تحتاج كمية كبيرة من
        <br />
      </p>
      {content.map((c, i) => {
        return (
          <div
            key={i}
            className="card text-center"
            style={{
              border: "2px solid #363873",
              borderRadius: `${
                i === 0
                  ? "2rem 2rem 0 0"
                  : i === content.length - 1
                  ? " 0 0 2rem 2rem"
                  : "0"
              }`,
            }}
          >
            <div
              className="card-header bg-prime text-white"
              style={{ borderRadius: `${i === 0 && "1.6rem 1.6rem 0 0"}` }}
            >
              {c.head}
            </div>
            <div className="card-body">
              <p className="card-text" style={{ color: "rgb(95, 100, 226)" }}>
                {c.secTxt}
              </p>
              {c.listItems && (
                <ul className="my-3 w-100 text-right">
                  {c.listItems.map((c, i) => {
                    return (
                      <li key={i} className="pb-2" style={listStyle}>
                        <BsCheck className="bg-prime text-white ml-3" />
                        {c}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const listStyle = {
  listStyle: "none",
  paddingRight: "1rem",
};

export default Info;
