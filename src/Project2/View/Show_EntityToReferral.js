import React from "react";
import { useEffect } from "react";
import Cookie from "cookie-universal";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Show_EntityToReferral() {
  const entitiy_referral_id = window.location.pathname.split("/").slice(-1)[0];
  const cookie = Cookie();
  const token = cookie.get("token");
  const [ref_ent, setRef_Ent] = useState([]);

  useEffect(() => {
    let res = axios
      .post(
        `http://127.0.0.1:8000/api/showEntitiyToReferral`,
        { entitiy_referral_id },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((e) => {
        console.log(e.data.data);
        setRef_Ent(e.data.data);
      });
  }, []);
  console.log(ref_ent);
  const show = ref_ent.map((u, i) => (
    <div key={i}>
      <p>{u.name}</p>
      <hr />
    </div>
  ));

  return (
    <div className="modal">
      <div className="modal-content" style={{ overflow: "auto" }}>
        <Link to="/listReferral">
          <span className="close">
            {/* //onClick={onClose} */}
            &times;
          </span>
        </Link>
        <div>
          {ref_ent.length == 0 ? (
            <p className=" text-center fs-2 mt-5">لا يوجد محتوى</p>
          ) : (
            show
          )}
          {/* {show} */}
        </div>
      </div>
    </div>
  );
}
export default Show_EntityToReferral;
