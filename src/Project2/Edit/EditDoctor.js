import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Css/Card.css";
import Submit from "../Components/Submit";
import Cookies from "cookie-universal";
import EditButton from "../Components/EditButton";

function EditDoctor() {
  const cookie = Cookies();
  const token = cookie.get("token");
  const id = window.location.pathname.split("/").slice(-1)[0];

  const [Name, setName] = useState("");
  const [lastName, setlastname] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [phone, setPhone] = useState([]);
  const [birth, setBirth] = useState("");
  const [university, setUniversity] = useState("");
  const [email, setEmail] = useState("");
  const [address, setadress] = useState("");
  const [graduaite, setGraduait] = useState("");
  const [gender, setgender] = useState("");
  const [postSpec, setPostSpec] = useState("");
  const [spec, setSpec] = useState([]);

  //fetch spec
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/getAllSpecialty", {
      headers: { Authorization: "Bearer " + token },
    })
      .then((e) => e.json())
      .then((e) => {
        setSpec(e.data);
      });
  }, []);

  //fetch doctor info
  useEffect(() => {
    let res = axios
      .post(
        "http://127.0.0.1:8000/api/showDoctorById",
        { id },

        { headers: { Authorization: "Bearer " + token } }
      )
      .then((e) => {
        setName(e.data.data.first_name);
        setlastname(e.data.data.last_name);
        setBirth(e.data.data.birthday);
        setEmail(e.data.data.email);
        setgender(e.data.data.gender);
        setMother(e.data.data.mother_name);
        setGraduait(e.data.data.graduate_date);
        setFather(e.data.data.father_name);
        setUniversity(e.data.data.university);
        setPhone(e.data.data.phone);
        setadress(e.data.data.address);

        console.log("phone", e.data.data.phone);
        console.log(e.data.data);
      });
  }, []);

  async function handlrSubmit(e) {
    e.preventDefault();
    try {
      // const phoneObject = { id: phone.id, phone: phone.phone };
      let res = await axios
        .post(
          `http://127.0.0.1:8000/api/updateDoctore`,
          {
            doctor_id: id,
            f_name: Name,
            m_name: father,
            l_name: lastName,
            mother_name: mother,
            address: address,
            birthday: birth,
            email: email,
            type: "doctor",
            university: university,
            graduate_date: graduaite,
            medical_specialty_id: postSpec,
            gender: gender,
          },

          { headers: { Authorization: "Bearer " + token } }
        )
        .then((e) => console.log(e));

      window.alert("تمت التحديث  بنجاح");

      window.location.pathname = "/Doctors";
    } catch (error) {
      console.log("print ", error);
    }
  }
  console.log("spec", spec);

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

  function handlerChange_university(e) {
    setUniversity(e.target.value);
  }
  function handlerChange_address(e) {
    setadress(e.target.value);
  }
  function handlerChange_email(e) {
    setEmail(e.target.value);
  }
  function handlerChange_graduaite(e) {
    setGraduait(e.target.value);
  }
  // function handlerChange_gender(e) {
  //   setgender(e.target.value);
  // }
  function handlerChange_spec(e) {
    setPostSpec(e.target.value);
  }

  const options = spec.map((specialty, i) => (
    <option key={i} value={specialty.id}>
      {specialty.name}
    </option>
  ));

  return (
    <>
      <div className="cardForm">
        <h4 className=" text-end mb-5">تعديل معلومات طبيب</h4>
        <form className="row " onSubmit={handlrSubmit}>
          <div className="col " style={{ textAlign: " -webkit-right" }}>
            <div>
              <label htmlFor="e" className=" text-end">
                الإيميل
              </label>
              <input
                id="e"
                type="email"
                className=" w-75 mb-3 form-control text-end"
                placeholder="الإيميل"
                onChange={handlerChange_email}
                defaultValue={email || ""}
                name="email"
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
              <label htmlFor="c">الجامعة</label>
              <input
                id="c"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="الجامعة"
                onChange={handlerChange_university}
                defaultValue={university || ""}
                name="university"
              />

              <label htmlFor="c1">تاريخ التخرج</label>
              <input
                id="c1"
                type="date"
                className=" w-75 mb-3 form-control text-end"
                placeholder="تاريخ التخرج"
                name="graduate_date"
                defaultValue={graduaite || ""}
                onChange={handlerChange_graduaite}
              />

              <label htmlFor="sp"> اختر الاختصاص</label>

              <select
                id="sp"
                value={postSpec}
                onChange={handlerChange_spec}
                name="medical_specialty_id"
              >
                <option value="">Select a specialty</option>
                {options}
              </select>
            </div>
          </div>

          <div className="col" style={{ textAlign: " -webkit-right" }}>
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
              {/* <label htmlFor="n">رقم الهاتف</label> */}
              {/* <input
            id="n"
            type="text"
            className=" w-75 mb-3 form-control text-end"
            placeholder="رقم الهاتف"
            onChange={handlerChange_phone}
            defaultValue={phone ||''}
            name="phone"
          /> */}
              {/* {ph} */}

              <EditButton />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditDoctor;
