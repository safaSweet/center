import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Cookie from "cookie-universal";
import { useState } from "react";
import { FaTrashAlt, FaPlusSquare } from "react-icons/fa";
function ShowPhonesForUser() {
  const user_id = window.location.pathname.split("/").slice(-1)[0];
  const cookie = Cookie();
  const token = cookie.get("token");
  const [phone, setPhone] = useState([]);

  function getAllPhone() {
    let res = axios
      .post(
        `http://127.0.0.1:8000/api/showNumbersforUser`,
        {
          user_id,
        },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((e) => {
        console.log(e.data);
        setPhone(e.data.data);
      });
  }
  useEffect(() => {
    getAllPhone();
  }, []);

  const show = phone.map((p, i) => (
    <div key={i}>
      <span>{p.phone}</span>
      <span className=" ms-3" onClick={() => del(p.id)}>
        <FaTrashAlt />
      </span>
      <hr />
    </div>
  ));
  function del(id) {
    let res = axios
      .post(
        `http://127.0.0.1:8000/api/destroyPhoneUser`,
        { phone_id: id },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((e) => {
        console.warn(e);
        getAllPhone();
      });
  }
  return (
    <>
      <div className="modal">
        <div className="modal-content" style={{ overflow: "auto" }}>
          <h5 className=" text-center mb-5">ارقام المستخدم</h5>

          <Link to="/Doctors">
            <span className="close">&times;</span>
          </Link>
          <div>
            {phone.length == 0 ? (
              <p className=" text-center fs-2 mt-5">لا يوجد محتوى</p>
            ) : (
              show
            )}

            <p>
              <Link to={`/AddPhoneToUser/${user_id}`}>
                <FaPlusSquare />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowPhonesForUser;
