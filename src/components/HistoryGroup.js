import React from "react";
import getDataHistoryLine from "../data/dataHistory";
import { useMediaQuery } from "react-responsive";

const HistoryGroup = () => {
  const mdScreen = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const xlScreen = useMediaQuery({ minWidth: 1440 });
  const history = getDataHistoryLine(mdScreen, xlScreen);

  return (
    <div className="grid grid-cols-1 auto-rows-auto grid-cols-history-3 grid-cols-history-5 justify-items-center">
      {history.map((data) => {
        return (
          <>
            <div
              key={data.id}
              className={"bg-gray-700 rounded-xl shadow-sm p-4 h-full w-full"}
            >
              <p className="mb-3 font-serif text-white text-2xl text-center">
                {data.year}
              </p>
              <p className="text-base text-gray-400">{data.desc}</p>
            </div>
            <Spaces
              idHistory={data.id}
              position="medioDiv"
              mdScreen={mdScreen}
              xlScreen={xlScreen}
            />
            <PointLine
              idHistory={data.id}
              mdScreen={mdScreen}
              xlScreen={xlScreen}
            />
            <Spaces
              idHistory={data.id}
              position="finalDiv"
              mdScreen={mdScreen}
              xlScreen={xlScreen}
            />
          </>
        );
      })}
    </div>
  );
};

const PointLine = (props) => {
  let classFlex = "";
  let classLine = "";

  if (
    (props.mdScreen && (props.idHistory === 2 || props.idHistory === 3)) ||
    (props.xlScreen && props.idHistory === 3)
  ) {
    classFlex = "flex flex-col items-center";
    classLine =
      "border border-2-2 border-opacity-50 border-red-600 h-5 shadow-sm";
  } else {
    classFlex = "flex flex-col md:flex-row items-center";
    classLine =
      "border border-2-2 border-opacity-50 border-red-600 h-5 md:h-0 md:w-5 shadow-sm";
  }

  if (
    (!props.xlScreen && props.idHistory === 5) ||
    (props.xlScreen && props.idHistory === 4)
  ) {
    return null;
  }

  return (
    <div className={classFlex}>
      <div className={classLine}></div>
      <div className="bg-red-600 shadow-sm w-6 h-6 rounded-full"></div>
      <div className={classLine}></div>
    </div>
  );
};

const Spaces = (props) => {
  if (props.position === "medioDiv") {
    if (props.mdScreen && props.idHistory === 2) {
      return <div className={"col-span-2"}></div>;
    } else if (props.xlScreen && props.idHistory === 3) {
      return <div className={"col-span-4"}></div>;
    }
  } else if (props.position === "finalDiv") {
    if ((props.mdScreen || props.xlScreen) && props.idHistory === 3) {
      return <div className={"col-span-2"}></div>;
    }
  }

  return null;
};

export default HistoryGroup;
