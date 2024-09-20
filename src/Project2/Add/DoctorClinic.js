import React, { useState } from "react";
import Submit from "../Components/Submit";
import Cookies from "cookie-universal";

import { FetchAllDoctors } from "../Api/FetchAllDoctors";
import { FetchAllClinic } from "../Api/FetchAllClinic";
import axios from "axios";
function DoctorClinic() {
  const style = " col-5";
  const style1 = "p-2 m-3 w-50";

  const cookies = Cookies();

  const token = cookies.get("token");

  const [form, setForm] = useState({
    clinic_id: "",
    doctor_id: "",
  });

  function handlrChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handlrSubmit(e) {
    e.preventDefault();
    let res = await axios.post(
      "http://127.0.0.1:8000/api/addClinicDoctor",
      {
        clinic_id: form.clinic_id,
        doctor_id: form.doctor_id,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    window.location.pathname = "/ListClinic";
  }

  return (
    <>
      <div className="cardd ">
        <form onSubmit={handlrSubmit}>
          <div
            className="row justify-content-center align-items-center text-end"
            style={{ marginTop: "15%" }}
          >
            <div className=" col-1">
              <Submit />
            </div>
            <div className={style}>
              <label>العيادات</label>
              <br />
              <select
                required
                name="clinic_id"
                className={style1}
                onChange={handlrChange}
                style={{ borderRadius: "4px" }}
              >
                <option value="">اختر عيادة</option>
                <FetchAllClinic />
              </select>
            </div>

            <div className={style}>
              <label>الأطباء</label>
              <br />
              <select
                required
                name="doctor_id"
                className={style1}
                onChange={handlrChange}
                style={{ borderRadius: "4px" }}
              >
                <option value="">اختر طبيب</option>
                <FetchAllDoctors /> {/* {options} */}
              </select>
            </div>
            <br />
          </div>
        </form>
      </div>
    </>
  );
}

export default DoctorClinic;
