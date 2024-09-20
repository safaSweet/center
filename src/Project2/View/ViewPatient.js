import React from "react";
import { useState } from "react";
import Cookies from "cookie-universal";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Visit from "../Visit";
import Viewreferral2Patient from "./Viewreferral2Patient";

function ViewPatient() {
  const img = require("../Image/patient_male.png");

  const [patient, setPatient] = useState([]);
  const [typeEntity, setType_entity] = useState([]);

  const patient_id = window.location.pathname.split("/").slice(-1)[0];
  const cookies = Cookies();
  const token = cookies.get("token");

  //fetch info patient
  useEffect(() => {
    let res = axios
      .post(
        "http://127.0.0.1:8000/api/showPatientById",
        { patient_id },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then(
        (e) => {
          setPatient(e.data.data);
        }
        //
      );
  }, []);

  return (
    <>
      <div className=" row " style={{ marginTop: "54px" }}>
        <div className="col-4  text-center p-3 bg-white ">
          <img className="  w-50 mb-3" src={img} alt="" />
          <p className=" fs-4">
            <span>{patient.f_name}</span>
            <span> {patient.m_name} </span>
            <span> {patient.l_name} </span>
          </p>
          {/* <p>
           
            الجنس : <span> ذكر </span>
          </p> */}
          {/* <p>   
            العمر : <span>21 سنة </span>
          </p> */}
          {/* </div> */}
        </div>
        <div className="col-7 bg-white ms-3  text-end p-3 fs-5">
          <p>
            اسم الأم : <span>{patient.mother_name}</span>
          </p>
          {/* <p>
              الحالة الإجتماعية : <span>عزباء</span>
            </p> */}
          <p>
            العنوان : <span> {patient.address}</span>
          </p>
          <p>
            رقم الهاتف : <span>0999999999</span>
          </p>
          <p>
            الرقم الوطني : <span>932587125454</span>
          </p>
          <p>
            تاريخ الميلاد : <span>{patient.birthday}</span>
          </p>
        </div>
      </div>

      {/* visit */}

      <div className="  row p-4 bg-white mt-3" style={{ width: "95.2%" }}>
        {/* <div
          className=" col-3 text-center ms-2 mb-2"
          style={{ border: "1px solid #1980c2", borderRadius: "5px" }}
        >
          <Link to={`/Visit/${patient_id}`}>
            <p className="fs-4">
              الزيارة <span>1</span>
            </p>
          </Link>
          <p className=" fs-6" style={{ color: "lightgrey" }}>
            2.2.2023
          </p>
        </div> */}
        <Visit patient_id={patient_id} />
      </div>
      {/*Type entity */}

      <div className="  row p-4 bg-white mt-3" style={{ width: "95.2%" }}>
        <Viewreferral2Patient />
      </div>
    </>
  );
}

export default ViewPatient;
