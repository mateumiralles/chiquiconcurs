import { Question } from "../model";

type BolasPreguntasProps = {
  loadQuestionList: Question[];
  indexQuestion: number;
  setIndexQuestion: (indexQuestion: number) => void;
  alreadyChosen: boolean;
  setAlreadyChosen: (vidas: boolean) => void;
  setIs50x100Active: (is50x100Active: boolean) => void;
};

export default function PanelPreguntas({
  loadQuestionList,
  indexQuestion,
  setIndexQuestion: setIndexQuestion,
  alreadyChosen,
  setAlreadyChosen: setAlreadyChosen,
  setIs50x100Active: setIs50x100Active,
}: BolasPreguntasProps) {
  const clickQuestionHandler = () => {
    alreadyChosen ? nextQuestion() : console.log("There is no option chosen");
  };

  const nextQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
    setAlreadyChosen(false);
    setIs50x100Active(false);
  };
  return (
    <div className="flex h-3/5 w-full flex-row items-end justify-center pb-5 pt-[8%]">
      <div
        className={`flex h-full w-4/5 flex-row items-center justify-center rounded-[60px] border-2 border-[rgba(0,0,0,0)] bg-[rgba(255,255,255,0.1)] transition-all ease-in-out${
          alreadyChosen
            ? " cursor-pointer  hover:scale-95 hover:border-white "
            : ""
        }`}
        onClick={clickQuestionHandler}
      >
        <p className="mx-[5%] text-center text-5xl font-bold leading-normal">
          {indexQuestion + 1 + ". " + loadQuestionList[indexQuestion].content}
        </p>
      </div>
    </div>
  );
}
