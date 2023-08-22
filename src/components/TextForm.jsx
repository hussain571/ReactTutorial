import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = (event) => {
    setText("");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const generateText = () => {
    setText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat pretium quam. Aliquam at placerat massa, eget vehicula eros. Pellentesque tristique a dolor eu elementum. Donec fringilla bibendum magna, congue tempor turpis venenatis quis. In sagittis tellus orci, quis facilisis odio maximus ac. Nam congue, eros ut semper suscipit, diam metus sodales eros, ut efficitur justo ligula sit eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat pretium quam. Aliquam at placerat massa, eget vehicula eros. Pellentesque tristique a dolor eu elementum. Donec fringilla bibendum magna, congue tempor turpis venenatis quis. In sagittis tellus orci, quis facilisis odio maximus ac. Nam congue, eros ut semper suscipit, diam metus sodales eros, ut efficitur justo ligula sit eu. lorem 800"
    );
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="text-center">Enter the text to analyze below</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
            placeholder="Enter text here..."
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Lowercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-dark mx-2" onClick={generateText}>
          Generate Dummy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above"}</p>
      </div>
    </>
  );
}
