import React from "react";
import { useState } from "react";
import Cookie from "cookie-universal";
import axios from "axios";
import Submit from "../Components/Submit";
import { Link } from "react-router-dom";
function AddTypeReferral() {
  const [form, setForm] = useState({
    name: "",
  });
  const cookie = Cookie();
  const token = cookie.get("token");

  function handlrChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handlrSubmit(e) {
    e.preventDefault();

    try {
      let res = await axios.post(
        `http://127.0.0.1:8000/api/createTypeReferral`,
        {
          name: form.name,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      window.alert("تمت االاضافة  بنجاح");
      window.location.pathname = "/ListTypeReferral";
    } catch (e) {}
  }

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <Link to="/ListClinic">
            <span className="close">
              {/* //onClick={onClose} */}
              &times;
            </span>
          </Link>
          <form onSubmit={handlrSubmit}>
            <label htmlFor="referral"> الاحالة</label>
            <input
              required
              id="referral"
              type="text"
              className=" w-75 mb-3 form-control text-end"
              placeholder="الإحالة"
              onChange={handlrChange}
              value={form.name}
              name="name"
            />
            <Submit />
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTypeReferral;
