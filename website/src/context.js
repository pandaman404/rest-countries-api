import React, { useContext, useState, useEffect, useCallback } from "react";
import useFetch from "./useFetch";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState(
    "alpha?codes=deu,usa,bra,isl,afg,ala,alb,dza"
  );
  const { isLoading, error, countries } = useFetch(query);

  // const fetchData = async (query) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(`${API_ENDPOINT}${query}`);
  //     const data = await response.json();
  //     if (data.status) {
  //       setError({ show: true, msg: data.message });
  //     } else {
  //       const newData = data
  //         .map((item) => {
  //           return {
  //             name: item.name,
  //             nativeName: item.nativeName,
  //             domain: item.topLevelDomain[0],
  //             code: item.alpha3Code,
  //             population: new Intl.NumberFormat("en-US").format(
  //               Number(item.population)
  //             ),
  //             capital: item.capital,
  //             region: item.region,
  //             subregion: item.subregion,
  //             currencies: item.currencies,
  //             languages: item.languages,
  //             flag: item.flags.svg,
  //             border: item.borders,
  //           };
  //         })
  //         .sort();
  //       setError({ show: false, msg: "" });
  //       setCountries(newData);
  //     }
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(false);
  //     setError({
  //       show: true,
  //       msg: "Something went wrong. Please try again later.",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   fetchData(query);
  // }, [query]);

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
