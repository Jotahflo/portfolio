function sortJSON(data, key, orden) {
  return data.sort(function (a, b) {
    var x = a[key],
      y = b[key];

    if (orden === "asc") {
      return x < y ? -1 : x > y ? 1 : 0;
    }

    if (orden === "desc") {
      return x > y ? -1 : x < y ? 1 : 0;
    }
    return null;
  });
}

function getDataHistoryLine(mdScreen, xlScreen) {
  let history = [
    {
      id: 1,
      year: "1995",
      desc: "I was born in the city of Antofagasta, Chile.",
      orderMD: 1,
      orderXL: 1,
    },
    {
      id: 2,
      year: "2013",
      desc: "I obtained my middle technical accountant title, with which, I started working at CITIA Ltda.",
      orderMD: 2,
      orderXL: 2,
    },
    {
      id: 3,
      year: "2016 - 2018",
      desc: "While working in Citia Ltda; I enter to study the INACAP Technical Training Center and obtained the title of the programmer's analyst.",
      orderMD: 4,
      orderXL: 3,
    },
    {
      id: 4,
      year: "2019",
      desc: "I was given the possibility of worked as a FullStack developer in CITIA Ltda. and to participate in the Switch_OM project. In addition, I followed with my studies at INACAP University and obtained the engineering degree in Computing. ",
      orderMD: 3,
      orderXL: 5,
    },
    {
      id: 5,
      year: "2021 - Presente",
      desc: "My work is finished in Citia Ltda. and now I look for new opportunities to grow professionally. If you interested in my work, I invite you to contact me.",
      orderMD: 5,
      orderXL: 4,
    },
  ];

  if (mdScreen) {
    sortJSON(history, "orderMD", "asc");
  } else if (xlScreen) {
    sortJSON(history, "orderXL", "asc");
  }

  return history;
}

export default getDataHistoryLine;
