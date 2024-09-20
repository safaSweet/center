import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Css/Card.css";
import Submit from "../Components/Submit";
import Cookies from "cookie-universal";
import EditButton from "../Components/EditButton";
function EditPatient() {
  const cookie = Cookies();
  const token = cookie.get("token");
  const patient_id = window.location.pathname.split("/").slice(-1)[0];

  const [Name, setName] = useState("");
  const [lastName, setlastname] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [address, setAddress] = useState("");
  const [birth, setBirth] = useState("");
  const [num, setNum] = useState("");

  //fetch patient info
  useEffect(() => {
    let res = axios
      .post(
        "http://127.0.0.1:8000/api/showPatientById",
        { patient_id },

        { headers: { Authorization: "Bearer " + token } }
      )
      .then((e) => {
        setName(e.data.data.f_name);
        setlastname(e.data.data.l_name);
        setBirth(e.data.data.birthday);
        setFather(e.data.data.m_name);
        setNum(e.data.data.idintity_no);
        setMother(e.data.data.mother_name);
        setAddress(e.data.data.address);

        console.log(e.data.data);
      });
  }, []);

  //onChanges
  function handlerChange_first(e) {
    setName(e.target.value);
  }
  function handlerChange_last(e) {
    setlastname(e.target.value);
  }
  function handlerChange_father(e) {
    setFather(e.target.value);
  }
  function handlerChange_mother(e) {
    setMother(e.target.value);
  }
  function handlerChange_birth(e) {
    setBirth(e.target.value);
  }
  function handlerChange_num(e) {
    setNum(e.target.value);
  }

  function handlerChange_address(e) {
    setAddress(e.target.value);
  }

  //onSubmit

  async function handlrSubmit(e) {
    e.preventDefault();
    try {
      let res = await axios
        .post(
          `http://127.0.0.1:8000/api/updatePatient`,
          {
            id_patient: patient_id,
            f_name: Name,
            m_name: father,
            l_name: lastName,
            mother_name: mother,
            address: address,
            birthday: birth,
            idintity_no: num,
          },

          { headers: { Authorization: "Bearer " + token } }
        )
        .then((e) => console.log(e));

      window.location.pathname = "/ListPatient";
    } catch (error) {
      console.log("print ", error);
    }
  }
  return (
    <>
      <h4 className=" text-end">تعديل معلومات طبيب</h4>
      <div className="cardForm">
        <form className="row " onSubmit={handlrSubmit}>
          <div className="col" style={{ textAlign: " -webkit-right" }}>
            <div>
              <label htmlFor="mother">اسم الأم</label>
              <input
                id="mother"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="اسم الأم"
                onChange={handlerChange_mother}
                defaultValue={mother || ""}
                name="mother_name"
              />
              <label htmlFor="c5">تاريخ الميلاد</label>
              <input
                id="c5"
                type="date"
                className=" w-75 mb-3 form-control text-end"
                placeholder="تاريخ الميلاد"
                name="birthday"
                defaultValue={birth || ""}
                onChange={handlerChange_birth}
              />
              <label htmlFor="address">العنوان</label>
              <input
                id="address"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="العنوان"
                onChange={handlerChange_address}
                defaultValue={address || ""}
                name="address"
              />

              <EditButton />
            </div>
          </div>
          <div className="col " style={{ textAlign: " -webkit-right" }}>
            <div>
              <label htmlFor="f">الاسم الأول</label>
              <input
                id="f"
                type={"text"}
                className=" w-75 mb-3 form-control text-end"
                placeholder="الاسم الاول"
                onChange={handlerChange_first}
                defaultValue={Name || ""}
                // name="f_name"
              />
              <label htmlFor="s">الاسم الثاني</label>
              <input
                id="s"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="الاسم الثاني"
                onChange={handlerChange_father}
                defaultValue={father || ""}
                name="m_name"
              />

              <label htmlFor="l">الكنية</label>
              <input
                id="l"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="الكنية"
                onChange={handlerChange_last}
                defaultValue={lastName || ""}
                name="l_name"
              />
              <label htmlFor="l">الرقم الوطني</label>
              <input
                id="l"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="الرقم الوطني"
                onChange={handlerChange_last}
                defaultValue={num || ""}
                name="idintity_no"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditPatient;
