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
    <div className="absolute right-0 top-0 m-16 flex w-[20%] flex-row justify-end">
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
