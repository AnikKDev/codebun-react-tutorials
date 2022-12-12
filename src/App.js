import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import "./App.css";
const App = () => {
  const [typedText, setTypedText] = useState("");
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (typedText.length <= 3) {
        setIsClickable(false);
      } else {
        setIsClickable(true);
      }
    }, 500);

    // cleanup
    return () => {
      clearTimeout(identifier);
    };
  }, [typedText.length]);
  return (
    <Fragment>
      <input
        onChange={(e) => setTypedText(e.target.value)}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs m-10"
      />
      <button disabled={!isClickable} className="btn btn-primary mx-4">
        Submit
      </button>
    </Fragment>
  );
};

export default App;
