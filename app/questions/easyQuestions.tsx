import { Question, Solution } from "../model";

const easyQuestionsList: Question[] = [
  new Question(0, "¿Cuál es la capital de Francia?", [
    new Solution("Madrid", false),
    new Solution("Berlín", false),
    new Solution("París", true),
    new Solution("Roma", false),
  ]),

  new Question(0, "¿Cuál es el planeta más grande del sistema solar?", [
    new Solution("Marte", false),
    new Solution("Júpiter", true),
    new Solution("Venus", false),
    new Solution("Saturno", false),
  ]),

  new Question(0, "¿Cuál es el océano más grande del mundo?", [
    new Solution("Océano Atlántico", false),
    new Solution("Océano Pacífico", true),
    new Solution("Mar Mediterráneo", false),
    new Solution("Mar Rojo", false),
  ]),

  new Question(0, "¿Cuántas patas tiene un gato?", [
    new Solution("2", false),
    new Solution("4", true),
    new Solution("6", false),
    new Solution("8", false),
  ]),

  new Question(0, "¿En qué año comenzó el siglo XXI?", [
    new Solution("1999", false),
    new Solution("2000", true),
    new Solution("2001", false),
    new Solution("2010", false),
  ]),

  new Question(0, "¿Cuál es el color del cielo en un día despejado?", [
    new Solution("Rojo", false),
    new Solution("Azul", true),
    new Solution("Verde", false),
    new Solution("Amarillo", false),
  ]),

  new Question(0, "¿Cuál es el animal terrestre más grande?", [
    new Solution("León", false),
    new Solution("Jirafa", false),
    new Solution("Elefante africano", true),
    new Solution("Oso polar", false),
  ]),

  new Question(0, "¿Cuál es el resultado de sumar 5 + 7?", [
    new Solution("10", false),
    new Solution("12", true),
    new Solution("14", false),
    new Solution("15", false),
  ]),

  new Question(0, "¿Cuál es el principal ingrediente de la pizza margarita?", [
    new Solution("Queso", false),
    new Solution("Tomate", true),
    new Solution("Champiñones", false),
    new Solution("Jamón", false),
  ]),

  new Question(0, "¿Cuál es la capital de Estados Unidos?", [
    new Solution("Nueva York", false),
    new Solution("Washington D.C.", true),
    new Solution("Los Ángeles", false),
    new Solution("Chicago", false),
  ]),

  new Question(0, "¿Cuántos dedos tiene una mano?", [
    new Solution("4", false),
    new Solution("5", true),
    new Solution("6", false),
    new Solution("8", false),
  ]),

  new Question(0, "¿Cuál es el día después del sábado?", [
    new Solution("Lunes", false),
    new Solution("Domingo", true),
    new Solution("Miércoles", false),
    new Solution("Viernes", false),
  ]),

  new Question(0, "¿Cuál es el número pi?", [
    new Solution("3.14", true),
    new Solution("2.71", false),
    new Solution("1.62", false),
    new Solution("4.20", false),
  ]),

  new Question(0, "¿Cuál es el continente más grande?", [
    new Solution("Europa", false),
    new Solution("Asia", true),
    new Solution("África", false),
    new Solution("América", false),
  ]),

  new Question(0, "¿Cuál es el idioma oficial de Brasil?", [
    new Solution("Español", false),
    new Solution("Portugués", true),
    new Solution("Inglés", false),
    new Solution("Francés", false),
  ]),

  new Question(0, "¿Cuántos lados tiene un triángulo?", [
    new Solution("3", true),
    new Solution("4", false),
    new Solution("5", false),
    new Solution("6", false),
  ]),

  new Question(0, "¿Qué planeta es conocido como el 'Planeta Rojo'?", [
    new Solution("Venus", false),
    new Solution("Marte", true),
    new Solution("Júpiter", false),
    new Solution("Saturno", false),
  ]),

  new Question(0, "¿Cuántas estaciones del año hay?", [
    new Solution("2", false),
    new Solution("3", false),
    new Solution("4", true),
    new Solution("5", false),
  ]),

  new Question(0, "¿Quién escribió 'Romeo y Julieta'?", [
    new Solution("Charles Dickens", false),
    new Solution("William Shakespeare", true),
    new Solution("Jane Austen", false),
    new Solution("Mark Twain", false),
  ]),

  new Question(0, "¿Cuál es el resultado de restar 10 a 25?", [
    new Solution("5", false),
    new Solution("10", false),
    new Solution("15", true),
    new Solution("20", false),
  ]),
];

export default easyQuestionsList;
