import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Css/List.module.css";
import "../Css/Card.css";
import { FaPlus } from "react-icons/fa";
import Typesbutton from "./Typesbutton";
import Search from "../Search";
import { Table } from "react-bootstrap";
import Cookies from "cookie-universal";

const List = () => {
  const cookie = Cookies();
  const token = cookie.get("token");
  const type = cookie.get("type");
  const [appoint, setAppoint] = useState([]);
  useEffect(() => {
    let res = axios
      .post(
        `http://127.0.0.1:8000/api/getQueueVisitToCliniDoctor`,
        { clinic_doctor_id: 4 },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((e) => {
        setAppoint(e.data);
        console.log(e.data);
      });
  }, []);

  return (
    <>
      <div className="cardd">
        <div className="row justify-content-between">
          <div className="col-9 ms-5">
            <Search />
          </div>

          {/* {type=="admin"&&<div className="col-2 mt-4 "> */}
          <Typesbutton name="إضافة موعد" link="/AddApoint" />
          {/* </div>} */}
        </div>
        <Table>
          <thead>
            <tr className=" text-center">
              <th className="col">رقمه</th>
              <th className="col">الأسم الأول</th>
              <th className="col">الكنية</th>
              <th className="col">رقم الهاتف</th>
              <th className="col">العيادة</th>
              <th className="col">الطبيب</th>
              <th className="col"> نوع الموعد</th>
              <th className="col"> </th>

              <th></th>
            </tr>
          </thead>
          {/* <tbody>{show}</tbody> */}
          <tbody>
            <tr className=" text-center">
              <td>1</td>

              <td>محمد</td>
              <td>مجمد</td>

              <td>0999698554</td>
              <td>عينية</td>
              <td>احمد احمد</td>
              <td> مراجعة</td>
              {/* <td>  <Link to='/AddVisite'><FaPlus/></Link></td> */}
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default List;
