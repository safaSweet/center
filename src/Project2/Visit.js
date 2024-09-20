import React from "react";
import { useState } from "react";
import Cookies from "cookie-universal";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Visit() {
  const patient_id = window.location.pathname.split("/").slice(-1)[0];
  const cookies = Cookies();
  const token = cookies.get("token");
  const [visit, setVisit] = useState([]);
  //fetch Type visit to patient
  // console.log()
  useEffect(() => {
    let res = axios
      .post(
        `http://127.0.0.1:8000/api/showVisitForPatient`,
        {
          patient_id,
        },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((e) => {
        setVisit(e.data.data);
        console.log(e.data.data);
      });
  }, []);

  const show_visit = visit.map((u, i) => (
    <div className="  " key={i}>
      <p className=" text-end fs-5 p-3">2.2.2023</p>

      <div className="row text-center p-3">
        <span className="col">
          العيادة : <span>{u.clinic.name} </span>
        </span>

        <span className="col">
          اسم الطبيب : <span>{u.doctore.full_name}</span>
        </span>
        <span className="col">
          الزيارة القادمة : <span>{u.dateNextVisit}</span>
        </span>
      </div>
      <div className="text-end fw-bold">
        <p className=""> : التشخيص الطبي </p>

        <div
          className=" w-50 "
          style={{
            border: "1px solid grey",
            borderRadius: "5px",
            marginLeft: "40%",
          }}
        >
          ,njknjknk lllllll
          {u.medical_diagnosis}
        </div>
      </div>
      <p className="app">
        <Link to={`/AddTypeReferralToPatient/${u.id}`}>
          اضافة احالة لهذه الزيارة
        </Link>
      </p>
      <hr />
    </div>
  ));

  return <>{show_visit}</>;
}

export default Visit;
