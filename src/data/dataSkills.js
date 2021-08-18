import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faCode,
  faServer,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";

const iconAngleDown = <FontAwesomeIcon icon={faAngleDown} size="2x" />;
const iconAngleUp = <FontAwesomeIcon icon={faAngleUp} size="2x" />;
const iconCode = <FontAwesomeIcon icon={faCode} size="2x" />;
const iconServer = <FontAwesomeIcon icon={faServer} size="2x" />;
const iconSwatchbook = <FontAwesomeIcon icon={faSwatchbook} size="2x" />;

const skills = [
  {
    id: "1",
    icon: iconCode,
    name: "Frontend",
    years: "More than 2 years",
    arrowUp: iconAngleUp,
    arrowDown: iconAngleDown,
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
    icon: iconServer,
    name: "Backend",
    years: "More than 2 years",
    arrowUp: iconAngleUp,
    arrowDown: iconAngleDown,
    techs: [
      { id: "1", name: "PHP", percents: "80%" },
      { id: "2", name: "C#", percents: "50%" },
      { id: "3", name: "Python", percents: "30%" },
      { id: "4", name: "MySQL", percents: "60%" },
    ],
  },
  {
    id: "3",
    icon: iconSwatchbook,
    name: "Designer",
    years: "More than 1 year",
    arrowUp: iconAngleUp,
    arrowDown: iconAngleDown,
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
