import React, { useState, useEffect } from "react";

const API_ENDPOINT = "https://restcountries.com/v2/";

const useFetch = (query) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [countries, setCountries] = useState(null);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.message) {
        setError({ show: true, msg: data.message });
      } else {
        setError({ show: false, msg: "" });
        setCountries(data);
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
    fetchData(`${API_ENDPOINT}${query}`);
  }, [query]);

  return { isLoading, error, countries };
};

export default useFetch;
