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
import PanelPreguntas from "./panelPreguntas";
import GridRespuestas from "./gridRespuestas";

export default function ConcursPage() {
  const [vidas, setVidas] = useState(3);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [wasItGuessed, setWasItGuessed] = useState<boolean[]>([]);
  const loadQuestionList: Question[] = [
    ...easyQuestionsList,
    ...midQuestionsList,
    ...diffQuestionsList,
  ];

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
            <PanelPreguntas
              loadQuestionList={loadQuestionList}
              indexQuestion={indexQuestion}
            />
            <BolasPreguntas
              loadQuestionList={loadQuestionList}
              indexQuestion={indexQuestion}
              wasItGuessed={wasItGuessed}
            />
            <GridRespuestas
              loadQuestionList={loadQuestionList}
              indexQuestion={indexQuestion}
              setIndexQuestion={setIndexQuestion}
              wasItGuessed={wasItGuessed}
              setWasItGuessed={setWasItGuessed}
              vidas={vidas}
              setVidas={setVidas}
            />
          </>
        ) : (
          <h2 className="text-8xl text-white font-extrabold">has perdut!</h2>
        )}
      </div>
    </main>
  );
}
