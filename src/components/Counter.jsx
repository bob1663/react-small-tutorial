import React from "react";

const Counter = () => {
  const [clicks, setClicks] = React.useState(0);
  const [maxClicks, setMaxClicks] = React.useState(5);
  const [level, setLevel] = React.useState(1);

  function increment() {
    setClicks(clicks + 1);
    check();
  }

  function check() {
    if (clicks === maxClicks) {
      setMaxClicks(maxClicks * 2);
      setLevel(level + 1);
    }
  }

  function reset() {
    setClicks(0);
    setLevel(1);
    setMaxClicks(5);
  }

  return (
    <div  style={{display:'flex', flexDirection:'column'}}>
      <h1>Level: {level}</h1>
      <h2>
        Clicks: {clicks} / {maxClicks}
      </h2>
      <button
        onClick={increment}
        style={{ marginBottom: "2rem", maxWidth: "300px", background: "green" }}
      >
        <h1 style={{ color: "#fff" }}>Click</h1>
      </button>
      <button onClick={reset} style={{ maxWidth: "300px", background: "red" }}>
        <h1 style={{ color: "#fff" }}>Reset</h1>
      </button>
    </div>
  );
};

export default Counter;
