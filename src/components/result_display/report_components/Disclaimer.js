const Disclaimer = () => {
  const content = [
    {
      name: "who we are?",
      p: " Our proprietary algorithm analyses your skin, lifestyle and environment to decode your skin needs. It then maps the right clean, active ingredients to design a personalised routine for you.",
    },

    {
      name: "Privacy Policy",
      p: " We want you to know that your privacy is important to us, and we want to make you feel as comfortable as possible when using this Site. We will only process your personal data as your (gender, age, email, mobile number) following this Privacy Policy and relevant personal data regulation. This processing is a prerequisite for us being able to offer the Services to you.",
    },
    {
      name: "Cookies",
      p: "Our website uses cookies to hold a user’s unique session identifiers, allowing us to serve correct information back to the user.“Session” cookies are temporary bits of information that are erased once you exit your Web browser window or otherwise turn your computer off. Session cookies are used to improve navigation on Web sites and to collect aggregate statistical information. This Site may use session cookies.",
    },
    {
      name: "Other Tracking Technologies ",
      p: "We may also use other tracking technologies like pixel tags, web beacons to enhance the user experience. But these tracking technologies only collect limited data such as cookie number, time and date of page viewing and the number of users visiting any particular page. These tags can not be rejected or removed manually.",
    },
    {
      name: "Disclaimer",
      p: "The information contained on this website is for general information purposes only. The information is provided by [skin plans] and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability concerning the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.",
    },
    {
      name: "Terms Of Services",
      p: "Your use of this Site shall be deemed to constitute your voluntary and express consent to be bound by the terms and conditions of these Terms of Use without limitation and/or qualification and we shall be entitled to enforce these Terms of Use in the same way as if you had signed these Terms of Use.",
    },
  ];

  return (
    <div
      className="result_comp_style text-left"
      dir="ltr"
      style={{ alignItems: "normal" }}
    >
      {content.map((c, i) => {
        return (
          <details key={i} className="mb-3">
            <summary className="h5 mb-2">{c.name}</summary>
            <p className="pl-3">{c.p}</p>
          </details>
        );
      })}
    </div>
  );
};

export default Disclaimer;
