import React, { useContext } from "react";
import NewsContext from "../NewsContext";

function CustomError() {
  const { error, setError } = useContext(NewsContext);

  return (
    <>
      {error && (
        <div className="error-container">
          <div className="wrapper">
            <div className="row text-center">
              <div className="col-4">{error}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomError;
