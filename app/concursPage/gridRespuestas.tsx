/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Question, Solution } from "../model";

type GridRespostesProps = {
  loadQuestionList: Question[];
  indexQuestion: number;
  wasItGuessed: boolean[];
  setWasItGuessed: (wasItGuessed: boolean[]) => void;
  vidas: number;
  setVidas: (vidas: number) => void;
  alreadyChosen: boolean;
  setAlreadyChosen: (vidas: boolean) => void;
  is50x100Active: boolean;
};

export default function GridRespuestas({
  loadQuestionList,
  indexQuestion,
  wasItGuessed,
  setWasItGuessed: setWasItGuessed,
  vidas,
  setVidas: setVidas,
  alreadyChosen,
  setAlreadyChosen: setAlreadyChosen,
  is50x100Active,
}: GridRespostesProps) {
  const [loadedSolutions, setLoadedSolutions] = useState<Solution[]>([]);
  const [optionChosen, setOptionChosen] = useState(-1);
  const [index50x100List, setIndex50x100List] = useState([0]);
  const numberOfSol = (solIndex: number) => {
    switch (solIndex) {
      case 0:
        return "A. ";
      case 1:
        return "B. ";
      case 2:
        return "C. ";
      case 3:
        return "D. ";
    }
  };

  const randomOrderArray = (array: any[]): any[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setLoadedSolutions(
      randomOrderArray(loadQuestionList[indexQuestion].solutions),
    );
  }, [indexQuestion]);

  useEffect(() => {
    const auxList: number[] = [];
    loadedSolutions.forEach((solution, i) => {
      solution.isTrue ? null : auxList.push(i);
    });

    setIndex50x100List(randomOrderArray(auxList).splice(0, 2));
  }, [loadedSolutions]);

  const optionClickHandler = (sol: boolean, i: number) => {
    let newGuessedList = [...wasItGuessed];
    newGuessedList.push(sol ? true : false);
    setWasItGuessed(newGuessedList);
    setAlreadyChosen(true);
    setOptionChosen(i);
    sol
      ? null
      : vidas === 1
        ? setTimeout(() => setVidas(vidas - 1), 1500)
        : setVidas(vidas - 1);
  };

  return (
    <>
      <div className="grid h-2/5 w-4/5 grid-cols-2  gap-10 pb-[3%] pt-5">
        {loadedSolutions.map((sol, i) => (
          <div
            onClick={() =>
              alreadyChosen
                ? null
                : is50x100Active && index50x100List.includes(i)
                  ? null
                  : optionClickHandler(sol.isTrue, i)
            }
            key={i}
            className={`flex items-center justify-center rounded-3xl border-2 border-[rgba(0,0,0,0)]  transition-all ease-in-out  ${
              alreadyChosen
                ? optionChosen === i
                  ? sol.isTrue
                    ? "bg-[rgba(55,187,103,0.5)]"
                    : "bg-[rgba(224,75,75,0.5)]"
                  : sol.isTrue
                    ? "bg-[rgba(55,187,103,0.5)]"
                    : "bg-[rgba(255,255,255,0.1)]"
                : is50x100Active && index50x100List.includes(i)
                  ? "bg-[rgba(255,255,255,0.1)]"
                  : "cursor-pointer bg-[rgba(255,255,255,0.1)] hover:scale-95 hover:border-white"
            } `}
          >
            <p
              className={`text-center text-4xl font-bold ${
                is50x100Active && index50x100List.includes(i) && "opacity-0"
              }`}
            >
              <span className="text-yellow-500">{numberOfSol(i)}</span>
              {is50x100Active && index50x100List.includes(i)
                ? "-"
                : sol.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
