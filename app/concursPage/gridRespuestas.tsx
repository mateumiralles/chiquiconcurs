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
};

export default function GridRespuestas({
  loadQuestionList,
  indexQuestion,
  setIndexQuestion: setIndexQuestion,
  wasItGuessed,
  setWasItGuessed: setWasItGuessed,
  vidas,
  setVidas: setVidas,
}: GridRespostesProps) {
  const [optionChosen, setOptionChosen] = useState(-1);
  const [alreadyChosen, setAlreadyChosen] = useState(false);
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

  const timeoutFinalFunction = (sol: boolean, i: number) => {
    sol ? null : setVidas(vidas - 1);
    setIndexQuestion(indexQuestion + 1);
    setAlreadyChosen(false);
  };

  const optionClickHandler = (sol: boolean, i: number) => {
    let newGuessedList = wasItGuessed;
    newGuessedList.push(sol ? true : false);
    setWasItGuessed(newGuessedList);
    setAlreadyChosen(true);
    setOptionChosen(i);

    setTimeout(() => timeoutFinalFunction(sol, i), 1500);
  };

  return (
    <div className="grid grid-cols-2 h-2/5 w-4/5  gap-10 pb-[3%] pt-5">
      {loadQuestionList[indexQuestion].solutions.map((sol, i) => (
        <div
          onClick={() => optionClickHandler(sol.isTrue, i)}
          key={i}
          className={`border-2 border-[rgba(0,0,0,0)] rounded-3xl flex justify-center items-center hover:border-white hover:scale-95 transition-all ease-in-out cursor-pointer ${
            alreadyChosen
              ? optionChosen === i
                ? sol.isTrue
                  ? "bg-[rgba(55,187,103,0.5)]"
                  : "bg-[rgba(224,75,75,0.5)]"
                : sol.isTrue
                ? "bg-[rgba(55,187,103,0.5)]"
                : "bg-[rgba(255,255,255,0.1)]"
              : "bg-[rgba(255,255,255,0.1)]"
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
