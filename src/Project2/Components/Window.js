import React from "react";
import { useEffect } from "react";
import Cookie from "cookie-universal";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Window(props) {
  const entitiy_referral_id = window.location.pathname.split("/").slice(-1)[0];
  // { isOpen, onClose ,id0}
  const cookie = Cookie();
  const token = cookie.get("token");
  const [ref_ent, setRef_Ent] = useState([]);

  useEffect(() => {
    axios
      .post(
        `http://127.0.0.1:8000/api/showReferralToEntitiy`,
        { entitiy_referral_id },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((e) =>
        //  console.log(e.data)
        setRef_Ent(e.data.data)
      );
  }, []);

  const show = ref_ent.map((u, i) => (
    <div key={i}>
      <p>{u.name}</p>
      <hr />
    </div>
  ));

  return (
    <div className="modal">
      <div className="modal-content">
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
        </div>
      </div>
    </div>
  );
}
