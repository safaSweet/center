import React from "react";
import { useState, useEffect } from "react";
// import AddForm from "./AddForm";
import "../Css/Card.css";
import Submit from "../Components/Submit";
import Cookies from "cookie-universal";
import axios from "axios";
function AddAppoint() {
  const idDoctorClinic = window.location.pathname.split("/").slice(-1)[0];
  // const idClinic = window.location.pathname.split('/')[window.location.pathname.split('/').length - 2];
  const cookies = Cookies();

  const token = cookies.get("token");
  const [patient, setPatient] = useState([]);
  const [form, setForm] = useState({
    patient_id: "",
    clinic_doctor_id: "",
    time: "",
    day_id: "",
    date: "",
  });

  //fetch patient
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/getAllPatient`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((e) => e.json())
      .then((e) => setPatient(e.data));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const selectedDayId = form.day_id;

    const validDayIds = ["1", "2", "3", "4", "5", "6", "7"];

    if (!validDayIds.includes(selectedDayId)) {
      console.log("خطأ: يجب تحديد يوم صحيح");
      return;
    }
    try {
      let res = axios.post(
        "http://127.0.0.1:8000/api/createQueueVisit",
        {
          patient_id: form.patient_id,
          clinic_doctor_id: idDoctorClinic,
          time: form.time,
          day_id: selectedDayId,
          date: form.date,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res);

      window.alert("تم اضافة الموعد بنجاح");
      setForm({
        patient_id: "",
        clinic_doctor_id: "",
        time: "",
        day_id: "",
        date: "",
      });
      // window.location.pathname = "/ListClinic";
    } catch (e) {
      console.log(e);
    }
  }

  function handlerchange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const show = patient.map((patient, i) => (
    <option key={i} value={patient.id}>
      {patient.f_name}
      {patient.l_name}
    </option>
  ));

  // const show_doctor=doctorClinic.map((u,i)=>(
  //   <option key={i} value={u.id} >
  //   {u.user.full_name}
  //   </option>)
  // );

  return (
    <>
      {/* <div className=" side-body"> */}
      <h4 className=" text-end">إضافة موعد</h4>
      <div className="cardForm">
        <form className="row " onSubmit={handleSubmit}>
          <div className="col " style={{ textAlign: " -webkit-right" }}>
            <div>
              <label htmlFor="e" className=" text-end">
                الوقت
              </label>
              <input
                id="e"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="الوقت"
                name="time"
                onChange={handlerchange}
                value={form.time}
              />

              <label htmlFor="time"> التاريخ</label>
              <input
                // required
                id="time"
                type="date"
                className=" w-75 mb-3 form-control text-end"
                placeholder=" الوقت"
                name="date"
                value={form.date}
                onChange={handlerchange}
              />
            </div>
          </div>

          <div className="col" style={{ textAlign: " -webkit-right" }}>
            <div>
              {/* <div className="col-5"> */}
              <label htmlFor="namePatient">المريض </label>
              <br />
              <select
                id="namePatient"
                className="p-2 m-3 w-75"
                value={form.patient_id}
                onChange={handlerchange}
                name="patient_id"
              >
                <option value="">اختر مريض </option>
                {show}
              </select>

              {/* <br /> */}
              <label> اليوم</label>

              <select
                name="day_id"
                value={form.day_id}
                onChange={handlerchange}
                className="p-2 m-3 w-75"
                style={{ borderRadius: "4px" }}
              >
                <option>اختر يوم</option>
                <option value="1">Sunday</option>
                <option value="2">Monday</option>
                <option value="3">Tuesday</option>
                <option value="4">Wednesday</option>
                <option value="5">Thursday</option>
                <option value="6">Friday</option>
                <option value="7">Saturday</option>
              </select>
            </div>
            <Submit />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddAppoint;
