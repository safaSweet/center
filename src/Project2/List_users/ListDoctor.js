import React from "react";

import List from "../Components/List";
import {  FaEllipsisV  } from "react-icons/fa";


function ListComponent() {
  return (
    <>
      <List
      plus=<FaEllipsisV/>
        path="getAllDoctor"
        view="/Doctors/ViewDoctor"//"/Doctors/ViewDoctor/:id"
        add=""
        edit="/Doctors/EditDoctor"//"/EditDoctor"
        del="deleteDoctore"
        name_button="اضافة طبيب"
        link_button="/AddDoctor"
        work="/Doctors/showReferralsToDoctor"
      />
    </>
  );
}
export default ListComponent;
