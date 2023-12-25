import { Question } from "../model";

type GridRespostesProps = {
  loadQuestionList: Question[];
  indexQuestion: number;
};

export default function GridRespuestas({
  loadQuestionList,
  indexQuestion,
}: GridRespostesProps) {
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

  return (
    <div className="grid grid-cols-2 h-2/5 w-4/5  gap-10 pb-[3%] pt-5">
      {loadQuestionList[indexQuestion].solutions.map((sol, i) => (
        <div
          key={i}
          className="border-2 border-[rgba(0,0,0,0)] bg-[rgba(255,255,255,0.1)] rounded-3xl flex justify-center items-center hover:border-white hover:scale-95 transition-all ease-in-out"
        >
          <p className="text-4xl font-bold text-center">
            {numberOfSol(i) + sol.content}
          </p>
        </div>
      ))}
    </div>
  );
}
