import { Question, Solution } from "../model";

const diffQuestionsList: Question[] = [
  new Question(2, "¿Cuál es la velocidad de la luz en el vacío?", [
    new Solution("301,546 km/s", false),
    new Solution("332,642 km/s", false),
    new Solution("389,324 km/s", false),
    new Solution("299,792 km/s", true),
  ]),

  new Question(2, "¿Cuál es el elemento más abundante en el universo?", [
    new Solution("Oxígeno", false),
    new Solution("Hidrógeno", true),
    new Solution("Helio", false),
    new Solution("Carbono", false),
  ]),
  new Question(
    2,
    "¿Cuál es el material más conductor de electricidad a temperatura ambiente?",
    [
      new Solution("Cobre", false),
      new Solution("Aluminio", false),
      new Solution("Plata", true),
      new Solution("Grafeno", false),
    ],
  ),
  new Question(2, "¿Cuál es la partícula subatómica más masiva?", [
    new Solution("Quark", true),
    new Solution("Electrón", false),
    new Solution("Bosón W", false),
    new Solution("Bosón Higgs", false),
  ]),

  new Question(
    2,
    "¿Cuántos kilómetros cuadrados tiene la Gran Barrera de Coral?",
    [
      new Solution("50,000 km²", false),
      new Solution("100,000 km²", false),
      new Solution("200,000 km²", false),
      new Solution("350,000 km²", true),
    ],
  ),

  new Question(
    2,
    "¿Cuál es la molécula responsable del calentamiento global?",
    [
      new Solution("Dióxido de nitrógeno", false),
      new Solution("Dióxido de carbono", true),
      new Solution("Metano", false),
      new Solution("Óxido nitroso", false),
    ],
  ),

  new Question(2, "¿Cuántos años tarda la luz del Sol en llegar a la Tierra?", [
    new Solution("5 minutos", false),
    new Solution("8 minutos", true),
    new Solution("12 minutos", false),
    new Solution("15 minutos", false),
  ]),

  new Question(2, "¿Cuál es el material más blando conocido?", [
    new Solution("Yeso", false),
    new Solution("Calcita", false),
    new Solution("Talco", true),
    new Solution("Litio", false),
  ]),

  new Question(2, "¿Cuál es el desierto más grande del mundo?", [
    new Solution("Desierto del Sahara", true),
    new Solution("Desierto de Atacama", false),
    new Solution("Desierto de Gobi", false),
    new Solution("Desierto de Kalahari", false),
  ]),

  new Question(2, "¿Cuál es la especie de árbol más alta del mundo?", [
    new Solution("Secoya", true),
    new Solution("Eucalipto", false),
    new Solution("Pino", false),
    new Solution("Abeto", false),
  ]),

  new Question(
    2,
    "¿Cuál es la temperatura de congelación del nitrógeno líquido?",
    [
      new Solution("-78°C", false),
      new Solution("-150°C", false),
      new Solution("-196°C", true),
      new Solution("-273°C", false),
    ],
  ),

  new Question(2, "¿Cuál es el animal más venenoso del mundo?", [
    new Solution("Araña reclusa", false),
    new Solution("Serpiente taipán", false),
    new Solution("Medusa avispa de mar", false),
    new Solution("Rana dardo dorada", true),
  ]),

  new Question(2, "¿Cuántos dientes tiene un adulto humano promedio?", [
    new Solution("28", false),
    new Solution("32", true),
    new Solution("36", false),
    new Solution("40", false),
  ]),

  new Question(2, "¿Cuál es la ciudad más poblada del mundo?", [
    new Solution("Shanghái", false),
    new Solution("Mumbai", false),
    new Solution("Tokio", true),
    new Solution("Pekín", false),
  ]),

  new Question(2, "¿Cuál es la distancia promedio entre la Tierra y la Luna?", [
    new Solution("250,000 kilómetros", false),
    new Solution("384,400 kilómetros", true),
    new Solution("500,000 kilómetros", false),
    new Solution("600,000 kilómetros", false),
  ]),

  new Question(
    2,
    "¿Cuál es la velocidad de escape de la gravedad en la Tierra?",
    [
      new Solution("25,000 km/s", false),
      new Solution("50,000 km/s", false),
      new Solution("100,000 km/s", false),
      new Solution("11,186 km/s", true),
    ],
  ),

  new Question(
    2,
    "¿Cuánto tiempo tarda la Tierra en dar una vuelta completa alrededor del centro de la Vía Láctea?",
    [
      new Solution("100 millones de años", false),
      new Solution("200 millones de años", false),
      new Solution("500 millones de años", false),
      new Solution("225 millones de años", true),
    ],
  ),
];

export default diffQuestionsList;
