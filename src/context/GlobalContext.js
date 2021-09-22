import { createContext, useReducer } from "react";
import { ObjectSchema } from "yup";

// App State
const appState = {
  userName: "",
  userPhone: "",
  userAge: "",
  userGender: "",
  grade: 0,
  skinType: "",
  offerData: {
    name: "",
    phone: "",
    address: "",
  },
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        userName: action.payload.name,
        userAge: action.payload.age,
        userGender: action.payload.gender,
        userPhone: action.payload.phone,
        grade: action.payload.grade,
        skinType: action.payload.skinType,
      };
    case "SET_OFFER_DATA":
      return {
        ...state,
        // name: action.payload.name,
        // phone: action.payload.phone,
        // address: action.payload.address,
        offerData: action.payload.offerData,
      };

    default:
      return state;
  }
};

// App context
export const AppContext = createContext(appState);

// App Provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, appState);

  // set user data
  const setUserData = (obj) => {
    dispatch({ type: "SET_USER_DATA", payload: obj });
  };

  // set offer data
  const setOfferData = (obj) => {
    console.log(obj);
    dispatch({ type: "SET_OFFER_DATA", payload: obj });
  };
  const calculateDisplayedGrade = () => {
    return ((state.grade * 10) / 185).toFixed();
  };
  return (
    <AppContext.Provider
      value={{
        name: state.userName,
        displayedGrade: calculateDisplayedGrade(),
        age: state.userAge,
        skinType: state.skinType,
        setUserData,
        setOfferData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
