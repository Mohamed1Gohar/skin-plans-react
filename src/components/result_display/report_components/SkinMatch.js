const SkinMatch = () => {
  return (
    <div className=" result_comp_style mb-4">
      <p>مدى توافق بشرتك مع الروتين المرشح لك :</p>
      <div className="halfCircleContainer">
        <div className="halfCircle"></div>
      </div>
      <p>
        <span className="h3" style={{ fontWeight: "700" }}>
          96 %
        </span>
        <br />
        <span>نسبة التوافق</span>
      </p>
    </div>
  );
};

export default SkinMatch;
