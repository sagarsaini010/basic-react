import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log(text)
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCapitalizeWords = () => {
    const capitalized = text
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
    setText(capitalized);
  };

  const [text, setText] = useState("");
  return (
    <>
  
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleCapitalizeWords}
        >
          {" "}
          Capitalize Words
        </button>

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          <strong> {text.split(" ").length}</strong> Words and{" "}
          <strong> {text.length}</strong> Characters
        </p>
        <p>
          <strong>{0.008 * text.split(" ").length} </strong>Minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
      
    </>
  );
}
