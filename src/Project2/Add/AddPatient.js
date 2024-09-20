import React from "react";
import { useState } from "react";
import Cookies from "cookie-universal";
import Submit from "../Components/Submit";
import axios from "axios";
function AddPatient() {
  const cookies = Cookies();
  const token = cookies.get("token");

  const [form, setForm] = useState({
    f_name: "",
    m_name: "",
    l_name: "",
    mother_name: "",
    father_name: "",
    address: "",
    birthday: "",
    phone: "",
    email: "",
    password: "",
    university: "",
    graduate_daye: "",
    idintity_no: "",
    gender: "",
  });

  function handlrChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handlrSubmit(e) {
    console.log("first");
    e.preventDefault();

    try {
      let res = await axios.post(
        "http://127.0.0.1:8000/api/addPatient",

        {
          f_name: form.f_name,
          m_name: form.m_name,
          l_name: form.l_name,
          mother_name: form.mother_name,
          address: form.address,
          birthday: form.birthday,
          idintity_no: form.idintity_no,

          // phone: form.phone,
          // email: form.email,
          // password: form.password,
          // university: form.university,
          // graduate_date: form.graduate_daye,

          // type:"doctor",
          // gender:form.gender
        },

        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log("subit", res);
      window.alert("تمت اضافة المستخدم بنجاح");
      window.location.pathname = "/ListPatient";
    } catch (error) {
      console.log("print ", error);
    }
  }

  return (
    <>
      {/* <div className=" side-body"> */}

      <h4 className=" text-end">إضافة مريض</h4>
      <form className="row cardForm " onSubmit={handlrSubmit}>
        <div className="col " style={{ textAlign: " -webkit-right" }}>
          <div>
            <label htmlFor="sp">العنوان</label>
            <input
              required
              id="sp"
              type="text"
              className=" w-75 mb-3 form-control text-end"
              placeholder="العنوان"
              onChange={handlrChange}
              value={form.address}
              name="address"
            />
            <label htmlFor="c5">تاريخ الميلاد</label>
            <input
              required
              id="c5"
              type="date"
              className=" w-75 mb-3 form-control text-end"
              placeholder="تاريخ الميلاد"
              name="birthday"
              value={form.birthday}
              onChange={handlrChange}
            />
            <label htmlFor="s"> الرقم الوطني</label>
            <input
              required
              id="s"
              type="text"
              className=" w-75 mb-3 form-control text-end"
              placeholder="الرقم الوطني"
              name="idintity_no"
              onChange={handlrChange}
              value={form.idintity_no}
            />
          </div>
        </div>

        <div className="col" style={{ textAlign: " -webkit-right" }}>
          <div>
            <label htmlFor="f">الاسم الأول</label>
            <input
              required
              id="f"
              type="text"
              className=" w-75 mb-3 form-control text-end"
              placeholder="الاسم الاول"
              name="f_name"
              value={form.f_name}
              onChange={handlrChange}
            />
            <label htmlFor="s">الاسم الثاني</label>
            <input
              required
              id="s"
              type="text"
              className=" w-75 mb-3 form-control text-end"
              name="m_name"
              placeholder="الاسم الثاني"
              onChange={handlrChange}
              value={form.m_name}
            />
            <label htmlFor="l">الكنية</label>
            <input
              required
              id="l"
              type="text"
              className=" w-75 mb-3 form-control text-end"
              name="l_name"
              placeholder="الكنية"
              onChange={handlrChange}
              value={form.l_name}
            />
            <label htmlFor="s">اسم الأم</label>
            <input
              required
              id="s"
              type="text"
              className=" w-75 mb-3 form-control text-end"
              placeholder="اسم الأم"
              name="mother_name"
              onChange={handlrChange}
              value={form.mother_name}
            />

            {/* <label htmlFor='n'>رقم الهاتف</label>
            <input
              id="n"
              type="text"
              className=" w-75 mb-3 form-control text-end"
              placeholder="رقم الهاتف"
            /> */}
            <Submit />
          </div>
        </div>
      </form>
      {/* </div> */}
    </>
  );
}

export default AddPatient;
