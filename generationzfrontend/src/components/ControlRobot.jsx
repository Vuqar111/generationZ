import React, { useState } from "react";

const Form = () => {
  const [forward, setForward] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [backward, setBackward] = useState(0);

  const forwardHandler = (e) => {
    setForward(1);
    setLeft(0);
    setRight(0);
    setBackward(0);
  };
  const leftHandler = (e) => {
    setForward(0);
    setLeft(1);
    setRight(0);
    setBackward(0);
  };
  const rightHandler = (e) => {
    setForward(0);
    setLeft(0);
    setRight(1);
    setBackward(0);
  };
  const backwardHandler = () => {
    setBackward(1);
    setForward(0);
    setLeft(0);
    setRight(0);
  };
  const resetButton = () => {
    setForward(0);
    setLeft(0);
    setRight(0);
    setBackward(0);
  };
  const handlePost = (e) => {
    e.preventDefault();
    fetch("http://10.33.120.174/motor", {
      method: "POST",
      body: JSON.stringify({
        forward: forward,
        left: left,
        right: right,
        backward: backward,
      }),
      headers: { "Content-Type": "text/plain" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div>
      <div className="container">
        <h2>Send request to led api</h2>
        <form onSubmit={handlePost}>
          <div className="w-[50%] m-[auto] flex justify-between items-center text-[white]">
            <div>
              <button
                type="number"
                className="bg-[green] w-[250px] h-[200px] leftBtn"
                onClick={leftHandler}
              >
                Left
              </button>
            </div>
            <div className="flex flex-col text-center">
              <button
                type="number"
                className="bg-[green] w-[250px] h-[60px] forwardBtn text-center"
                onClick={forwardHandler}
              >
                Forward
              </button>
              {/* Reset button */}
              <button
                type="number"
                className="bg-[green] w-[250px] h-[60px] resetBtn mt-[30px]"
                onClick={resetButton}
              >
                Stop
              </button>
              <button
                type="number"
                className="bg-[green] w-[250px] h-[60px] backwardBtn mt-[30px]"
                onClick={backwardHandler}
              >
                Backward
              </button>
            </div>
            <div>
              <button
                type="number"
                className="bg-[green] w-[250px] h-[200px] rightBtn"
                onClick={rightHandler}
              >
                Right
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
