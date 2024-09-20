import React from "react";

import axios from "axios";
import { useState } from "react";
import Cookies from "cookie-universal";
import Submit from "../Components/Submit";
import FetchAllPatient from "../Api/FetchAllPatient";
function AddVisite() {
  const cookies = Cookies();

  const token = cookies.get("token");
  const id = window.location.pathname.split("/").slice(-1)[0];

  const [form, setForm] = useState({
    medical_diagnosis: "",
    patient_id: "",
    dateNextVisit: "",
  });

  function handlrChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handlrSubmit(e) {
    e.preventDefault();

    try {
      let res = await axios.post(
        "http://127.0.0.1:8000/api/createVisitToPatient",

        {
          clinic_doctor_id: id,
          medical_diagnosis: form.medical_diagnosis,
          patient_id: form.patient_id,
          dateNextVisit: form.dateNextVisit,
        },

        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      window.alert("تمت االاضافة  بنجاح");
      setForm({
        medical_diagnosis: "",

        dateNextVisit: "",
      });
      // window.location.pathname = "/ListClinic";
      console.log(res);
    } catch (e) {}
  }

  return (
    <>
      <h4 className=" text-end">إضافة زيارة</h4>
      <div className="cardForm">
        <form className="row " onSubmit={handlrSubmit}>
          <div className="col " style={{ textAlign: " -webkit-right" }}>
            <div className="">
              <label>المرضى </label>
              <br />
              <select
                required
                name="patient_id"
                // className={style1}
                onChange={handlrChange}
                style={{ borderRadius: "4px" }}
              >
                <option value="">اختر مريض</option>
                <FetchAllPatient />
              </select>
            </div>
            <br />
            <br />
            <div className="">
              <label htmlFor="e" className=" text-end">
                التشخيص
              </label>
              <textarea
                required
                name="medical_diagnosis"
                id="e"
                type="text"
                className=" w-50 mb-3 form-control text-end"
                placeholder="التشخيص"
                onChange={handlrChange}
              />
            </div>
            <div className="">
              <label htmlFor="visit" className=" text-end">
                الزيارة القادمة
              </label>
              <input
                required
                name="dateNextVisit"
                id="visit"
                type="date"
                className=" w-50 mb-3 form-control text-end"
                placeholder="الزيارة القادمة"
                onChange={handlrChange}
              />
            </div>
            <Submit />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddVisite;
