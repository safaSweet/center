import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from "cookie-universal";
import { Table } from "react-bootstrap";

function Viewreferral2Patient() {
  const patient_id = window.location.pathname.split("/").slice(-1)[0];
  const cookies = Cookies();
  const token = cookies.get("token");
  const [ref, setRef] = useState([]);
  useEffect(() => {
    axios
      .post(
        `http://127.0.0.1:8000/api/getAllReferralToPatient`,
        { patient_id },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((e) => {
        setRef(e.data.data);
        console.log(e.data.data);
      });
  }, []);
  const show = ref.map((u, i) => (
    <tr key={i}>
      <td>{u.nameDoctor}</td>
      <td>{u.Referral.name}</td>
      {/* <td>{u.EntitiyReferral.name}</td> */}
    </tr>
  ));
  return (
    <>
      <p className="fs-3 text-end">إحالات المريض</p>
      <Table>
        <thead>
          <tr>
            <th>الطبيب</th>
            <th>نوع الإحالة </th>
            {/* <th>جهة الإحالة</th> */}
          </tr>
        </thead>
        <tbody>{show}</tbody>
      </Table>
    </>
  );
}

export default Viewreferral2Patient;
