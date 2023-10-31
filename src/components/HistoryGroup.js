import React, { Fragment } from "react";
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
          <Fragment>
            {data.type === "card" && (
              <div key={data.id} className="bg-gray-700 rounded-xl shadow-sm p-4 h-full w-full">
                <p className="mb-3 font-serif text-white text-2xl text-center">{data.year}</p>
                <p className="text-base text-gray-400">{data.desc}</p>
              </div>
            )}
            {data.type === "point" && <PointLine key={data.id} mdScreen={mdScreen} xlScreen={xlScreen} isVertical={false} />}
            {data.type === "verticalPoint" && <PointLine key={data.id} mdScreen={mdScreen} xlScreen={xlScreen} isVertical={true} />}
            {data.type === "space" && <Spaces key={data.id} mdScreen={mdScreen} xlScreen={xlScreen} />}
          </Fragment>
        );
      })}
    </div>
  );
};

const PointLine = ({ mdScreen, xlScreen, isVertical }) => {
  let classFlex = "";
  let classLine = "";

  if ((mdScreen || xlScreen) && isVertical) {
    classFlex = "flex flex-col items-center";
    classLine = "border border-2-2 border-opacity-50 border-red-600 h-5 shadow-sm";
  } else {
    classFlex = "flex flex-col md:flex-row items-center";
    classLine = "border border-2-2 border-opacity-50 border-red-600 h-5 md:h-0 md:w-5 shadow-sm";
  }

  return (
    <div className={classFlex}>
      <div className={classLine}></div>
      <div className="bg-red-600 shadow-sm w-6 h-6 rounded-full"></div>
      <div className={classLine}></div>
    </div>
  );
};

const Spaces = ({ mdScreen, xlScreen }) => {
  if (mdScreen) {
    return <div className="col-span-2"></div>;
  } else if (xlScreen) {
    return <div className="col-span-4"></div>;
  }

  return null;
};

export default HistoryGroup;
