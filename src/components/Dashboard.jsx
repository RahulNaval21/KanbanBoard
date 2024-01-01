import React from "react";
import { useSelector } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import "../styles/Dashboard.css";
import Card from "../components/Card";
import { GiCycle } from "react-icons/gi";
import {
  FcCancel,
  FcBusinessman,
  FcDoughnutChart,
  FcHighPriority,
} from "react-icons/fc";
import { LuSignalLow, LuSignalMedium, LuSignalHigh } from "react-icons/lu";
import { TbMoodEmpty } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";

import { Rj } from "../rj/rj";
const Dashboard = () => {
  const { dataSelected } = useSelector((state) => state.dataSelectSlice);

  return (
    dataSelected && (
      <div className="container" style={{ justifyContent: "space-evenly" }}>
        {dataSelected.map((element, index) => {
          return (
            <>
              <div
                key={index}
                className="dashboard"
                style={{ backgroundColor: "whitesmoke" }}
              >
                <div className="cardHeading1">
                  <div
                    className="sideView1"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <span>
                      {(() => {
                        if (element[index].title === Rj[0].status[0].stat) {
                          return <FcDoughnutChart />;
                        } else {
                          if (element[index].title === Rj[0].status[1].stat) {
                            return <GiCycle />;
                          }
                          if (element[index].title === Rj[0].status[2].stat) {
                            return <FcCancel />;
                          }
                          if (element[index].title === Rj[0].priority[0].prio) {
                            return <TbMoodEmpty />;
                          }
                          if (element[index].title === Rj[0].priority[1].prio) {
                            return <LuSignalLow />;
                          }
                          if (element[index].title === Rj[0].priority[2].prio) {
                            return <LuSignalMedium />;
                          }
                          if (element[index].title === Rj[0].priority[3].prio) {
                            return <LuSignalHigh />;
                          }
                          if (element[index].title === Rj[0].priority[4].prio) {
                            return <FcHighPriority />;
                          } else {
                            return <FcBusinessman />;
                          }
                        }
                      })()}
                      {element[index].title} {element[index].value.length}
                    </span>
                  </div>
                  <div className="sideView2">
                    <BsPlusLg />
                    <span style={{ letterSpacing: "2px" }}>
                      <BsThreeDots />
                    </span>
                  </div>
                </div>
                <div className="selectList">
                  {element[index]?.value?.map((element, ind) => {
                    return (
                      <Card
                        id={element.id}
                        title={element.title}
                        tags={element.tag}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default Dashboard;
