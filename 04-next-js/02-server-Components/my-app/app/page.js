"use client"
import { useState, useEFfect } from "react"
export default function Home() {

  const [Count, setCount] = useState(0)
  return (
    <>
      <div>
        Hey, I show Count: {Count}
      </div>
      <button onClick={() => setCount(Count + 1)} >Click to increase</button>
    </>
  );
}