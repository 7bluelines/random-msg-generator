// this function takes in an array as an argument and returns a random number that corresponds to the index of the array.
const randomNum = (arr) => {
  num = Math.floor(Math.random() * arr.length);
  return num;
};

//function to generate a random number for the language, field, and skill index from the predefined array 'toInsert', and returns them in an object.
const getLanguage = () => {
  let languageIndex = randomNum(toInsert);
  let fieldIndex = randomNum(toInsert[languageIndex][1]);
  let getField = function () {
    return toInsert[languageIndex][1][fieldIndex][0];
  };
  let skillIndex = randomNum(toInsert[languageIndex][1][fieldIndex][1]);
  let getSkill = function () {
    return toInsert[languageIndex][1][fieldIndex][1][skillIndex];
  };
  return {
    getLanguageResult: toInsert[languageIndex][0],
    getField: getField,
    getSkill: getSkill,
  };
};

// function to return a random message tailored to the language, field, and skill specified by the getLanguage(), getField(), and getSkill() functions.
const message = () => {
  let result = getLanguage();
  let messageArr = [
    `${
      result.getLanguageResult
    } is a popular language for ${result.getField()}. To succeed in this area, you should have skills in ${result.getSkill()}.`,
    `If you're interested in ${result.getField()}, ${
      result.getLanguageResult
    } is a must-learn language. Make sure to have a solid understanding of ${result.getSkill()}.`,
    `${
      result.getLanguageResult
    } is a versatile language that can be used for ${result.getField()}. To become proficient in this area, you'll need skills in ${result.getSkill()}.`,
    `${result.getField()} is a popular area that utilizes ${
      result.getLanguageResult
    }. To become successful in this field, you'll need expertise in ${result.getSkill()}.`,
    `${
      result.getLanguageResult
    } is an excellent choice for ${result.getField()}. To excel in this area, you'll need knowledge of ${result.getSkill()}.`,
  ];
  return messageArr[randomNum(messageArr)];
};

// This array of arrays stores the possible values for the placeholders in the string interpolations of messageArr.
const toInsert = [
  [
    "C++",
    [
      [
        "Game development",
        [
          "3D graphics",
          "physics engine development",
          "optimization techniques",
        ],
      ],
      [
        "Operating systems",
        ["system-level programming", "memory management", "multi-threading"],
      ],
      [
        "High-performance computing",
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
        "Enterprise software development",
        ["object-oriented design", "database management", "web development"],
      ],
      [
        "Android app development",
        ["mobile development", "user interface design", "Android SDK"],
      ],
      [
        "Financial applications",
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
        "Web development",
        [
          "ASP.NET",
          "web services",
          "front-end development (HTML/CSS/JavaScript)",
        ],
      ],
      [
        "Game development",
        ["Unity game engine", "3D modeling", "shader programming"],
      ],
    ],
  ],
  [
    "JavaScript",
    [
      [
        "Web development",
        [
          "front-end development (HTML/CSS/JavaScript)",
          "web frameworks (React, Angular, Vue)",
          "web APIs",
        ],
      ],
      [
        "Server-side development",
        ["Node.js", "RESTful APIs", "database integration"],
      ],
      [
        "Desktop application development",
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
        "Web development",
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
        "Web development",
        [
          "Play framework",
          "front-end frameworks (React, Angular, Vue)",
          "Database integration",
        ],
      ],
      [
        "Database integration",
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
