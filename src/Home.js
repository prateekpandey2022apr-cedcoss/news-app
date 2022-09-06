import React, { useContext } from "react";
import { useEffect } from "react";
import NewsContext from "./NewsContext";
import moment from "moment";
import Loader from "./components/Loader";
import CustomError from "./components/CustomError";
import Navbar from "./components/Navbar";

function Home() {
  const {
    result,
    setResult,
    isLoading,
    setIsLoading,
    error,
    setError,
    handleSearch,
    query,
    setQuery,
    selectedCountry,
    setSelectedCountry,
    selectedCategory,
    setSelectedCategory,
  } = useContext(NewsContext);

  useEffect(() => {
    debugger;
    if (selectedCategory) {
      setIsLoading(true);
      setError("");
      fetch(
        `https://newsapi.org/v2/top-headlines?q=${selectedCategory}&apiKey=de713b26887d4c68a61209262645aa51`
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
        });
    }
  }, [selectedCategory]);

  useEffect(() => {
    debugger;
    if (selectedCountry) {
      setIsLoading(true);
      setError("");
      fetch(
        `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=de713b26887d4c68a61209262645aa51`
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
        });
    }
  }, [selectedCountry]);

  useEffect(() => {
    setIsLoading(true);
    setError("");
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=de713b26887d4c68a61209262645aa51"
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
      });
  }, []);

  return (
    <>
      <Loader />
      <CustomError />
      <Navbar />
      {query && (
        <div className="search-meta">
          <div className="wrapper">
            <div className="row">
              <div className="col-4">
                Showing news related to <b>"{query}"</b>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="news-container"
        style={{ marginTop: `${query}` ? "2em" : "4em" }}
      >
        <div className="wrapper">
          <div className="row filters">
            <form className="col-4">
              <select
                value={selectedCountry}
                onChange={(event) => {
                  if (!event.target.value) {
                    setSelectedCountry("us");
                    return;
                  }
                  setSelectedCountry(event.target.value);
                  setSelectedCategory("");
                  setQuery("");
                }}
              >
                <option value="">Select country</option>
                <option value="us">US</option>
                <option value="in">India</option>
                <option value="ae">UAE</option>
                <option value="no">Norway</option>
              </select>

              <select
                value={selectedCategory}
                onChange={(event) => {
                  if (!event.target.value) {
                    setSelectedCountry("us");
                    setSelectedCategory("");
                    return;
                  }

                  setSelectedCategory(event.target.value);
                  setSelectedCountry("");
                  setQuery("");
                }}
              >
                <option value="">Select Category</option>
                <option value="technology">Technology</option>
                <option value="travel">Travel</option>
                <option value="science">Science</option>
                <option value="movies">Movies</option>
              </select>
            </form>
          </div>
        </div>

        {result.length > 0 ? (
          <div className="wrapper">
            {result.map((news, idx) => {
              return (
                <div className="row" key={idx}>
                  <div
                    className={`col-4 news ${idx % 2 !== 0 ? "reversed" : ""} `}
                  >
                    <div className="news-image">
                      <a href={news.url} target="_blank">
                        <img
                          src={
                            news.urlToImage
                              ? news.urlToImage
                              : `https://via.placeholder.com/433x227.png?text=Not%20available`
                          }
                        />
                      </a>
                    </div>
                    <div className="news-content">
                      <h2>
                        <a href={news.url} target="_blank">
                          {news.title}
                        </a>
                      </h2>
                      <div className="news-meta">
                        <span>{news.author} </span>
                        <span>&#8226; </span>
                        <span>{moment(news.publishedAt).fromNow()}</span>
                      </div>
                      <div className="news-desc">{news.description}</div>
                      {/* <div>
                    <a href={news.url} target="_blank" className="read-more">
                      Read More
                    </a>
                  </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="wrapper">
            <div className="row">
              <div className="col-4">Nothing found</div>
            </div>
          </div>
        )}
      </div>
      {/* {result.map((news, idx) => {
          return (
            <div className="row news" key={idx}>
              <div className="col-4">
                <h2 className="title">
                  <a href={news.url} target="_blank">
                    {news.title}
                  </a>
                </h2>
                <div className="date text-center">
                  {news.author}
                  &#8901;
                  {moment(news.publishedAt).fromNow()}
                </div>
                <div className="image text-center">
                  <a href={news.url} target="_blank">
                    <img src={news.urlToImage} />
                  </a>
                </div>
                <div className="description">{news.description}</div>
                <div className="text-center">
                  <a href={news.url} target="_blank" className="read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          );
        })} */}
    </>
  );
}

export default Home;
