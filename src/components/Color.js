import React from "react";

export const Color = () => {
  const handleOnClick = (event) => {
    let body = document.querySelector("body");
    body.style.background = getRandomColor();
    event.target.style.backgroundColor = getRandomColor();
  };

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color; 
  }

  return (
    <div className="container mt-5 ">
      <button className="btn btn-success mx-2" onClick={handleOnClick}>
        Click Me
      </button>
      <button className="btn btn-primary mx-2" onClick={handleOnClick}>
        Click Me
      </button>
      <button className="btn btn-danger mx-2" onClick={handleOnClick}>
        Click Me
      </button>
      <button className="btn btn-warning mx-2" onClick={handleOnClick}>
        Click Me
      </button>
    </div>
  );
};
