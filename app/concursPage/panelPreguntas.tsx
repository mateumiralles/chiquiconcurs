import { Question } from "../model";

type BolasPreguntasProps = {
  loadQuestionList: Question[];
  indexQuestion: number;
};

export default function PanelPreguntas({
  loadQuestionList,
  indexQuestion,
}: BolasPreguntasProps) {
  return (
    <div className="h-3/5 w-full flex flex-row justify-center items-end pt-[8%] pb-5">
      <div className="h-full w-4/5 bg-[rgba(255,255,255,0.1)] rounded-[60px] flex flex-row justify-center items-center">
        <p className="text-5xl font-bold mx-[5%] text-center leading-normal">
          {indexQuestion + 1 + ". " + loadQuestionList[indexQuestion].content}
        </p>
      </div>
    </div>
  );
}
