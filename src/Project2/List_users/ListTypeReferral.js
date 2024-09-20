import React from "react";
import Typesbutton from "../Components/Typesbutton";
import Search from "../Search";
import { Table } from "react-bootstrap";
import Cookie from "cookie-universal";
import { useEffect } from "react";
import axios from "axios";
import Modal from "../Css/Modal.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
export default function ListTypeReferral() {
  const cookie = Cookie();
  const token = cookie.get("token");
  const type = cookie.get("type");
  //http://127.0.0.1:8000/api/getAllReferralEntitiy
  const [form, setForm] = useState([]);

  useEffect(() => {
    let res = fetch(`http://127.0.0.1:8000/api/getAlltypeReferral`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((e) => e.json())
      .then((e) =>
        setForm(
          // console.log
          e
        )
      );
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
      <td>{form.name}</td>

      <td>{form.id}</td>
    </tr>
  ));

  return (
    <>
      <div className="cardd">
        <h5 className=" mb-5 text-end"> الإحالات</h5>
        <div className="row justify-content-between">
          <div className="col-9 ms-5">
            {/* <Search /> */}
          </div>

          {/* {type=="admin"&& */}
          <div className="col-2 mt-4 ">
            <div className="app">
              <Typesbutton name="إضافة إحالة" link="/AddTypeReferral" />
            </div>
          </div>
          {/* } */}
        </div>
        <Table>
          <thead>
            <tr className=" text-center">
              {/* <th className="col"></th> */}
              <th className="col"></th>

              <th className="col">الإحالات </th>

              <th className="col"> </th>

              {/* <th></th> */}
            </tr>
          </thead>

          <tbody>{show}</tbody>
        </Table>
      </div>
    </>
  );
}
