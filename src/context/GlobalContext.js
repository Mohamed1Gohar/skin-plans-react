import { createContext, useReducer } from "react";

// App State
const appState = {
  userName: "",
  userPhone: "",
  userAge: "",
  userGender: "",
  grade: 0,
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
    console.log("cotext ", obj);
    dispatch({ type: "SET_USER_DATA", payload: obj });
  };

  const calculateDisplayedGrade = () => {
    return ((state.grade * 10) / 185).toFixed();
  };
  return (
    <AppContext.Provider
      value={{
        name: state.userName,
        displayedGrade: calculateDisplayedGrade(),
        setUserData,
      }}
    >
      {console.log(calculateDisplayedGrade())}
      {children}
    </AppContext.Provider>
  );
};
