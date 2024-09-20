import React, { useState } from "react";
import Submit from "../Components/Submit";
import Cookie from "cookie-universal";
import axios from "axios";
export default function AddReferral() {
  const cookie = Cookie();
  const token = cookie.get("token");
  const type = cookie.get("type");
  const [form, setForm] = useState({
    name: "",
    address: "",
    description: "",
  });
  function handlrChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handlerSubmit(e) {
    e.preventDefault();

    try {
      let res = await axios.post(
        "http://127.0.0.1:8000/api/createEntitiyReferral",
        {
          name: form.name,
          address: form.address,
          description: form.description,
        },
        { headers: { Authorization: "Bearer " + token } }
      );
      // .then((e) => console.log(e));
      console.log(res);

      window.alert("تمت االاضافة  بنجاح");
      window.location.pathname = "/listReferral";
    } catch (error) {
      console.log("print ", error);
      // if(error.response.status===400){
      //   setEmailErr(true)
      // }
    }
  }

  return (
    <>
      <h4 className=" text-end">إضافة جهة إحالة</h4>
      <div className="cardForm">
        <form className="row " onSubmit={handlerSubmit}>
          <div className="col" style={{ textAlign: " -webkit-right" }}>
            <div>
              <label htmlFor="f">اسم الجهة</label>
              <input
                required
                id="f"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="اسم الجهة"
                onChange={handlrChange}
                value={form.name}
                name="name"
              />
              <label htmlFor="s"> العنوان</label>
              <input
                required
                id="s"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="  العنوان"
                onChange={handlrChange}
                value={form.address}
                name="address"
              />

              <label htmlFor="l"> التوصيف</label>
              <input
                required
                id="l"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder=" التوصيف"
                onChange={handlrChange}
                value={form.description}
                name="description"
              />

              <Submit />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
