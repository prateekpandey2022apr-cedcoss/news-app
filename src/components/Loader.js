import React, { useContext } from "react";
import NewsContext from "../NewsContext";

function Loader() {
  const { result, setResult, isLoading, setIsLoading } =
    useContext(NewsContext);
  return (
    <>
      {isLoading && (
        <div className="row">
          <div className="col-4 text-center">
            <img src="../loader.svg" className="loader" />
            <p>Loading news...</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Loader;
