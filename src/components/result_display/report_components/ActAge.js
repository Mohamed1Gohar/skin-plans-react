const ActAge = () => {
  return (
    <div className="result_comp_style" dir="ltr">
      <p className="h4">عمرك الحقيقي</p>
      <p>عمرك الحقيقي: {35}</p>
      <div className="progress w-100 my-2" style={{ height: "1.5rem" }}>
        <div
          className="progress-bar text-right px-2 bg-prime"
          role="progressbar"
          style={{ width: `calc(2rem + ${35}% )` }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {35}
        </div>
      </div>
      <p>عمرك بالنسبه لمظهر بشرتك : {35 + 7}</p>
      <div className="progress w-100 my-2" style={{ height: "1.5rem" }}>
        <div
          className="progress-bar text-right pr-2 bg-danger"
          role="progressbar"
          style={{ width: `calc(2rem + ${35 + 7}% )` }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {35 + 7}
        </div>
      </div>
    </div>
  );
};

export default ActAge;
