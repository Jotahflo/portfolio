function getDataHistoryLine(mdScreen, xlScreen) {
  let history = [
    {
      id: 1,
      year: "1995",
      desc: "I was born in the city of Antofagasta, Chile.",
      type: "card",
    },
    {
      id: 2,
      type: "verticalPoint",
    },
    {
      id: 3,
      year: "2013 - 2015",
      desc: "I obtained my middle technical accountant title, with which, I started working at CITIA Ltda.",
      type: "card",
    },
    {
      id: 4,
      type: "verticalPoint",
    },
    {
      id: 5,
      year: "2019 - 2020",
      desc: "I was given the possibility of worked as a PHP Full Stack developer in CITIA Ltda. and to participate in the Switch_OM project. In addition, I followed with my studies at INACAP University and obtained the engineering degree in Computing. ",
      type: "card",
    },
    {
      id: 6,
      type: "verticalPoint",
    },
    {
      id: 7,
      year: "2016 - 2018",
      desc: "While working in Citia Ltda; I enter to study the INACAP Technical Training Center and obtained the title of the programmer's analyst.",
      type: "card",
    },
    {
      id: 8,
      type: "verticalPoint",
    },
    {
      id: 9,
      year: "2021",
      desc: "I finished my work in CITIA Ltda. and I had to prepared with the new technologies, how: Reactjs or Vuejs. This allowed me, start working in the Integrated Project Management System (SIGP) project in IMAGEN S.A. as a Full Stack developer",
      type: "card",
    },
    {
      id: 10,
      type: "verticalPoint",
    },
    {
      id: 11,
      year: "2022",
      desc: "I finished my work in IMAGEN S.A. and I start of worked as a Front End Developer in AC Perforaciones S.A. and to participate in the Telemetria project.",
      type: "card",
    },
    {
      id: 12,
      type: "verticalPoint",
    },
    {
      id: 13,
      year: "2023 - Actual",
      desc: "I finished my work in AC Perforaciones S.A. and now I look for new opportunities to grow professionally. If you interested in my work, I invite you to contact me.",
      type: "card",
    },
  ];

  if (mdScreen) {
    history = [
      {
        id: 1,
        year: "1995",
        desc: "I was born in the city of Antofagasta, Chile.",
        type: "card",
      },
      {
        id: 2,
        type: "point",
      },
      {
        id: 3,
        year: "2013 - 2015",
        desc: "I obtained my middle technical accountant title, with which, I started working at CITIA Ltda.",
        type: "card",
      },
      {
        id: 4,
        type: "space",
      },
      {
        id: 5,
        type: "verticalPoint",
      },
      {
        id: 6,
        year: "2019 - 2020",
        desc: "I was given the possibility of worked as a PHP Full Stack developer in CITIA Ltda. and to participate in the Switch_OM project. In addition, I followed with my studies at INACAP University and obtained the engineering degree in Computing. ",
        type: "card",
      },
      {
        id: 7,
        type: "point",
      },
      {
        id: 8,
        year: "2016 - 2018",
        desc: "While working in Citia Ltda; I enter to study the INACAP Technical Training Center and obtained the title of the programmer's analyst.",
        type: "card",
      },
      {
        id: 9,
        type: "verticalPoint",
      },
      {
        id: 10,
        type: "space",
      },
      {
        id: 11,
        year: "2021",
        desc: "I finished my work in CITIA Ltda. and I had to prepared with the new technologies, how: Reactjs or Vuejs. This allowed me, start working in the Integrated Project Management System (SIGP) project in IMAGEN S.A. as a Full Stack developer",
        type: "card",
      },
      {
        id: 12,
        type: "point",
      },
      {
        id: 13,
        year: "2022",
        desc: "I finished my work in IMAGEN S.A. and I start of worked as a Front End Developer in AC Perforaciones S.A. and to participate in the Telemetria project.",
        type: "card",
      },
      {
        id: 14,
        type: "space",
      },
      {
        id: 15,
        type: "verticalPoint",
      },
      {
        id: 16,
        type: "space",
      },
      {
        id: 17,
        year: "2023 - Actual",
        desc: "I finished my work in AC Perforaciones S.A. and now I look for new opportunities to grow professionally. If you interested in my work, I invite you to contact me.",
        type: "card",
      },
    ];
  } else if (xlScreen) {
    history = [
      {
        id: 1,
        year: "1995",
        desc: "I was born in the city of Antofagasta, Chile.",
        type: "card",
      },
      {
        id: 2,
        type: "point",
      },
      {
        id: 3,
        year: "2013 - 2015",
        desc: "I obtained my middle technical accountant title, with which, I started working at CITIA Ltda.",
        type: "card",
      },
      {
        id: 4,
        type: "point",
      },
      {
        id: 5,
        year: "2016 - 2018",
        desc: "While working in Citia Ltda; I enter to study the INACAP Technical Training Center and obtained the title of the programmer's analyst.",
        type: "card",
      },
      {
        id: 6,
        type: "space",
      },
      {
        id: 7,
        type: "verticalPoint",
      },
      {
        id: 8,
        year: "2022",
        desc: "I finished my work in IMAGEN S.A. and I start of worked as a Front End Developer in AC Perforaciones S.A. and to participate in the Telemetria project.",
        type: "card",
      },
      {
        id: 9,
        type: "point",
      },
      {
        id: 10,
        year: "2021",
        desc: "I finished my work in CITIA Ltda. and I had to prepared with the new technologies, how: Reactjs or Vuejs. This allowed me, start working in the Integrated Project Management System (SIGP) project in IMAGEN S.A. as a Full Stack developer",
        type: "card",
      },
      {
        id: 11,
        type: "point",
      },
      {
        id: 12,
        year: "2019 - 2020",
        desc: "I was given the possibility of worked as a PHP Full Stack developer in CITIA Ltda. and to participate in the Switch_OM project. In addition, I followed with my studies at INACAP University and obtained the engineering degree in Computing. ",
        type: "card",
      },
      {
        id: 13,
        type: "verticalPoint",
      },
      {
        id: 14,
        type: "space",
      },
      {
        id: 15,
        year: "2023 - Actual",
        desc: "I finished my work in AC Perforaciones S.A. and now I look for new opportunities to grow professionally. If you interested in my work, I invite you to contact me.",
        type: "card",
      },
    ];
  }

  return history;
}

export default getDataHistoryLine;
