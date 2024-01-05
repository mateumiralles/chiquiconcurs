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
import Wildcards from "./barraWildcards";

export default function ConcursPage() {
  const [vidas, setVidas] = useState(3);
  const [wildCardsUp, setWildCardsUp] = useState<boolean[]>([true, true, true]);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [wasItGuessed, setWasItGuessed] = useState<boolean[]>([]);
  const [alreadyChosen, setAlreadyChosen] = useState(false);
  const [is50x100Active, setIs50x100Active] = useState(false);

  const loadQuestionList: Question[] = [
    ...easyQuestionsList,
    ...midQuestionsList,
    ...diffQuestionsList,
  ];

  return (
    <main className="flex  h-screen w-screen flex-col items-center justify-between ">
      <div className="relative w-full">
        <div className="absolute -z-10 mt-10 flex w-full justify-center">
          <div className="h-[800px] w-[800px] bg-gradient-radial from-sky-900  via-[#0141ff] opacity-25 blur-3xl"></div>
        </div>
      </div>

      <div className="flex h-full w-full flex-col items-center justify-center">
        <Vidas vidas={vidas} />
        <Wildcards
          wildCardsUp={wildCardsUp}
          setWildCardsUp={setWildCardsUp}
          setIs50x100Active={setIs50x100Active}
          alreadyChosen={alreadyChosen}
        />

        {vidas > 0 ? (
          <>
            <PanelPreguntas
              loadQuestionList={loadQuestionList}
              indexQuestion={indexQuestion}
              setIndexQuestion={setIndexQuestion}
              alreadyChosen={alreadyChosen}
              setAlreadyChosen={setAlreadyChosen}
              setIs50x100Active={setIs50x100Active}
            />
            <BolasPreguntas
              loadQuestionList={loadQuestionList}
              indexQuestion={indexQuestion}
              wasItGuessed={wasItGuessed}
            />
            <GridRespuestas
              loadQuestionList={loadQuestionList}
              indexQuestion={indexQuestion}
              wasItGuessed={wasItGuessed}
              setWasItGuessed={setWasItGuessed}
              vidas={vidas}
              setVidas={setVidas}
              alreadyChosen={alreadyChosen}
              setAlreadyChosen={setAlreadyChosen}
              is50x100Active={is50x100Active}
            />
          </>
        ) : (
          <h2 className="text-8xl font-extrabold text-white">has perdut!</h2>
        )}
      </div>
    </main>
  );
}
