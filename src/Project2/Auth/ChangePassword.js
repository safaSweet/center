import React from "react";
import Cookie from "cookie-universal";
import axios from "axios";
import { useState } from "react";
import Submit from "../Components/Submit";
function ChangePassword() {
  const cookie = Cookie();
  const token = cookie.get("token");
  const [form, setForm] = useState({
    new_password: "",
    current_password: "",
  });

  async function handlrSubmit(e) {
    e.preventDefault();

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/changePassword",

        {
          new_password: form.new_password,
          current_password: form.current_password,
        },

        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      window.alert("تمت اضافة المستخدم بنجاح");

      setForm({
        new_password: "",
        current_password: "",
      });
    } catch (error) {
      console.log("print ", error);
    }
  }

  function handlrChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div className="cardForm text-end">
        <h4 className=" mb-5"> تغيير كلمة السر</h4>
        <form onSubmit={handlrSubmit} className="row">
          <div className="col" style={{ textAlign: " -webkit-right" }}>
            <div>
              <label htmlFor="c">كلمة السر الحالية</label>

              <input
                required
                id="c"
                type="text"
                className=" w-50 mb-3 form-control text-end"
                placeholder="كلمة السر الحالية"
                onChange={handlrChange}
                value={form.current_password}
                name="current_password"
              />
              <label htmlFor="c">كلمة السر الجديدة</label>
              <input
                required
                id="c"
                type="text"
                className=" w-50 mb-3 form-control text-end"
                placeholder="كلمة السر الجديدة"
                onChange={handlrChange}
                value={form.new_password}
                name="new_password"
              />
              <Submit />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ChangePassword;
