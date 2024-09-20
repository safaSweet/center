import React, { useEffect, useState } from "react";

import "../Css/Modal.css";
import {
  FaRegTrashAlt,
  FaPlus,
  FaAngleRight,
  FaCalendarAlt,
  FaPlusCircle,
  FaCalendarPlus,
} from "react-icons/fa";

import axios from "axios";
import Cookies from "cookie-universal";
import { Link } from "react-router-dom";

function ListDoctors(props) {
  const [doctorClinic, setDoctorClinic] = useState([]);
  const cookie = Cookies();
  const token = cookie.get("token");
  const type = cookie.get("type");
  //  const[props,setPro]=useState();

  function get_doctors() {
    let res = axios
      .post(
        `http://127.0.0.1:8000/api/showDoctorForClinic`,
        { clinic_id: `${props.id}` },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((e) => {
        setDoctorClinic(e.data.data);
        // setPro(e.data.data)
      });
  }
  // عرض اطباء العيادة
  useEffect(() => {
    get_doctors();
  }, []);
  //delete
  async function del(id) {
    const confirmDelete = window.confirm(
      "هل أنت متأكد من أنك تريد حذف هذا العنصر؟"
    );

    if (confirmDelete) {
      try {
        let res = await axios
          .post(
            "http://127.0.0.1:8000/api/deleteClinicDoctor",
            // {method: 'Delete'},
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
            get_doctors();
          });
      } catch (e) {
        console.log("none");
      }
    } else {
      alert("تم رفض الإجراء.");
    }
  }
  //show doctors in clinic
  const doctorClini = doctorClinic.map((doctor, i) => (
    <tr className=" text-center" key={i}>
      <td>{doctor.user.full_name}</td>
      {type == "admin" && (
        <td>
          <Link to={`/addWorkDoctor/${doctor.id}`}>
            <FaPlus />
          </Link>
        </td>
      )}
      {type == "admin" && (
        <td>
          <span onClick={() => del(doctor.id)}>
            <FaRegTrashAlt />
          </span>
        </td>
      )}

      <td>
        <Link to={`/ViewQueueVisitDoctor/${doctor.id}`}>
          <FaCalendarAlt />
        </Link>
      </td>
      <td>
        <Link to={`/ViewQueueVisitDoctorNow/${doctor.id}`}>
          <FaCalendarAlt />
        </Link>
      </td>
      {type == "reception" && (
        <td>
          <Link to={`/AddApoint/${doctor.id}`}>
            <FaCalendarPlus />
          </Link>
        </td>
      )}
      {type == "reception" && (
        <td>
          <Link to={`/AddVisit/${doctor.id}`}>
            <FaPlusCircle />
          </Link>
        </td>
      )}
      <td className="app">
        <Link to={`/ViewWorkDoctor/${doctor.id}`}>
          <FaAngleRight />
        </Link>
      </td>
    </tr>
  ));

  return (
    <>
      {doctorClini}
      {/* {show_appoint} */}
    </>
  );
}

export default ListDoctors;
