import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  //switch
  switch(action.type){
    // precisa ser em maiusculo.
    case "RED":
        return {...state,color: "red"}
    case "BLUE":
        return{...state,color:"blue"}
    default:
        return state;
        // vai retornar o padrão, no caso roxo
  }
};

export function TitleColorContextProvider({ children }) {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

  console.log("Tietle color context: ", state);

  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
}
