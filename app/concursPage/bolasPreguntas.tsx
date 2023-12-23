import { Question } from "../model";

type BolasPreguntasProps = {
  loadQuestionList: Question[];
  indexQuestion: number;
  wasItGuessed: boolean[];
};

export default function BolasPreguntas({
  loadQuestionList,
  indexQuestion,
  wasItGuessed,
}: BolasPreguntasProps) {
  return (
    <div className="h-20 w-full flex flex-row justify-evenly items-center  ">
      {loadQuestionList.map((_, i) => (
        <div
          key={i}
          className={`rounded-full flex items-center justify-center font-bold  h-12 w-12                 
      ${
        indexQuestion === i && (i + 1) % 3 == 0
          ? "h-[72px] w-[72px]  bg-black  border-yellow-500 border-4 text-2xl opacity-100"
          : indexQuestion === i
          ? "h-[72px] w-[72px]  bg-black  border-white border-[3px] text-2xl opacity-100"
          : indexQuestion > i
          ? wasItGuessed[i]
            ? " bg-green-700 opacity-100"
            : "text-lg bg-red-500"
          : (i + 1) % 3 == 0
          ? "border-yellow-500 border-4 opacity-90"
          : "text-lg bg-gray-500 opacity-50"
      }
      `}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}
