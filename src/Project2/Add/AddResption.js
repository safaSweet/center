import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Cookie from "cookie-universal";
import Submit from "../Components/Submit";

function AddResption() {
  const cookie = Cookie();
  const token = cookie.get("token");
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
    gender: "",
  });

  // });

  function handlrChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handlrSubmit(e) {
    e.preventDefault();

    try {
      let res = await axios.post(
        "http://127.0.0.1:8000/api/createReception",

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
          password: form.password,
          university: form.university,
          graduate_date: form.graduate_daye,
          gender: form.gender,
        },

        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      window.alert("تمت اضافة المستخدم بنجاح");
      window.location.pathname = "/ListSecretary";
      console.log(res);
    } catch (error) {
      console.log("print ", error);
      if (error.response && error.response.status === 500) {
        setEmailErr("الايميل موجود مسبقا, قم بإضافة غيره");
      }
    }
  }
  return (
    <>
      <h4 className=" text-end">إضافة موظفة استقبال</h4>
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
              <label htmlFor="p">كلمة السر</label>
              <input
                required
                id="p"
                type="password"
                className=" w-75 mb-3 form-control text-end"
                placeholder="كلمة السر"
                onChange={handlrChange}
                value={form.password}
                name="password"
              />

              <label htmlFor="c">العنوان</label>
              <input
                required
                id="c"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="العنوان"
                onChange={handlrChange}
                value={form.address}
                name="address"
              />
              <label htmlFor="c">الجامعة</label>
              <input
                required
                id="c"
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

              <label htmlFor="gender"> الجنس</label>
              <select
                required
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

export default AddResption;
