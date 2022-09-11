import React, { useState } from "react";

const Form = () => {
  const [red, setRed] = useState(50);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(150);
  const handlePost = () => {
    fetch("http://10.33.120.174/led", {
      method: "POST",
      body: JSON.stringify({
        red: red,
        green: green,
        blue: blue,
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
          <input
            type="text"
            placeholder="Add red color"
            onChange={(e) => setRed(e.target.value)}
          />

          <input
            type="text"
            placeholder="Add green color"
            onChange={(e) => setGreen(e.target.value)}
          />

          <input
            type="text"
            placeholder="Add blue color"
            onChange={(e) => setBlue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
