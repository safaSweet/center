import React from "react";

import {
  FaUserMd,
  FaUserInjured,
  FaSignOutAlt,
  FaClinicMedical,
  FaRegAddressBook,
  FaUserNurse,
  FaBusinessTime,
  FaTools,
} from "react-icons/fa";

import HandlerLogout from "./handler/HandlerLogout";
import ListSidebar from "./Components/ListSidebar";
import "./Css/Sidebare.css";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import DropDirectioExample from "./Components/Drop_down";
import Mm from "./Components/Drop_down";
import Cookies from "cookie-universal";
import axios from "axios";
const Sidebar = () => {
  const [state, setstate] = useState(false);
  const cookies = Cookies();

  const type = cookies.get("type");
  const handleToggle = () => {
    setstate((current) => !current);
  };

  async function HandlerLogout() {
    const cookies = Cookies();
    const token = cookies.get("token");
    // async function handlLogout() {
    let res = await axios.post("http://127.0.0.1:8000/api/logout", null, {
      headers: { Authorization: "Bearer " + token },
    });
    // }
    cookies.remove("token");
    window.location.pathname = "/login";
  }
  return (
    <>
      <nav className="side-panel">
        <ul className="list-style-none ">
          <p className=" text-center mb-5 fs-5 " style={{ color: "white" }}>
            عيادات الخير
          </p>

          <li>
            <ListSidebar
              name="العيادات"
              link="/ListClinic"
              icon=<FaClinicMedical />
            />
          </li>

          <li>
            <ListSidebar name=" الأطباء" link="/Doctors" icon=<FaUserMd /> />
          </li>

          <li>
            <ListSidebar
              name=" السكرتاريا"
              link="/ListSecretary"
              icon=<FaUserNurse />
            />
            {/* //App2/ListSecretary */}
          </li>

          <li>
            <ListSidebar
              name=" المرضى"
              link="/ListPatient"
              icon=<FaUserInjured />
            />
          </li>

          <li>
            <ListSidebar
              name=" بروفايلي"
              link="/Profile"
              icon=<FaRegAddressBook />
            />
          </li>

          {/* {type == "admin" && ( */}
            <li>
              <Mm
                name=" التقارير"
                name1="  تقارير الزيارات"
                link1="/GetReportVisit"
                name2=" تقارير الاحالات"
                link2="/GetReportReferral"
              />
            </li>
          {/* )} */}
          {type == "reception" && (
            <Mm
              name="الإحالات"
              name1=" جهات الإحالة"
              link1="/ListReferral"
              name2=" الإحالات"
              link2="/ListTypeReferral"
            />
          )}

          {/* <li>
            <ListSidebar name=' تسجيل الخروج'  icon= <FaSignOutAlt />>{HandlerLogout}</ListSidebar>
             
            </li> */}
          <br />
          <br />
          <br />
          <br />
          <li>
            <Mm
              name="الإعدادات"
              name1=" اعادة خدمة موظف"
              link1="/startServiceUser"
              name2="إنهاء خدمة موظف"
              link2="/endServiceUser"
              name3="ضبط كلمة المرور"
              link3="/ChangePassword"
              icon={<FaTools />}
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
{
  /* <span type="button">
<span>{props.name}</span>
{props.icon}
</span> */
}
