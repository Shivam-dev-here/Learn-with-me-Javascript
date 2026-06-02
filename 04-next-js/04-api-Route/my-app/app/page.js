"use client";
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data = { name: "Shivam", Github: "shivam-dev-here" };
    let a = await fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let response = await a.json();
    console.log(response)
  };
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        <h1> Next.js Api Routes Demo</h1>
        <div>
          <button onClick={handleClick}>Click me to post a POST request</button>
        </div>

        <button>Hello</button>
      </div>
    </div>
  );
}
