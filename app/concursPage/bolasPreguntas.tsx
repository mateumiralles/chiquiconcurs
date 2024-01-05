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
    <div className="flex h-20 w-full flex-row items-center justify-evenly  ">
      {loadQuestionList.map((_, i) => (
        <div
          key={i}
          className={`flex h-12 w-12 items-center justify-center  rounded-full font-bold                 
      ${
        indexQuestion === i && (i + 1) % 3 == 0
          ? "h-[72px] w-[72px]  border-4  border-yellow-500 bg-black text-2xl opacity-100"
          : indexQuestion === i
            ? "h-[72px] w-[72px]  border-[3px]  border-white bg-black text-2xl opacity-100"
            : indexQuestion > i
              ? wasItGuessed[i]
                ? " bg-green-700 opacity-100"
                : "bg-red-500 text-lg"
              : (i + 1) % 3 == 0
                ? "border-4 border-yellow-500 opacity-90"
                : "bg-gray-500 text-lg opacity-50"
      }
      `}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}
