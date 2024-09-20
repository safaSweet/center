import React from "react";
import FetchAllUsers from "../Api/FetchAllUsers";
import Submit from "../Components/Submit";
import { useState } from "react";
import axios from "axios";
import Cookies from "cookie-universal";
function ServiceUser(props) {
  const [user, setUser] = useState("");
  const cookies = Cookies();

  const token = cookies.get("token");

  function handlerChange(e) {
    setUser(e.target.value);
  }
  async function handlrSubmit(e) {
    e.preventDefault();
    const confirmDelete = window.confirm(
      `هل أنت متأكد من أنك تريد حذف هذا العنصر؟`
    );

    if (confirmDelete) {
      try {
        let res = await axios
          .post(
            `http://127.0.0.1:8000/api/${props.path}`,
            {
              id: user,
            },
            { headers: { Authorization: "Bearer " + token } }
          )
          .then((e) => console.log(e));
      } catch (e) {}
    } else {
      alert("تم رفض الإجراء.");
    }
    setUser("");
  }

  return (
    <>
      <div className="cardForm ">
        <h5 className="text-end">{props.text}</h5>
        <form onSubmit={handlrSubmit} className=" text-center">
          <br />
          <br />
          <br />
          <label> المستخدمين</label>
          <br />
          <select
            required
            name="id"
            className="p-2 m-3 w-25 text-end"
            onChange={handlerChange}
            style={{ borderRadius: "4px" }}
          >
            <option value="">اخترالمستخدم</option>
            <FetchAllUsers />
          </select>
          <br />
          <Submit />
        </form>
      </div>
    </>
  );
}

export default ServiceUser;
