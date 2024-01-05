import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between ">
      <div className="relative w-full">
        <div className="absolute -z-10 mt-10 flex w-full justify-center">
          <div className="h-[800px] w-[800px] bg-gradient-radial from-sky-900  via-[#0141ff] opacity-25 blur-3xl"></div>
        </div>
      </div>

      <div className="flex h-full w-full flex-col ">
        <div className="flex h-2/3 flex-col items-center justify-center pt-20">
          <h2 className="text-8xl font-extrabold text-white">benvinguda al</h2>
          <h2 className="text-9xl font-extrabold text-white">chiquiconcurs</h2>
        </div>
        <div className="flex h-1/3 flex-col items-center justify-start">
          <Link href="/concursPage">
            <div className="group  rounded-lg border border-transparent px-5 py-4 transition-all duration-200 ease-in-out hover:scale-110  hover:border-neutral-500 hover:bg-neutral-700/30">
              <h2 className={`mb-3 text-center text-2xl font-semibold`}>
                START{" "}
                <span className="inline-block pl-2 transition-transform ease-in-out group-hover:translate-x-10">
                  -&gt;
                </span>
              </h2>
              <p
                className={`m-0 max-w-[30ch] text-center text-sm opacity-0 transition-all group-hover:opacity-60`}
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
