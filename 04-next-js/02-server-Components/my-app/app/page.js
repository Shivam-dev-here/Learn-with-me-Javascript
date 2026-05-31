// Solution: A
// "use client"
// import { useState, useEFfect } from "react"
// export default function Home() {

//   const [Count, setCount] = useState(0)

//   console.log("I am a console")
//   return (
//     <>
//       <div>
//         Hey, I show Count: {Count}
//       </div>
//       <button onClick={() => setCount(Count + 1)} >Click to increase</button>
//     </>
//   );
// }

//Solution: B

import Navbar from "@/components/Navbar";

export default function Home() {

  console.log("I am a console")
  return (
    <>
    <Navbar />
      <div>
        Hey, I were showing count :(
      </div>
    </>
  );
}
