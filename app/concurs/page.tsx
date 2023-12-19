import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  w-screen h-screen flex-col items-center justify-between ">
      <div className="relative w-full">
        <div className="absolute w-full flex justify-center mt-10 -z-10">
          <div className="h-[800px] w-[800px] bg-gradient-radial from-sky-200 via-blue-200 blur-3xl  dark:from-sky-900 dark:via-[#0141ff] dark:opacity-25"></div>
        </div>
      </div>

      <div className="flex flex-col h-full w-full justify-center items-center">
        <h2 className="text-8xl text-white font-extrabold">pag concurs</h2>
      </div>
    </main>
  );
}
