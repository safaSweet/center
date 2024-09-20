import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "../Css/Card.css";
import Typesbutton from "./Typesbutton";
import Search from "../Search";
import Cookies from "cookie-universal";
import { Link } from "react-router-dom";
import {
  FaEdit,
  FaEllipsisV,
  FaRegTrashAlt,
  FaPlus,
  FaSearch,
  FaPhone,
} from "react-icons/fa";
import axios from "axios";

function List(props) {
  const [users, setUser] = useState([]);

  const cookies = Cookies();

  const token = cookies.get("token");
  const type = cookies.get("type");

  function GetAllUsers() {
    fetch(`http://127.0.0.1:8000/api/${props.path}`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((e) => e.json())
      .then((e) => setUser(e.data));
  }

  //fetch doctor
  useEffect(() => {
    GetAllUsers();
  }, []);

  //delete user
  async function del(id) {
    const confirmDelete = window.confirm(
      `${id} هل أنت متأكد من أنك تريد حذف هذا العنصر؟`
    );

    if (confirmDelete) {
      try {
        await axios
          .post(
            `http://127.0.0.1:8000/api/${props.del}`,
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

  const show = users.map((user, id) => (
    <tr className=" text-center" key={id}>
      <td className=" d-flex justify-content-around">
        {type == "admin" && (
          <span onClick={() => del(user.user_id)}>
            {" "}
            <FaRegTrashAlt />
          </span>
        )}

        <Link to={`/ShowPhonesForUser/${user.user_id}`}>
          <FaPhone />
        </Link>

        {type == "admin" && (
          <Link to={`${props.work}/${user.id}`}>{props.plus}</Link>
        )}

        {type == "admin" && (
          <Link to={`${props.edit}/${user.id}`}>
            <FaEdit />
          </Link>
        )}

        <Link to={`${props.view}/${user.id}`}>
          <FaEllipsisV />
        </Link>
      </td>

      <td>{user.last_name}</td>
      <td>{user.father_name}</td>
      <td>{user.first_name}</td>
      <td>{user.id}</td>
    </tr>
  ));

  return (
    <>
      <div className="cardd">
        <div className="row align-items-end mb-5">
          <div className="col-9 ms-5 text-end">
            {/* <Search /> */}
            <Link to="/searchDoctor">
              <span
                style={{
                  padding: "3px 9px",
                  backgroundColor: "#f1f1f1",
                  fontSize: "22px",
                }}
              >
                <FaSearch />
              </span>
            </Link>
            {/* //setFilteredUsers={setFilteredUsers} users={users} setusers={setUser} */}
          </div>
          {type == "admin" &&
            (props.link_button == "/AddDoctor" ||
              props.link_button == "/AddResption") && (
              <div className="col-2 mt-4 ">
                <Typesbutton
                  name={props.name_button}
                  link={props.link_button}
                />
              </div>
            )}
          {type == "resption" && (
            <div className="col-2 mt-4 ">
              <Typesbutton name={props.name_button} link={props.link_button} />
            </div>
          )}
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
export default List;
