import { useId } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const skills = [
  {
    id: "1",
    icon: <FontAwesomeIcon icon="code" size="2x" />,
    name: "Frontend",
    desc: "These client-side programming and framework languages are the ones that I have used in the projects that I have participated:",
    techs: [
      { id: 1, name: "HTML", percents: "90%" },
      { id: 2, name: "CSS", percents: "80%" },
      { id: 3, name: "SASS", percents: "60%" },
      { id: 4, name: "JavaScript", percents: "85%" },
      { id: 5, name: "TypeScript", percents: "75%" },
      { id: 6, name: "JQuery", percents: "70%" },
      { id: 7, name: "Reactjs", percents: "80%" },
      { id: 8, name: "Vuejs", percents: "90%" },
      { id: 9, name: "Tailwind CSS", percents: "70%" },
      { id: 10, name: "Materialize CSS", percents: "80%" },
      { id: 11, name: "Bootstrap CSS", percents: "90%" },
    ],
  },
  {
    id: "2",
    icon: <FontAwesomeIcon icon="server" size="2x" />,
    name: "Backend",
    desc: "These server-side programming and framework languages are the ones that I have used in the projects that I have participated:",
    techs: [
      { id: 1, name: "PHP", percents: "85%" },
      { id: 2, name: "C#", percents: "70%" },
      { id: 3, name: ".NET Core", percents: "60%" },
      { id: 4, name: "Python", percents: "40%" },
      { id: 5, name: "Nodejs", percents: "40%" },
      { id: 6, name: "MySQL", percents: "75%" },
      { id: 7, name: "SQL Server", percents: "70%" },
      { id: 8, name: "Visual Basic", percents: "85%" },
    ],
  },
  {
    id: "3",
    icon: <FontAwesomeIcon icon="swatchbook" size="2x" />,
    name: "Tools",
    desc: "These tools of models or sketches are the ones I have used in the projects that I have participated:",
    techs: [
      { id: 1, name: "Git", percents: "85%" },
      { id: 2, name: "Github", percents: "70%" },
      { id: 3, name: "Gitlab", percents: "75%" },
      { id: 4, name: "Azure Devops", percents: "80%" },
      { id: 5, name: "Figma", percents: "90%" },
      { id: 6, name: "Adobe XD", percents: "70%" },
      { id: 7, name: "Unity", percents: "65%" },
    ],
  },
];

export default skills;
