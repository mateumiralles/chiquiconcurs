import WildcardBtn from "./wildcardBtn";

type WildcardsProps = {
  wildCardsUp: boolean[];
  setWildCardsUp: (wildCardsUp: boolean[]) => void;
  setIs50x100Active: (is50x100Active: boolean) => void;
};

export default function Wildcards({
  wildCardsUp,
  setWildCardsUp,
  setIs50x100Active,
}: WildcardsProps) {
  return (
    <div className="absolute top-0 right-0 flex flex-row m-16 w-[20%] justify-end">
      <WildcardBtn
        wildCardsUp={wildCardsUp}
        setWildCardsUp={setWildCardsUp}
        wildCardType={0}
      />
      <WildcardBtn
        wildCardsUp={wildCardsUp}
        setWildCardsUp={setWildCardsUp}
        wildCardType={1}
        setIs50x100Active={setIs50x100Active}
      />
      <WildcardBtn
        wildCardsUp={wildCardsUp}
        setWildCardsUp={setWildCardsUp}
        wildCardType={2}
      />
    </div>
  );
}
