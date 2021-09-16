import { Field } from "formik";

const RadioInput = ({ valName, value, txt, values, autoSubmit }) => {
  return (
    <li
      className={`list-group-item my-2  ${
        values[valName] === value && "active"
      }`}
    >
      <label className="d-block">
        <Field
          type="radio"
          name={valName}
          value={value}
          style={{ visibility: "hidden" }}
          onInput={() => {
            autoSubmit(values);
          }}
        />
        {txt}
      </label>
    </li>
  );
};

export default RadioInput;
