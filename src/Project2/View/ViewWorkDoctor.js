import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookie from "cookie-universal";
import { useEffect } from "react";
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";

function ViewWorkDoctor() {
  const id = window.location.pathname.split("/").slice(-1)[0];
  const [doctor, setDoctor] = useState([]);
  const cookie = Cookie();
  const token = cookie.get("token");

  function getHours() {
    axios
      .post(
        `http://127.0.0.1:8000/api/showWorkingHoursToDoctore`,
        { ClinicDoctor_id: id },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((e) => setDoctor(e.data.data));
  }

  //for doctor and his hours
  useEffect(() => {
    getHours();
  }, []);

  async function del(id) {
    const confirmDelete = window.confirm(
      `${id} هل أنت متأكد من أنك تريد حذف هذا العنصر؟`
    );

    if (confirmDelete) {
      try {
        await axios
          .post(
            "http://127.0.0.1:8000/api/deleteWorkingHoursDoctorForClinic",
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
            getHours();
          });
      } catch (e) {}
    } else {
      alert("تم رفض الإجراء.");
    }
  }
  const show = doctor.map((doctor, i) => (
    // <div >
    <ul className=" mt-3 list-unstyled " key={i}>
      <li>
        من{doctor.startHour} الى {doctor.endHour} : {doctor.day.name}
        <span className="ms-3" onClick={() => del(doctor.id)}>
          <FaRegTrashAlt />
        </span>
      </li>
      {/* <li onClick={() => del(doctor.id)}>
          <FaRegTrashAlt />
      </li> */}
    </ul>
    //    </div>
  ));

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <Link to="/ViewClinic">
            <span className="close">
              {/* //onClick={onClose} */}
              &times;
            </span>
          </Link>
          <div>
            {doctor.length === 0 ? (
              <p className=" text-center fs-2 mt-5">لا يوجد محتوى</p>
            ) : (
              show
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewWorkDoctor;
