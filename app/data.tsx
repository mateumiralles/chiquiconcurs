import { Question, QuestionListByDiff, Solution } from "./model";

export const easyQuestionList: QuestionListByDiff = new QuestionListByDiff(0, [
  new Question("¿Cuál es la capital de Francia?", [
    new Solution("Madrid", false),
    new Solution("Berlín", false),
    new Solution("París", true),
    new Solution("Roma", false),
  ]),
  new Question("¿Cuántos lados tiene un triángulo?", [
    new Solution("3", true),
    new Solution("4", false),
    new Solution("5", false),
    new Solution("6", false),
  ]),
  new Question("¿Cuál es el planeta más grande del sistema solar?", [
    new Solution("Tierra", false),
    new Solution("Júpiter", true),
    new Solution("Marte", false),
    new Solution("Venus", false),
  ]),
  new Question("¿En qué continente se encuentra Egipto?", [
    new Solution("Asia", false),
    new Solution("África", true),
    new Solution("Europa", false),
    new Solution("América", false),
  ]),
  new Question("¿Cuál es el resultado de sumar 5 + 7?", [
    new Solution("10", false),
    new Solution("12", true),
    new Solution("14", false),
    new Solution("16", false),
  ]),
]);

export const midQuestionList: QuestionListByDiff = new QuestionListByDiff(0, [
  new Question('¿Cuál es el elemento químico con el símbolo "Na"?', [
    new Solution("Nitrógeno", false),
    new Solution("Sodio", true),
    new Solution("Neón", false),
    new Solution("Níquel", false),
  ]),
  new Question("¿Cuál es la capital de Australia?", [
    new Solution("Sídney", false),
    new Solution("Canberra", true),
    new Solution("Melbourne", false),
    new Solution("Brisbane", false),
  ]),
  new Question("¿Cuál es la moneda oficial de Japón?", [
    new Solution("Won", false),
    new Solution("Yuan", false),
    new Solution("Yen", true),
    new Solution("Ringgit", false),
  ]),
  new Question("¿En qué año se llevó a cabo la Revolución Francesa?", [
    new Solution("1776", false),
    new Solution("1789", true),
    new Solution("1804", false),
    new Solution("1821", false),
  ]),
  new Question("¿Cuál es el país más grande del mundo por superficie?", [
    new Solution("Rusia", true),
    new Solution("China", false),
    new Solution("Estados Unidos", false),
    new Solution("Canadá", false),
  ]),
]);

export const diffQuestionList: QuestionListByDiff = new QuestionListByDiff(0, [
  new Question(
    "¿Cuál es el elemento químico más abundante en la corteza terrestre?",
    [
      new Solution("Oxígeno", false),
      new Solution("Silicio", true),
      new Solution("Hierro", false),
      new Solution("Aluminio", false),
    ]
  ),
  new Question("¿Cuál es la capital de Australia?", [
    new Solution("Sídney", false),
    new Solution("Canberra", true),
    new Solution("Melbourne", false),
    new Solution("Brisbane", false),
  ]),
  new Question("¿Quién pintó la Mona Lisa?", [
    new Solution("Vincent van Gogh", false),
    new Solution("Pablo Picasso", false),
    new Solution("Leonardo da Vinci", true),
    new Solution("Michelangelo", false),
  ]),
  new Question("¿En qué año se llevó a cabo la Revolución Francesa?", [
    new Solution("1776", false),
    new Solution("1789", true),
    new Solution("1804", false),
    new Solution("1821", false),
  ]),
  new Question("¿Cuál es el país más grande del mundo por superficie?", [
    new Solution("Rusia", true),
    new Solution("China", false),
    new Solution("Estados Unidos", false),
    new Solution("Canadá", false),
  ]),
]);
