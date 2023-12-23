"use client";
import { useState, useEffect } from "react";
import Vidas from "./barraVidas";
import { Question } from "../model";
import {
  easyQuestionsList,
  midQuestionsList,
  diffQuestionsList,
} from "../data";
import BolasPreguntas from "./bolasPreguntas";

export default function ConcursPage() {
  const [vidas, setVidas] = useState(3);
  const [indexQuestion, setindexQuestion] = useState(0);
  const [wasItGuessed, setWasItGuessed] = useState<boolean[]>([true, false]);
  const randomSorting = () => Math.random() - 0.5;
  const loadQuestionList: Question[] = [
    ...easyQuestionsList.sort(randomSorting),
    ...midQuestionsList.sort(randomSorting),
    ...diffQuestionsList.sort(randomSorting),
  ];
  const btnHandler = () => {
    setindexQuestion(indexQuestion + 1);
  };

  return (
    <main className="flex  w-screen h-screen flex-col items-center justify-between ">
      <div className="relative w-full">
        <div className="absolute w-full flex justify-center mt-10 -z-10">
          <div className="h-[800px] w-[800px] bg-gradient-radial from-sky-200 via-blue-200 blur-3xl  dark:from-sky-900 dark:via-[#0141ff] dark:opacity-25"></div>
        </div>
      </div>

      <div className="flex flex-col h-full w-full justify-center items-center">
        <Vidas vidas={vidas} />
        {vidas > 0 ? (
          <>
            <div className="h-3/5 w-full bg-yellow-500"></div>
            <BolasPreguntas
              loadQuestionList={loadQuestionList}
              indexQuestion={indexQuestion}
              wasItGuessed={wasItGuessed}
            />
            <div className="h-2/5 w-full bg-blue-500"></div>
          </>
        ) : (
          <h2 className="text-8xl text-white font-extrabold">has perdut!</h2>
        )}

        {/* -------------------> BOTÓ pruebas
        <div
          onClick={btnHandler}
          className="m-24 font-bold text-black border-2 border-solid border-red-500 bg-red-200 p-5 text-2xl rounded-lg"
        >
          {" "}
          PRUEBA
        </div> */}
      </div>
    </main>
  );
}
