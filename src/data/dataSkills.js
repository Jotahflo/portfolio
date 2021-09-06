import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const skills = [
  {
    id: "1",
    icon: <FontAwesomeIcon icon="code" size="2x" />,
    name: "Frontend",
    desc: "These client-side programming and framework languages are the ones that I have used in the projects that I have participated:",
    techs: [
      { id: "1", name: "HTML", percents: "90%" },
      { id: "2", name: "CSS", percents: "75%" },
      { id: "3", name: "JavaScript", percents: "80%" },
      { id: "4", name: "React", percents: "70%" },
      { id: "5", name: "Tailwind CSS", percents: "75%" },
      { id: "6", name: "Materialize CSS", percents: "85%" },
    ],
  },
  {
    id: "2",
    icon: <FontAwesomeIcon icon="server" size="2x" />,
    name: "Backend",
    desc: "These server-side programming and framework languages are the ones that I have used in the projects that I have participated:",
    techs: [
      { id: "1", name: "PHP", percents: "85%" },
      { id: "2", name: "C#", percents: "50%" },
      { id: "3", name: "Python", percents: "30%" },
      { id: "4", name: "MySQL", percents: "75%" },
      { id: "5", name: "Visual Basic", percents: "85%" },
    ],
  },
  {
    id: "3",
    icon: <FontAwesomeIcon icon="swatchbook" size="2x" />,
    name: "Tools",
    desc: "These tools of models or sketches are the ones I have used in the projects that I have participated:",
    techs: [
      { id: "1", name: "Git", percents: "75%" },
      { id: "2", name: "Figma", percents: "85%" },
      { id: "3", name: "Adobe XD", percents: "70%" },
      { id: "4", name: "Unity", percents: "65%" },
    ],
  },
];

export default skills;
