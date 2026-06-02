import { submitAction } from "@/actions/form";

export default function Home() {




  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <form action={submitAction}>
        <div className=" text-black bg-pink-400 m-2 border">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className=" text-black bg-pink-400 m-2 border dark:font-black">
          <label htmlFor="add">Address: </label>
          <input type="text" name="add" id="add" />
        </div><div>
          <button className="mx-auto text-black border-white rounded-2xl p-2 bg-blue-300 font-black ">Submit</button>
        </div>
      </form>
    </div>
  );
}
