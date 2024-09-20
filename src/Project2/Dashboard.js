import React from "react";
// import { Link } from "react-router-dom";
import {
  FaUserMd,
  FaUserInjured,
  FaDollarSign,
  FaCalendarAlt,
} from "react-icons/fa";

import CarddDash from "./Components/CardDash";

// import ListDoctors from "./Components/ListDoctors";
import Sidebar from "./Sidebar";
import Typesbutton from "./Components/Typesbutton";
import { Navbar } from "react-bootstrap";
// import List from "./Components/List";
function Dashboard() {
  const img = require("./Image/دوما.jpg");
  return (
    <> 
      
    <Navbar fixed="top" bg="white">
                <img style={{ width: "2.5%" }} src={img} alt=".." />
              </Navbar>
              <Sidebar />
      <div className="container">
        <div className="  d-flex justify-content-between align-items-center mb-3 mt-5 ">
          <div className=" list-unstyled">
            <Typesbutton name="اضافة طبيب" link="/App/Add" />
            <Typesbutton name="اضافة سكرتيرة " link="/AddResption" />
          </div>
          <p className=" fs-4">لوحة التحكم</p>
        </div>

        <div className="row mb-4">
          <CarddDash
            name="الأطباء"
            color="rgb(25,128,194)"
            icon={<FaUserMd />}
          />
          <CarddDash
            name="  المرضى"
            color="rgb(139,188,231)"
            icon={<FaUserInjured />}
          />
          <CarddDash
            name="  الحساب"
            color="rgb(251,192,92)"
            icon={<FaDollarSign />}
          />
          <CarddDash
            name="  المواعيد"
            color="rgb(43, 84, 130)"
            icon={<FaCalendarAlt />}
          />
        </div>
      </div>

      {/* <div className=" row mb-3 d-flex justify-content-evenly ">
        <div className="col-3  bg-white " style={{ width: "68%" }}></div>
        <div className="col-3 ">
          <ListDoctors />
        </div>
      </div>
      <div className=" row d-flex justify-content-between">
        <div className="col-2  bg-white " style={{ width: "48%" }}>
          {" "}
          <List />
        </div>
        <div className="col-2 bg-white" style={{ width: "48%" }}>
          {" "}
          <List />
        </div>
      </div> */}
    </>
  );
}

export default Dashboard;
