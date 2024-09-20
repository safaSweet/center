import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "../Css/Card.css";
import Typesbutton from "../Components/Typesbutton";
import Search from "../Search";
import Cookies from "cookie-universal";

import { Link } from "react-router-dom";
import { FaEdit, FaEllipsisV, FaRegTrashAlt, FaPlus } from "react-icons/fa";
import axios from "axios";
function ListPatient2(props) {
  const [user, setUser] = useState([]);

  const cookies = Cookies();

  const token = cookies.get("token");
  const type = cookies.get("type");

  function GetAllUsers() {
    fetch(`http://127.0.0.1:8000/api/getAllPatient`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((e) => e.json())
      .then((e) => setUser(e.data));
  }

  //fetch patient
  useEffect(() => {
    GetAllUsers();
  }, []);

  async function del(id) {
    const confirmDelete = window.confirm(
      `${id} هل أنت متأكد من أنك تريد حذف هذا العنصر؟`
    );

    if (confirmDelete) {
      try {
        await axios
          .post(
            `http://127.0.0.1:8000/api/deletePatient`,
            {
              id: id,
            },
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          )
          .then((e) => {
            console.warn(e);
            GetAllUsers();
          });
      } catch (e) {}
    } else {
      alert("تم رفض الإجراء.");
    }
  }
  console.log(user);
  const show = user.map((user, id) => (
    <tr className=" text-center" key={id}>
      <td className=" d-flex justify-content-around">
        {/* {type == "reception" &&  */}
        <span onClick={() => del(user.id)}>
          <FaRegTrashAlt />
        </span>
        {/* } */}
        {type == "reception" && (
          <Link to={`/ListPatient/EditPatient/${user.id}`}>
            <FaEdit />
          </Link>
        )}
        <Link to={`/ListPatient/ViewPatient/${user.id}`}>
          <FaEllipsisV />
        </Link>
      </td>
      <td>{user.l_name}</td>
      <td>{user.m_name}</td>
      <td>{user.f_name}</td>
      <td>{user.id}</td>
    </tr>
  ));
  return (
    <>
      <div className="cardd">
        <div className="row justify-content-between ">
          <div className="col-7 ms-5">
            {/* <Link to="/searchDoctor">
              <span
                style={{
                  padding: "3px 9px",
                  backgroundColor: "#f1f1f1",
                  fontSize: "22px",
                }}
              >
                <FaSearch />
              </span>
            </Link> */}
          </div>

          <div className="col-4">
            {" "}
            <div className=" d-flex justify-content-end mb-5">
              {type == "reception" && (
                <Typesbutton name="اضافة مريض" link="/AddPatient" />
              )}
            </div>
          </div>
        </div>
        <Table>
          <thead>
            <tr className=" text-center">
              <th></th>
              <th>الكنية</th>
              <th>الاسم الثاني</th>
              <th>الاسم الأول</th>
              <th>رقمه</th>
            </tr>
          </thead>
          <tbody>{show}</tbody>
        </Table>
      </div>
    </>
  );
}
export default ListPatient2;
