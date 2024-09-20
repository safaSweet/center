import React, { useEffect, useState } from "react";

import "../Css/Modal.css";
import { FaUserMd, FaUserInjured, FaCalendarAlt } from "react-icons/fa";

import axios from "axios";
import Cookies from "cookie-universal";
import ListDoctors from "../Components/ListDoctors";
import { Table } from "react-bootstrap";

function ViewClinic() {
  const id = window.location.pathname.split("/").slice(-1)[0];
  const [clinic, setClinic] = useState([]);

  const cookie = Cookies();
  const img = require("../Image/undraw_medicine_b1ol.png");

  const token = cookie.get("token");
  const type = cookie.get("type");

  //for info clinic

  useEffect(() => {
    let res = axios
      .post(
        "http://127.0.0.1:8000/api/showClinicById",

        { clinic_id: `${id}` },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((e) => setClinic(e.data.data));
  }, []);

  return (
    <>
      <div className="  mt-5">
        <div className=" " style={{ width: "80%", marginLeft: "100px" }}>
          <div className="row bg-white ">
            <img className="col-2" src={img} alt="" style={{ width: "52%" }} />
            <div className="col-5 ">
              <p className=" fs-4 text-end">{clinic.name}</p>
              <p className=" fs-5 text-end">
                بداية الدوام : {clinic.start_hour}
              </p>
              <p className=" fs-5 text-end">
                {" "}
                نهاية الدوام : {clinic.end_hour}
              </p>
              <p className=" fs-5 text-end">
                {" "}
                رقم الغرفة : {clinic.room_number}
              </p>
            </div>
          </div>
          {/* <div
            className="row bg-white p-4 mt-5"
            style={{ borderRadius: "15px" }}
          >
            <div className="col text-center">
              <FaCalendarAlt className=" fs-2" />
              <span className=" fs-4 ms-2">2</span>
            </div>

            <div className="col text-center">
              <FaUserMd className=" fs-2" />
              <span className=" fs-4 ms-2">2</span>
            </div>

            <div className="col text-center">
              <FaUserInjured className=" fs-2" />
              <span className=" fs-4 ms-2">2</span>
            </div>
          </div> */}
        </div>
        {/* <div className="col-4 ">
          <div
            className="card text-end "
            style={{ width: "18rem", borderRadius: "0px" }}
          >
            <div className="p-3">
              الأطباء
              <FaUsers className="ms-2" />{" "}
            </div>
           <ListDoctors id={id} />
           
          </div>
        </div> */}
      </div>
      {/* appoint */}
      <div>
        <Table>
          <thead>
            <tr className=" text-center">
              <th className="col">الطبيب </th>
              {type == "admin" && <th className="col"> اضافة ساعات عمل</th>}
              {type == "admin" && (
                <th className="col"> حذف الطبيب من العيادة</th>
              )}

              <th className="col">طابور المرضى</th>
              <th className="col">طابور المرضى اليوم</th>
              {type == "reception" && (
                <th className="col"> اضافة موعد لمريض</th>
              )}
              {type == "reception" && (
                <th className="col"> اضافة زيارة لمريض</th>
              )}
              <th className="col"> عرض ساعات عمل الطبيب</th>
            </tr>
          </thead>

          <tbody>
            <ListDoctors id={id} />
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ViewClinic;
