import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <img src="/Shivam-dev-here-new.gif"></img> */}
      <Image src="/Shivam-dev-here-new.gif" width={300} height={300} alt="Shivam-dev-here"></ Image>
    </div>
  );
}
