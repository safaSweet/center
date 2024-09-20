import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "cookie-universal";
import { Table } from "react-bootstrap";

import { FaEdit, FaTrashAlt, FaExchangeAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function GueueVisitForDoctor(props) {
  const id = window.location.pathname.split("/").slice(-1)[0];
  const cookie = Cookies();
  const token = cookie.get("token");
  const [appoint, setAppoint] = useState([]);

  async function getGueue() {
    let res = await axios
      .post(
        `http://127.0.0.1:8000/api/${props.path}`,
        {
          clinic_doctor_id: id, // استخدم قيمة doctor.id هنا
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((e) => {
        // console.log(e.data.data)
        setAppoint(e.data.data);
      });
  }

  useEffect(() => {
    getGueue();
  }, []);

  //delete
  async function del(id) {
    const confirmDelete = window.confirm(
      "هل أنت متأكد من أنك تريد حذف هذا العنصر؟"
    );

    if (confirmDelete) {
      let res = await axios
        .post(
          "http://127.0.0.1:8000/api/deleteQueueVisit",
          {
            id: id,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((e) => {
          console.warn(e);
          getGueue();
        });
    } else {
      alert("تم رفض الإجراء.");
    }
  }

  function change(id) {
    const confirmDelete = window.confirm(
      "هل أنت متأكد من أنك تريد القيام بهذا الاجراء؟"
    );

    if (confirmDelete) {
      axios
        .post(
          `http://127.0.0.1:8000/api/changStatusQueueVisi`,
          { id: id },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((e) => {
          console.log(e);
          console.warn(e);
          getGueue();
        });
    } else {
      alert("تم رفض الإجراء.");
    }
  }
  const show_appoint = appoint.map((appoint, i) => (
    <tr className=" text-center" key={i}>
      <td>{appoint.date}</td>
      <td>{appoint.time}</td>

      <td>{appoint.doctor.full_name}</td>
      <td>
        {appoint.patient.f_name} {appoint.patient.l_name}
      </td>
      <td onClick={() => del(appoint.id)}>
        <FaTrashAlt />
      </td>
      <td onClick={() => change(appoint.id)}>
        <FaExchangeAlt />
      </td>
      {/* <td>
        
        <Link to={`/EditQueueVisit/${appoint.id}`}>
          <FaEdit />
        </Link>
      </td> */}
    </tr>
  ));
  return (
    <>
      <div className="cardd">
        <p className=" text-end fs-2 mb-5 "> طابور الانتظار</p>
        <Table style={{ marginLeft: "73px", width: "80%" }}>
          <thead>
            <tr className=" text-center">
              <th>التاريخ</th>
              <th>الوقت</th>
              <th>الطبيب</th>
              <th>المريض</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{show_appoint}</tbody>
        </Table>
      </div>
    </>
  );
}

export default GueueVisitForDoctor;
