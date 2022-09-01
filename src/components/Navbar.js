import React, { useContext } from "react";
import NewsContext from "../NewsContext";

function Navbar() {
  const {
    result,
    setResult,
    isLoading,
    setIsLoading,
    handleSearch,
    query,
    setQuery,
  } = useContext(NewsContext);

  return (
    <div className="navbar-container">
      <div className="wrapper">
        <div className="row navbar">
          <div className="site-name">
            <a href="">
              <img src="../news-logo.png" />
            </a>
          </div>
          <div className="home links">
            <a href="">Home</a>
          </div>
          <div className="contact links">
            <a href="">Contact</a>
          </div>
          <div className="about links">
            <a href="">About</a>
          </div>
          <div className="search">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
