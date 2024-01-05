import Image from "next/image";

type WildcardsProps = {
  wildCardsUp: boolean[];
  setWildCardsUp: (wildCardsUp: boolean[]) => void;
  wildCardType: number;
  setIs50x100Active?: (is50x100Active: boolean) => void;
  alreadyChosen: boolean;
};

export default function WildcardBtn({
  wildCardsUp,
  setWildCardsUp,
  wildCardType,
  setIs50x100Active,
  alreadyChosen,
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
  const wildcardClickHandler = (wildCardIndex: number) => {
    wildCardIndex === 1 ? setIs50x100Active!(true) : null;
    let auxList = [...wildCardsUp];
    auxList[wildCardIndex] = false;
    setWildCardsUp(auxList);
  };
  return (
    <div
      onClick={() =>
        wildCardsUp[wildCardType]
          ? alreadyChosen
            ? null
            : wildcardClickHandler(wildCardType)
          : null
      }
      className={`ml-10 flex h-[60px] w-[60px] items-center justify-center rounded-full  border-2 border-[rgba(0,0,0,0)] p-3  transition-all ease-in-out ${
        wildCardsUp[wildCardType]
          ? !alreadyChosen
            ? "cursor-pointer bg-[rgba(255,255,255,0.1)] hover:scale-[80%] hover:border-white"
            : "bg-[rgba(255,255,255,0.4)] opacity-30"
          : "bg-[rgba(255,255,255,0.4)] opacity-30"
      }`}
    >
      {wildCardType === 1 ? (
        <p className="text-4xl font-bold">{whichWildcard(wildCardType)}</p>
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
