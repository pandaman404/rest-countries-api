import React, { useContext, useState, useEffect, useCallback } from "react";
import useFetch from "./useFetch";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState(
    "alpha?codes=deu,usa,bra,isl,afg,ala,alb,dza"
  );
  const { isLoading, error, countries } = useFetch(query);

  return (
    <AppContext.Provider
      value={{ countries, isLoading, error, query, setQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
