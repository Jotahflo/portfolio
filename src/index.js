import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Layout from "./Layout";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faMouse,
  faArrowUp,
  faArrowDown,
  faBriefcase,
  faEnvelope,
  faCode,
  faServer,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faUser,
  faMouse,
  faArrowUp,
  faArrowDown,
  faBriefcase,
  faEnvelope,
  faCode,
  faServer,
  faSwatchbook
);

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  root
);

reportWebVitals();
