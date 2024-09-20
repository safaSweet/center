import React from "react";
import Cookies from "cookie-universal";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import FetchAllTypeReferral from "../Api/FetchAllTypeReferral";
import Submit from "../Components/Submit";
import { Link } from "react-router-dom";

function AddTypeReferralToPatient() {
  const id = window.location.pathname.split("/").slice(-1)[0];

  const cookies = Cookies();
  const token = cookies.get("token");
  const [form, setForm] = useState("");
  const style = " col-5";
  const style1 = "p-2 m-3 w-50";
  function handlrChange(e) {
    setForm(e.target.value);
  }
  //

  function handlrSubmit(e) {
    e.preventDefault();

    let res = axios.post(
      `http://127.0.0.1:8000/api/createReferralToVisits`,
      {
        type_entitiy_referral_id: form,
        visit_id: id,
      },
      {
        headers: { Authorization: "Bearer " + token },
      }
    );

    console.log(res);
    // window.location.pathname = "/ListPatient";
    window.alert("تمت االاضافة  بنجاح");
    // window.location.pathname="/ListTypeReferral"
  }
  console.log(form);

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <Link to="/ListTypeReferral">
            <span className="close">
              {/* //onClick={onClose} */}
              &times;
            </span>
          </Link>
          <h5 className=" text-end">إضافة احالة لمريض</h5>
          <form className=" " onSubmit={handlrSubmit}>
            <div className="row justify-content-center align-items-center mt-5">
              <div className={style}>
                <label>الإحالات</label>
                <select
                  required
                  name="type_entitiy_referral_id"
                  className={style1}
                  onChange={handlrChange}
                  style={{ borderRadius: "4px" }}
                >
                  <option value="">اختر إحالة</option>
                  <FetchAllTypeReferral />
                </select>
              </div>

              <br />
              <div className="col-1">
                <Submit name="حفظ" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTypeReferralToPatient;
