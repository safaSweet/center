import React, { useEffect, useState } from "react";

import "../Css/Card.css";

import List from "../Components/List";
import { FaPlus } from "react-icons/fa";

// import { useContext } from "react";
// import { User } from "./Context/Context";
function ListSecretary() {
  // const [resption, setResption] = useState([]);
  // const context = useContext(User);
  // const token = context.auth.token;

  return (
    <>
    {/* <Typesbutton name="إضافة دوام عمل" link="/addWorkResption" /> */}
      <List
        path="getAllReception"
        view='/ListSecretary/viewSecretary' 
        add=""
        edit="/ListSecretary/updateResption"
        del="deleteReception"
        work="/ListSecretary/addWorkResption"
        name_button="اضافة سكرتيرة"
        link_button="/AddResption"
        plus=<FaPlus/>
      />
    </>
  );
}
export default ListSecretary;
