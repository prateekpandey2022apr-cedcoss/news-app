import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    console.log(event);

    if (!query) {
      return;
    }

    // const api = new CFetch("`https://newsapi.org/v2/");

    // api.get(endpoint).then((data) => {
    //   console.log(data);
    // });

    setIsLoading(true);
    setError("");

    fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=de713b26887d4c68a61209262645aa51`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "ok") {
          console.log(data.articles[0]);
          setResult(data.articles);
        } else {
          throw new Error("Error fetching news");
        }
      })
      .catch((error) => {
        console.log(error);
        // alert(error.toString());
        setError(error.toString());
      })
      .finally(() => {
        setIsLoading(false);
        setSelectedCountry("");
        setSelectedCategory("");
      });
  }

  return (
    <NewsContext.Provider
      value={{
        query,
        setQuery,
        result,
        setResult,
        isLoading,
        setIsLoading,
        error,
        setError,
        handleSearch,
        selectedCountry,
        setSelectedCountry,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export default NewsContext;
