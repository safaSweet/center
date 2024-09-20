import React from "react";
import axios from "axios";
import { useState } from "react";

// import '../Css/Card.css'
import Submit from "../Components/Submit";
import Cookie from "cookie-universal";

function AddClinic() {
  const cookie = Cookie();
  const token = cookie.get("token");
  const [form, setForm] = useState({
    f_name: "",
    m_name: "",
    l_name: "",
    phone: "",
  });

  function handlrChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handlrSubmit(e) {
    e.preventDefault();

    try {
      let res = await axios.post(
        "http://127.0.0.1:8000/api/addClinic",
        {
          name: form.f_name,
          room_number: form.m_name,
          start_hour: form.l_name,
          end_hour: form.phone,
        },
        { headers: { Authorization: "Bearer " + token } }
      );
      // .then((e) => console.log(e));
      console.log(res);

      window.location.pathname = "/ListClinic";
    } catch (error) {
      console.log("print ", error);
      // if(error.response.status===400){
      //   setEmailErr(true)
      // }
    }
  }

  // ));
  return (
    <>
      <h4 className=" text-end">إضافة عيادة</h4>
      <div className="cardForm">
        <form className="row " onSubmit={handlrSubmit}>
          <div className="col" style={{ textAlign: " -webkit-right" }}>
            <div>
              <label htmlFor="f">اسم العيادة</label>
              <input
                required
                id="f"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="اسم العيادة"
                onChange={handlrChange}
                value={form.f_name}
                name="f_name"
              />
              <label htmlFor="s"> رقم الغرفة</label>
              <input
                required
                id="s"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder=" رقم الغرفة"
                onChange={handlrChange}
                value={form.m_name}
                name="m_name"
              />

              <label htmlFor="l">بداية الدوام</label>
              <input
                required
                id="l"
                type="time"
                className=" w-75 mb-3 form-control text-end"
                placeholder=" بدايةالدوام"
                onChange={handlrChange}
                value={form.l_name}
                name="l_name"
              />
              <label htmlFor="n"> نهاية الدوام</label>
              <input
                required
                id="n"
                type="time"
                className=" w-75 mb-3 form-control text-end"
                placeholder="نهاية لدوام"
                onChange={handlrChange}
                value={form.phone}
                name="phone"
              />

              <Submit />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddClinic;
