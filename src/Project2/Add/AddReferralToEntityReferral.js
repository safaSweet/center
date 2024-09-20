import React, { useState } from "react";
import axios from "axios";
import Submit from "../Components/Submit";
import Cookies from "cookie-universal";
import FetchAllReferral from "../Api/FetchAllReferral";
import FetchAllTypeReferral from "../Api/FetchAllTypeReferral";

function AddReferralToEntityReferral() {
  const style = " col-5";
  const style1 = "p-2 m-3 w-50";

  const cookies = Cookies();

  const token = cookies.get("token");

  const [form, setForm] = useState({
    clinic_id: "",
    doctor_id: "",
  });

  function handlrChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handlrSubmit(e) {
    e.preventDefault();
    let res = await axios.post(
      "http://127.0.0.1:8000/api/addReferralToEntitiyreferral",
      {
        type_referral_id: "1",
        entitiy_referral_id: "1",
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    //.then((e)=>console.log(res))
    window.alert("تمت االاضافة  بنجاح");
    window.location.pathname = "/ListReferral";
  }

  return (
    <>
      <div className="cardd">
        <form onSubmit={handlrSubmit}>
          <div className="row justify-content-center align-items-center mt-5">
            <div className={style}>
              <label>الإحالات</label>
              <select
                required
                name="type_referral_id"
                className={style1}
                onChange={handlrChange}
                style={{ borderRadius: "4px" }}
              >
                <option value="">اختر إحالة</option>
                <FetchAllTypeReferral />
              </select>
            </div>

            <div className={style}>
              <label>جهات الإحالة</label>
              <select
                required
                name="entitiy_referral_id"
                className={style1}
                onChange={handlrChange}
                style={{ borderRadius: "4px" }}
              >
                <option value="">اختر جهة الإحالة</option>
                <FetchAllReferral /> {/* {options} */}
              </select>
            </div>
            <br />
            <div className="col-1">
              <Submit />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddReferralToEntityReferral;
