import axios from "axios";
import Cookies from "cookie-universal";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function ViewDoctor() {
  const [doctor, setDoctor] = useState([]);
  const id = window.location.pathname.split("/").slice(-1)[0];
  const img = require("../Image/images.png");

  const cookies = Cookies();

  const token = cookies.get("token");
  const ClinicDoctor_id = 2;
  useEffect(() => {
    axios
      .post(
        "http://127.0.0.1:8000/api/showWorkingHoursToDoctore",
        {
          ClinicDoctor_id,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((e) => console.log(e));
  }, []);

  useEffect(() => {
    axios
      .post(
        "http://127.0.0.1:8000/api/showDoctorById",
        { id },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((e) => setDoctor(e.data.data));
  }, []);

  return (
    <>
      {/* <div className=" row mb-4" style={{ marginTop: "6%" }}> */}
      <div className=" w-100 mb-4 text-end" style={{ marginTop: "6%" }}>
        <div className="row  bg-white p-2 justify-content-between ">
          <img className="col-4  " src={img} alt="" />
          <div className="col-7 text-end mt-5">
            <h4>{doctor.full_name} </h4>
            <br />
            <h4>{doctor.gender}</h4>
            <br />
            <h5>{doctor.medical_specialty}</h5>
            <br />

            <h5>{doctor.email}</h5>
            <br />
          </div>
        </div>
      </div>

      <div>
        <div className="   bg-white p-2">
          <h3 className=" text-end mb-5">المعلومات الشخصية</h3>

          <div className=" d-flex justify-content-between">
            <h5 style={{ marginTop: "18px" }}>
              تاريخ الميلاد <p>{doctor.birthday}</p>
            </h5>

            <h5 style={{ marginTop: "18px" }}>
              الجامعة<p>{doctor.university}</p>
            </h5>
            <h5 style={{ marginTop: "18px" }}>
              العنوان<p>{doctor.address}</p>
            </h5>
            <h5 style={{ marginTop: "18px" }}>
              اسم الأم<p>{doctor.mother_name}</p>
            </h5>
            <h5 style={{ marginTop: "18px" }}>
              الكنية<p>{doctor.last_name}</p>
            </h5>

            <h5 style={{ marginTop: "18px" }}>
              اسم الأب <p>{doctor.father_name}</p>
            </h5>
            <h5 style={{ marginTop: "18px" }}>
              الأسم الأول
              <p>{doctor.first_name}</p>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewDoctor;
