
 // This function takes in an array as an argument and returns a random number that corresponds to the index of the array.
const randomNum = (arr) => {
  num = Math.floor(Math.random() * arr.length);
  return num;
};

 // This function generates a random number for the language, field, and skill index from the predefined array 'toInsert', stores field and skill in the global variables and returns language.
const getLanguage = () => {
  let languageIndex = randomNum(toInsert);
  let fieldIndex = randomNum(toInsert[languageIndex][1]);
  field = toInsert[languageIndex][1][fieldIndex][0];
  let skillIndex = randomNum(toInsert[languageIndex][1][fieldIndex][1]);
  skill = toInsert[languageIndex][1][fieldIndex][1][skillIndex];
  return toInsert[languageIndex][0];
};

let field;
let skill;

// This function stores an array of string interpolations, calls randomNum to randomly select one and returns it.
const message = () => {
  let messageArr = [
    `${getLanguage()} is a popular language for ${field}. To succeed in this area, you should have skills in ${skill}.`,
    `${getLanguage()} is a must-learn language if you're interested in ${field}. Make sure to have a solid understanding of ${skill}.`,
    `${getLanguage()} is a versatile language that can be used for ${field}. To become proficient in this area, you'll need skills in ${skill}.`,
    `${getLanguage()} is widely utilized in the popular area of ${field}. To become successful in this field, you'll need expertise in ${skill}.`,
    `${getLanguage()} is an excellent choice for ${field}. To excel in this area, you'll need knowledge of ${skill}.`,
  ];
  return messageArr[randomNum(messageArr)];
};

// This nested array stores the possible values for the placeholders in the string interpolations of messageArr.
const toInsert = [
  [
    "C++",
    [
      [
        "game development",
        [
          "3D graphics",
          "physics engine development",
          "optimization techniques",
        ],
      ],
      [
        "operating systems",
        ["system-level programming", "memory management", "multi-threading"],
      ],
      [
        "high-performance computing",
        [
          "parallel processing",
          "algorithm design and optimization",
          "numerical analysis",
        ],
      ],
    ],
  ],
  [
    "Java",
    [
      [
        "enterprise software development",
        ["object-oriented design", "database management", "web development"],
      ],
      [
        "Android app development",
        ["mobile development", "user interface design", "Android SDK"],
      ],
      [
        "financial applications",
        [
          "data analysis and processing",
          "concurrency control",
          "cyber security",
        ],
      ],
    ],
  ],
  [
    "C#",
    [
      [
        "Windows desktop development",
        [".NET framework", "Windows Forms or WPF", "database integration"],
      ],
      [
        "web development",
        [
          "ASP.NET",
          "web services",
          "front-end development (HTML/CSS/JavaScript)",
        ],
      ],
      [
        "game development",
        ["Unity game engine", "3D modeling", "shader programming"],
      ],
    ],
  ],
  [
    "JavaScript",
    [
      [
        "web development",
        [
          "front-end development (HTML/CSS/JavaScript)",
          "web frameworks (React, Angular, Vue)",
          "web APIs",
        ],
      ],
      [
        "server-side development",
        ["Node.js", "RESTful APIs", "database integration"],
      ],
      [
        "desktop application development",
        [
          "Electron framework",
          "desktop GUI design",
          "JavaScript libraries and frameworks",
        ],
      ],
    ],
  ],
  [
    "Python",
    [
      ["Data analysis", ["NumPy", "Pandas", "data visualization libraries"]],
      ["Machine learning", ["scikit-learn", "TensorFlow", "Keras"]],
      [
        "web development",
        [
          "web frameworks (Django, Flask)",
          "database integration",
          "front-end development (HTML/CSS/JavaScript)",
        ],
      ],
    ],
  ],
  [
    "Scala",
    [
      ["Big Data", ["Apache Spark", "Apache Kafka", "Data engineering"]],
      [
        "web development",
        [
          "Play framework",
          "front-end frameworks (React, Angular, Vue)",
          "Database integration",
        ],
      ],
      [
        "database integration",
        [
          "Apache Spark MLlib",
          "Deep learning frameworks",
          "Data preprocessing",
        ],
      ],
    ],
  ],
];

console.log(message());


