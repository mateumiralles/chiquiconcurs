import { Question } from "../model";

type BolasPreguntasProps = {
  loadQuestionList: Question[];
  indexQuestion: number;
  setIndexQuestion: (indexQuestion: number) => void;
  alreadyChosen: boolean;
  setAlreadyChosen: (vidas: boolean) => void;
};

export default function PanelPreguntas({
  loadQuestionList,
  indexQuestion,
  setIndexQuestion: setIndexQuestion,
  alreadyChosen,
  setAlreadyChosen: setAlreadyChosen,
}: BolasPreguntasProps) {
  const clickQuestionHandler = () => {
    alreadyChosen ? nextQuestion() : console.log("There is no option chosen");
  };

  const nextQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
    setAlreadyChosen(false);
  };
  return (
    <div className="h-3/5 w-full flex flex-row justify-center items-end pt-[8%] pb-5">
      <div
        className={`h-full w-4/5 bg-[rgba(255,255,255,0.1)] rounded-[60px] flex flex-row justify-center items-center border-2 border-[rgba(0,0,0,0)] transition-all ease-in-out${
          alreadyChosen
            ? " hover:border-white  cursor-pointer hover:scale-95 "
            : ""
        }`}
        onClick={clickQuestionHandler}
      >
        <p className="text-5xl font-bold mx-[5%] text-center leading-normal">
          {indexQuestion + 1 + ". " + loadQuestionList[indexQuestion].content}
        </p>
      </div>
    </div>
  );
}
