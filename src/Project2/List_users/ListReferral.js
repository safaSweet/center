import React from "react";
import { Link } from "react-router-dom";
import "../Css/List.module.css";
import "../Css/Card.css";
import { FaEllipsisV } from "react-icons/fa";
import Typesbutton from "../Components/Typesbutton";
import Search from "../Search";
import { Table } from "react-bootstrap";
import Cookie from "cookie-universal";
import { useEffect } from "react";

import { useState } from "react";
import "../Css/Modal.css";

export default function ListReferral() {
  const cookie = Cookie();
  const token = cookie.get("token");
  const type = cookie.get("type");
  //http://127.0.0.1:8000/api/getAllReferralEntitiy
  const [form, setForm] = useState([]);

  useEffect(() => {
    let res = fetch(`http://127.0.0.1:8000/api/getAllReferralEntitiy`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((e) => e.json())
      .then((e) => setForm(e.data));
  }, []);

  const show = form.map((form, i) => (
    <tr className=" text-center" key={i}>
      <td>
        <div className="app">
          {" "}
          <Link to={`/showReferralToEntity/${form.id}`}>
            <FaEllipsisV />{" "}
          </Link>
        </div>
      </td>

      <td>{form.description}</td>
      <td>{form.address}</td>
      <td>{form.name}</td>
      <td>{form.id}</td>
    </tr>
  ));

  return (
    <>
      <div className="cardd">
        <h5 className=" mb-5 text-end">جهات الإحالة</h5>
        <div className="row justify-content-between">
          <div className="col-7 ms-5">
            {/* <Search /> */}
          </div>

          {type == "reception" && (
            <div className="col-2 mt-4 ms-3">
              <Typesbutton name="إضافة جهة إحالة" link="/AddReferral" />
            </div>
          )}
          {type == "reception" && (
            <div className="col-2 mt-4 text-start">
              <Typesbutton
                name="إضافة إحالة إلى جهة إحالة"
                link="/AddReferralToEntityReferral"
              />
            </div>
          )}
        </div>
        <Table>
          <thead>
            <tr className=" text-center">
              <th className="col"></th>
              <th className="col"> التوصيف</th>
              <th className="col">العنوان</th>
              <th className="col">الجهة </th>

              <th className="col"> </th>

              <th></th>
            </tr>
          </thead>

          <tbody>{show}</tbody>
        </Table>
      </div>
    </>
  );
}
