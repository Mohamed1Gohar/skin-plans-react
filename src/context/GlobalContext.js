import { createContext, useReducer } from "react";

// App State
const appState = {
  userName: "",
  userPhone: "",
  grade: 0,
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER_NAME":
      return {
        ...state,
        userName: action.payload,
      };
    case "ADD_USER_PHONE":
      return {
        ...state,
        userPhone: action.payload,
      };
    case "CHANGE_USER_GRADE":
      return {
        ...state,
        userGrade: state.grade + action.payload,
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

  // add user name
  const addUserName = (txt) => {
    dispatch({ type: "ADD_USER_NAME", payload: txt });
  };
  // add user phone
  const addUserPhone = (txt) => {
    dispatch({ type: "ADD_USER_PHONE", payload: txt });
  };
  // change user grad
  const changeUSerGrade = (num) => {
    dispatch({ type: "CHANGE_USER_GRADE", payload: num });
  };

  return (
    <AppContext.Provider
      value={{
        userData: state,
        addUserName,
        addUserPhone,
        changeUSerGrade,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
