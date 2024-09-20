import axios from "axios";
import Cookies from "cookie-universal";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function ViewSecretary() {
  const [doctor, setDoctor] = useState([]);
  const [work, setWork] = useState([]);
  const id = window.location.pathname.split("/").slice(-1)[0];
  const img = require("../Image/resption.png");
  const img2 = require("../Image/5753.png_860.png");
  const cookies = Cookies();

  const token = cookies.get("token");

  useEffect(() => {
    let res = axios
      .post(
        "http://127.0.0.1:8000/api/showReceptionById ",
        { id },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((e) => setDoctor(e.data.data));
  }, []);

  function get_hoursResption() {
    let res = axios
      .post(
        "http://127.0.0.1:8000/api/showWoringHoursForReception ",
        { reception_id: id },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((e) =>
        // console.log(e.data.data)
        setWork(e.data.data)
      );
  }

  useEffect(() => {
    get_hoursResption();
  }, []);

  const deleteAction = (id) => {
    axios
      .post(
        `http://127.0.0.1:8000/api/deleteWoringHoursForReception`,
        { id: id },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((e) => {
        console.warn(e);
        get_hoursResption();
      });
  };

  const show_work = work.map((work, i) => (
    <p key={i}>
      <span> {work.day.name} </span>
      <span> من </span>
      <span> {work.startHour} </span>
      <span> إلى </span>
      <span>{work.endHour}</span>
      <span>
        {" "}
        <Link to={`/EditWorkResption/${id}`}>
          {" "}
          <FaEdit />
        </Link>
      </span>
      {/* /${work.id} */}
      <span onClick={() => deleteAction(work.id)}>
        {" "}
        <FaTrashAlt />
      </span>
    </p>
  ));
  // console.log(e.data.data)
  // const show = doctor.map((doctor,i) =>

  //   <h4>{doctor.full_name} </h4>

  // )

  return (
    <>
      <div className=" row mb-4" style={{ marginTop: "6%" }}>
        <div className=" col-8">
          <div className="row  bg-white p-2 justify-content-between ">
            <img className="col-4  " src={img} alt="" />
            <div className="col-7 text-end mt-5">
              <h4>{doctor.full_name} </h4>
              <br />
              <h4>أنثى </h4>
              <br />

              <h5>0999999999</h5><br/>
              <h5>{doctor.email}</h5>
              <br />
            </div>
          </div>
        </div>
        <div
          className="col-3  bg-white text-center "
          style={{ overflow: "auto", height: "307px", marginLeft: "6.7%" }}
        >
          <img src={img2} alt="" style={{ width: "60%" }} />
          <h5 className="m-3">أيام العمل</h5>

          {show_work}
        </div>
      </div>
      <div>
        <div className="   bg-white p-2">
          <h3 className=" text-end mb-5">المعلومات الشخصية</h3>

          <div className=" d-flex justify-content-between ">
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

export default ViewSecretary;
