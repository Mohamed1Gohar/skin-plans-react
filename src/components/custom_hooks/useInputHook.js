import { useState } from "react";


export const useInputValue = (initial) => {
  const [value, setValue] = useState(initial);
  return { value, onChange: (e) => setValue(e.target.value) };
};
