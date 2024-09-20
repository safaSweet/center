import React from "react";
import Cookie from "cookie-universal";
import { useState } from "react";
import axios from "axios";
import Submit from "../Components/Submit";
import { Link } from "react-router-dom";
function AddPhone() {
  const user_id = window.location.pathname.split("/").slice(-1)[0];
  const cookie = Cookie();
  const token = cookie.get("token");
  const [phone, setPhone] = useState("");

  function handlechange(e) {
    setPhone(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    try {
      let res = axios.post(
        `http://127.0.0.1:8000/api/storePhoneToUser`,
        { user_id: user_id, phone: phone },
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      window.alert("تمت االاضافة  بنجاح");
      setPhone("");
    } catch (e) {}
  }
  return (
    <>
      <div className="modal">
        <div className="modal-content" style={{ overflow: "auto" }}>
          <Link to="/Doctors">
            <span className="close">&times;</span>
          </Link>
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="phone"> الاحالة</label>
              <input
                required
                id="phone"
                type="text"
                className=" w-75 mb-3 form-control text-end"
                placeholder="رقم الهاتف"
                onChange={handlechange}
                value={phone}
                name="phone"
              />
              <Submit />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPhone;
