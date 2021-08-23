import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const skills = [
  {
    id: "1",
    icon: <FontAwesomeIcon icon="code" size="2x" />,
    name: "Frontend",
    desc: "These client-side programming and framework languages are the ones that I have used in the projects that I have participated:",
    techs: [
      { id: "1", name: "HTML", percents: "90%" },
      { id: "2", name: "CSS", percents: "70%" },
      { id: "3", name: "JavaScript", percents: "70%" },
      { id: "4", name: "React", percents: "50%" },
      { id: "5", name: "Tailwind CSS", percents: "60%" },
      { id: "6", name: "Materialize", percents: "80%" },
    ],
  },
  {
    id: "2",
    icon: <FontAwesomeIcon icon="server" size="2x" />,
    name: "Backend",
    desc: "These server-side programming and framework languages are the ones that I have used in the projects that I have participated:",
    techs: [
      { id: "1", name: "PHP", percents: "80%" },
      { id: "2", name: "C#", percents: "50%" },
      { id: "3", name: "Python", percents: "30%" },
      { id: "4", name: "MySQL", percents: "60%" },
      { id: "5", name: "Visual Basic", percents: "70%" },
    ],
  },
  {
    id: "3",
    icon: <FontAwesomeIcon icon="swatchbook" size="2x" />,
    name: "Designer",
    desc: "These tools of models or sketches are the ones I have used in the projects that I have participated:",
    techs: [
      { id: "1", name: "Figma", percents: "80%" },
      { id: "2", name: "Adobe XD", percents: "70%" },
      { id: "3", name: "GIMP", percents: "70%" },
      { id: "4", name: "Inkscape", percents: "50%" },
      { id: "5", name: "Photoshop", percents: "60%" },
    ],
  },
];

export default skills;
