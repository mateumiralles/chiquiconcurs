import { Question, Solution } from "../model";

const midQuestionsList: Question[] = [
  new Question(1, "¿Cuál es la capital de Australia?", [
    new Solution("Sídney", false),
    new Solution("Melbourne", false),
    new Solution("Canberra", true),
    new Solution("Brisbane", false),
  ]),

  new Question(1, "¿Cuántos elementos químicos hay en la tabla periódica?", [
    new Solution("92", false),
    new Solution("108", false),
    new Solution("118", true),
    new Solution("128", false),
  ]),

  new Question(1, "¿Cuál es el río más largo del mundo?", [
    new Solution("Río Amazonas", false),
    new Solution("Río Nilo", true),
    new Solution("Río Yangtsé", false),
    new Solution("Río Misisipi", false),
  ]),

  new Question(
    1,
    "¿En qué año se firmó la Declaración de Independencia de Estados Unidos?",
    [
      new Solution("1773", false),
      new Solution("1776", true),
      new Solution("1789", false),
      new Solution("1799", false),
    ],
  ),

  new Question(1, "¿Cuál es el metal más abundante en la corteza terrestre?", [
    new Solution("Oro", false),
    new Solution("Hierro", false),
    new Solution("Cobre", false),
    new Solution("Aluminio", true),
  ]),

  new Question(1, "¿Qué país tiene la forma de una bota?", [
    new Solution("España", false),
    new Solution("Italia", true),
    new Solution("Grecia", false),
    new Solution("Francia", false),
  ]),

  new Question(1, "¿Cuál es la obra más famosa de Leonardo da Vinci?", [
    new Solution("El Grito", false),
    new Solution("La Mona Lisa", true),
    new Solution("El Nacimiento de Venus", false),
    new Solution("Guernica", false),
  ]),

  new Question(1, "¿En qué año llegó el hombre a la Luna por primera vez?", [
    new Solution("1965", false),
    new Solution("1969", true),
    new Solution("1975", false),
    new Solution("1982", false),
  ]),

  new Question(1, "¿Cuál es la montaña más alta del mundo?", [
    new Solution("Monte Everest", true),
    new Solution("Monte Kilimanjaro", false),
    new Solution("Monte McKinley", false),
    new Solution("Monte Aconcagua", false),
  ]),

  new Question(1, "¿Quién escribió 'Cien años de soledad'?", [
    new Solution("Gabriel García Márquez", true),
    new Solution("Pablo Neruda", false),
    new Solution("Isabel Allende", false),
    new Solution("Mario Vargas Llosa", false),
  ]),

  new Question(1, "¿Cuántos huesos tiene el cuerpo humano?", [
    new Solution("216", false),
    new Solution("212", false),
    new Solution("214", false),
    new Solution("206", true),
  ]),

  new Question(1, "¿Cuál es el metal líquido a temperatura ambiente?", [
    new Solution("Hierro", false),
    new Solution("Oro", false),
    new Solution("Mercurio", true),
    new Solution("Aluminio", false),
  ]),

  new Question(1, "¿En qué continente se encuentra Egipto?", [
    new Solution("Asia", false),
    new Solution("África", true),
    new Solution("Europa", false),
    new Solution("América", false),
  ]),

  new Question(
    1,
    "¿Cuántos jugadores conforman un equipo de fútbol en el campo?",
    [
      new Solution("9", false),
      new Solution("11", true),
      new Solution("13", false),
      new Solution("15", false),
    ],
  ),

  new Question(1, "¿Cuál es la moneda oficial de Japón?", [
    new Solution("Yuan", false),
    new Solution("Won", false),
    new Solution("Yen", true),
    new Solution("Ringgit", false),
  ]),

  new Question(1, "¿Cuántos continentes hay en el mundo?", [
    new Solution("5", false),
    new Solution("6", true),
    new Solution("7", false),
    new Solution("4", false),
  ]),

  new Question(1, "¿Cuál es el componente principal del aire que respiramos?", [
    new Solution("Nitrógeno", true),
    new Solution("Oxígeno", false),
    new Solution("Dióxido de carbono", false),
    new Solution("Argón", false),
  ]),

  new Question(1, "¿Cuántos minutos tiene una hora?", [
    new Solution("50", false),
    new Solution("60", true),
    new Solution("70", false),
    new Solution("80", false),
  ]),

  new Question(1, "¿En qué año se inauguró la Torre Eiffel?", [
    new Solution("1885", false),
    new Solution("1889", true),
    new Solution("1895", false),
    new Solution("1901", false),
  ]),

  new Question(1, "¿Cuál es el océano más pequeño del mundo?", [
    new Solution("Océano Atlántico", false),
    new Solution("Océano Índico", false),
    new Solution("Océano Pacífico", false),
    new Solution("Océano Ártico", true),
  ]),
];
export default midQuestionsList;
