import WildcardBtn from "./wildcardBtn";

type WildcardsProps = {
  wildCardsUp: boolean[];
  setWildCardsUp: (wildCardsUp: boolean[]) => void;
  setIs50x100Active: (is50x100Active: boolean) => void;
  alreadyChosen: boolean;
};

export default function Wildcards({
  wildCardsUp,
  setWildCardsUp,
  setIs50x100Active,
  alreadyChosen,
}: WildcardsProps) {
  return (
    <div className="absolute top-0 right-0 flex flex-row m-16 w-[20%] justify-end">
      <WildcardBtn
        wildCardType={0}
        wildCardsUp={wildCardsUp}
        setWildCardsUp={setWildCardsUp}
        alreadyChosen={alreadyChosen}
      />
      <WildcardBtn
        wildCardType={1}
        wildCardsUp={wildCardsUp}
        setWildCardsUp={setWildCardsUp}
        alreadyChosen={alreadyChosen}
        setIs50x100Active={setIs50x100Active}
      />
      <WildcardBtn
        wildCardType={2}
        wildCardsUp={wildCardsUp}
        setWildCardsUp={setWildCardsUp}
        alreadyChosen={alreadyChosen}
      />
    </div>
  );
}
