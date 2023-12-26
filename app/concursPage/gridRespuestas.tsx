import { useState } from "react";
import { Question } from "../model";

type GridRespostesProps = {
  loadQuestionList: Question[];
  indexQuestion: number;
  setIndexQuestion: (indexQuestion: number) => void;
  wasItGuessed: boolean[];
  setWasItGuessed: (wasItGuessed: boolean[]) => void;
  vidas: number;
  setVidas: (vidas: number) => void;
  alreadyChosen: boolean;
  setAlreadyChosen: (vidas: boolean) => void;
};

export default function GridRespuestas({
  loadQuestionList,
  indexQuestion,
  setIndexQuestion: setIndexQuestion,
  wasItGuessed,
  setWasItGuessed: setWasItGuessed,
  vidas,
  setVidas: setVidas,
  alreadyChosen,
  setAlreadyChosen: setAlreadyChosen,
}: GridRespostesProps) {
  const [optionChosen, setOptionChosen] = useState(-1);
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

  const optionClickHandler = (sol: boolean, i: number) => {
    let newGuessedList = wasItGuessed;
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
    <div className="grid grid-cols-2 h-2/5 w-4/5  gap-10 pb-[3%] pt-5">
      {loadQuestionList[indexQuestion].solutions.map((sol, i) => (
        <div
          onClick={() =>
            alreadyChosen ? null : optionClickHandler(sol.isTrue, i)
          }
          key={i}
          className={`border-2 border-[rgba(0,0,0,0)] rounded-3xl flex justify-center items-center  transition-all ease-in-out  ${
            alreadyChosen
              ? optionChosen === i
                ? sol.isTrue
                  ? "bg-[rgba(55,187,103,0.5)]"
                  : "bg-[rgba(224,75,75,0.5)]"
                : sol.isTrue
                ? "bg-[rgba(55,187,103,0.5)]"
                : "bg-[rgba(255,255,255,0.1)]"
              : "bg-[rgba(255,255,255,0.1)] hover:border-white hover:scale-95 cursor-pointer"
          } `}
        >
          <p className="text-4xl font-bold text-center">
            {numberOfSol(i) + sol.content}
          </p>
        </div>
      ))}
    </div>
  );
}
