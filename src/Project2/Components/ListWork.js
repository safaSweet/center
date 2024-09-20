import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "../Css/Card.css";
import Typesbutton from "./Typesbutton";
import Search from "../Search";
import Cookies from "cookie-universal";
import { Link } from "react-router-dom";
import { FaEdit, FaEllipsisV, FaRegTrashAlt, FaPlus } from "react-icons/fa";

function ListWork(props) {
  const [users, setUser] = useState([]);

  const cookies = Cookies();

  const token = cookies.get("token");
  const type = cookies.get("type");
  //fetch doctor
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/${props.path}`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((e) => e.json())
      .then((e) => setUser(e.data));
  }, []);

  console.log("users : ", users);
  const s = ["m", "g"];
  const show = users.map((user, id) => (
    <tr className=" text-center" key={id}>
      <td>{user.id}</td>

      <td>{user.first_name}</td>
      <td>{user.father_name}</td>
      <td>{user.last_name}</td>

      <td className=" d-flex justify-content-around">
        <Link to={`${props.view}/${user.id}`}>
          <FaEllipsisV />
        </Link>
        <Link to={`${props.edit}/${user.id}`}>
          <FaEdit />
        </Link>
        <Link to="">
          <FaRegTrashAlt />
        </Link>
        <Link to={`${props.work}/${user.id}`}>
          <FaPlus />
        </Link>
      </td>
    </tr>
  ));
  return (
    <>
      <div className="cardd">
        <div className="row justify-content-between">
          <div className="col-9 ms-5">
            <Search />
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
              <th>رقمه</th>
              <th>الأسم الأول</th>
              <th>الأسم الثاني</th>
              <th>الكنية</th>

              <th></th>
            </tr>
          </thead>
          <tbody>{show}</tbody>
        </Table>
      </div>
    </>
  );
}
export default ListWork;
