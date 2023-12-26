import Image from "next/image";

type WildcardsProps = {
  wildCardsUp: boolean[];
  setWildCardsUp: (wildCardsUp: boolean[]) => void;
  wildCardType: number;
};

export default function WildcardBtn({
  wildCardsUp,
  setWildCardsUp,
  wildCardType,
}: WildcardsProps) {
  const whichWildcard = (wildCardType: number) => {
    switch (wildCardType) {
      case 0:
        return "phone";
      case 1:
        return "%";
      case 2:
        return "change";
    }
  };
  return (
    <div
      className={`w-[60px] h-[60px] rounded-full ml-10 p-3 border-2 border-[rgba(0,0,0,0)]  flex justify-center items-center  transition-all ease-in-out ${
        wildCardsUp[wildCardType]
          ? "hover:border-white hover:scale-[80%] bg-[rgba(255,255,255,0.1)] cursor-pointer"
          : "opacity-30 bg-[rgba(255,255,255,0.4)]"
      }`}
    >
      {wildCardType === 1 ? (
        <p className="font-bold text-4xl">{whichWildcard(wildCardType)}</p>
      ) : (
        <Image
          className="m-1 h-full w-full"
          src={`/${whichWildcard(wildCardType)}.png`}
          alt={whichWildcard(wildCardType)!}
          width={50}
          height={50}
        />
      )}
    </div>
  );
}
