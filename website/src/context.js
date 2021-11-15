import React, { useContext, useState, useEffect } from "react";
const API_ENDPOINT = "https://restcountries.com/v2/";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState(
    "alpha?codes=deu,usa,bra,isl,afg,ala,alb,dza"
  );
  const [countries, setCountries] = useState([]);

  const fetchData = async (query) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}${query}`);
      const data = await response.json();
      if (data.status) {
        setError({ show: true, msg: data.message });
      } else {
        const newData = data
          .map((item) => {
            return {
              name: item.name,
              domain: item.topLevelDomain[0],
              population: new Intl.NumberFormat("en-US").format(
                Number(item.population)
              ),
              capital: item.capital,
              region: item.region,
              subregion: item.subregion,
              currencies: item.currencies,
              languages: item.languages,
              flag: item.flags.svg,
              border: item.borders,
            };
          })
          .sort();
        setError({ show: false, msg: "" });
        setCountries(newData);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError({
        show: true,
        msg: "Something went wrong. Please try again later.",
      });
    }
  };

  useEffect(() => {
    fetchData(query);
  }, [query]);

  return (
    <AppContext.Provider value={{ countries, isLoading, error, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
