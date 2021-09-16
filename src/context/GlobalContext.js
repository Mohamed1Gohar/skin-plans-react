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
        userName: action.payload.userName,
        userAge: action.payload.userAge,
        userGender: action.payload.userGender,
        userPhone: action.payload.userPhone,
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
  return (
    <AppContext.Provider
      value={{
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
