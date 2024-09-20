import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import "../Css/Card.css";
import Cookies from "cookie-universal";
import Submit from "../Components/Submit";
// import { User } from "./Context/Context";
function AddDoctor() {
  const cookies = Cookies();
  const token = cookies.get("token");
  const [emailErr, setEmailErr] = useState("");
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
    medical_specialty_id: "",
    gender: "",
  });
  const [spec, setSpec] = useState([]);

  useEffect(() => {
    let b = fetch("http://127.0.0.1:8000/api/getAllSpecialty", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((e) => e.json())

      .then((e) => {
        setSpec(e.data);
      });
  }, []);

  function handlrChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handlrSubmit(e) {
    console.log("first");
    e.preventDefault();

    try {
      let res = await axios.post(
        "http://127.0.0.1:8000/api/createDoctore",

        {
          f_name: form.f_name,
          m_name: form.m_name,
          l_name: form.l_name,
          mother_name: form.mother_name,
          father_name: "father", //form.father_name,
          address: form.address,
          birthday: form.birthday,
          phone: form.phone,
          email: form.email,
          password: "123456798", //form.password,
          university: form.university,
          graduate_date: form.graduate_daye,
          medical_specialty_id: form.medical_specialty_id,
          type: "doctor",
          gender: form.gender,
        },

        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      // console.log("subit", res);

      window.alert("تمت اضافة المستخدم بنجاح");
      window.location.pathname = "/Doctors";
    } catch (error) {
      if (error.response && error.response.status === 500) {
        setEmailErr("الايميل موجود مسبقا, قم بإضافة غيره");
      }
      console.log("print ", error);
    }
  }

  const options = spec.map((specialty, i) => (
    <option key={i} value={specialty.id}>
      {specialty.name}
    </option>
  ));

  return (
    <>
      <h4 className=" text-end">إضافة طبيب</h4>
      <div className="cardForm">
        <form className="row " onSubmit={handlrSubmit}>
          <div className="col " style={{ textAlign: " -webkit-right" }}>
            <div>
              {emailErr !== "" && <span className="error">{emailErr}</span>}
              <label htmlFor="e" className=" text-end">
                الإيميل
              </label>
              <input
                required
                id="e"
                type="email"
                className=" w-75 mb-3 form-control text-end"
                placeholder="الإيميل"
                onChange={handlrChange}
                value={form.email}
                name="email"
              />

              {/* <label htmlFor="p">كلمة السر</label>
              <input
                required
                id="p"
                type="password"
                className=" w-75 mb-3 form-control text-end"
                placeholder="كلمة السر"
                onChange={handlrChange}
                value={form.password}
                name="password"
              /> */}
              <label htmlFor="address">العنوان</label>
              <input
                required
                id="address"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="العنوان"
                onChange={handlrChange}
                value={form.address}
                name="address"
              />
              <label htmlFor="univ">الجامعة</label>
              <input
                required
                id="univ"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="الجامعة"
                onChange={handlrChange}
                value={form.university}
                name="university"
              />

              <label htmlFor="c1">تاريخ التخرج</label>
              <input
                required
                id="c1"
                type="date"
                className=" w-75 mb-3 form-control text-end"
                placeholder="تاريخ التخرج"
                name="graduate_daye"
                value={form.graduate_daye}
                onChange={handlrChange}
              />

              <label htmlFor="sp"> اختر الاختصاص</label>
              <select
                id="sp"
                value={form.medical_specialty_id}
                onChange={handlrChange}
                name="medical_specialty_id"
              >
                <option value="">Select a specialty</option>
                {options}
              </select>
              <br />
              <br />
              <label htmlFor="gender"> الجنس</label>
              <select
                name="gender"
                value={form.gender}
                onChange={handlrChange}
                className="p-2"
                style={{ borderRadius: "4px" }}
              >
                <option>اختر الجنس</option>
                <option value="ذكر">ذكر</option>
                <option value="انثى">أنثى</option>
              </select>
            </div>
          </div>

          <div className="col" style={{ textAlign: " -webkit-right" }}>
            <div>
              <label htmlFor="f">الاسم الأول</label>
              <input
                required
                id="f"
                type={"text"}
                className=" w-75 mb-3 form-control text-end"
                placeholder="الاسم الاول"
                onChange={handlrChange}
                value={form.f_name}
                name="f_name"
              />
              <label htmlFor="s">الاسم الثاني</label>
              <input
                required
                id="s"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="الاسم الثاني"
                onChange={handlrChange}
                value={form.m_name}
                name="m_name"
              />

              <label htmlFor="l">الكنية</label>
              <input
                required
                id="l"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="الكنية"
                onChange={handlrChange}
                value={form.l_name}
                name="l_name"
              />
              <label htmlFor="l">اسم الأم</label>
              <input
                required
                id="l"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="اسم الأم"
                onChange={handlrChange}
                value={form.mother_name}
                name="mother_name"
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
              <label htmlFor="n">رقم الهاتف</label>
              <input
                required
                id="n"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="رقم الهاتف"
                onChange={handlrChange}
                value={form.phone}
                name="phone"
              />

              <Submit />
              {/* <button type="submit">save</button> */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddDoctor;
