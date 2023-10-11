"use client";
import { useEffect, useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("First useEffect runs when count updated");
  }, [count]);

  useEffect(() => {
    console.log("Second useEffect");
    setCount((prev) => prev + 1);
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>You have clicked the button {count} tim</h1>
      <button onClick={handleClick}>Click me!!</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
