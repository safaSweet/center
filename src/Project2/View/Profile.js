import React from "react";
import  Cookie  from 'cookie-universal';
import { FaUserCircle } from "react-icons/fa";
function Profile() {
  const cookie = Cookie();
  const full_name=cookie.get("full_name");
  const email=cookie.get("email");
 
  
  return (
    <>
      
        <div className="cardd ">
          <p className=" mb-5 fs-2 text-end">الملف الشخصي</p>
          <div className="" style={{ paddingRight: "16%" }}>
            <div className="text-center " style={{ marginLeft: "27%" }}>
              {" "}
              <FaUserCircle
                style={{
                  fontSize: "80px",
                  marginBottom: "20px",
                  color: "rgb(43, 84, 130)",
                }}
              />{" "}
            </div>

            <div className="row ">

              <div className="col fs-4">
                <p className=" text-end">: الإيميل</p>
                <p className=" text-end">{email}</p>
              </div>

              <div className="col fs-4">
                <p className=" text-end">: الأسم </p>
                <p className=" text-end">{full_name}</p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Profile;
