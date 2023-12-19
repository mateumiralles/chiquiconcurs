import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  w-screen h-screen flex-col items-center justify-between ">
      <div className="relative w-full">
        <div className="absolute w-full flex justify-center mt-10 -z-10">
          <div className="h-[800px] w-[800px] bg-gradient-radial from-sky-200 via-blue-200 blur-3xl  dark:from-sky-900 dark:via-[#0141ff] dark:opacity-25"></div>
        </div>
      </div>

      <div className="flex flex-col h-full w-full ">
        <div className="h-2/3 flex flex-col items-center justify-center pt-20">
          <h2 className="text-8xl text-white font-extrabold">benvinguda al</h2>
          <h2 className="text-9xl text-white font-extrabold">chiquiconcurs</h2>
        </div>
        <div className="h-1/3 flex flex-col items-center justify-start">
          <Link href="/concurs">
            <div className="group rounded-lg border border-transparent px-5 py-4 transition-all ease-in-out hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-500 hover:dark:bg-neutral-700/30 hover:scale-110 duration-200">
              <h2 className={`mb-3 text-2xl font-semibold text-center`}>
                START{" "}
                <span className="pl-2 inline-block transition-transform group-hover:translate-x-10 ease-in-out">
                  -&gt;
                </span>
              </h2>
              <p
                className={`m-0 max-w-[30ch] text-sm opacity-0 group-hover:opacity-60 transition-all text-center`}
              >
                Clicka aqui per a començar a jugar al concurs!
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
