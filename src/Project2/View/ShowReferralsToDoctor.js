import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "cookie-universal";
import { Table } from "react-bootstrap";

function ShowReferralsToDoctor() {
  const id = window.location.pathname.split("/").slice(-1)[0];

  const cookies = Cookies();

  const token = cookies.get("token");
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    axios
      .post(
        `http://127.0.0.1:8000/api/ShowٌReferralsToDoctor`,
        {
          doctor_id: id,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((e) => {
        console.log(e.data);
        setDoctor(e.data.data);
      });
  }, []);

  const show = doctor.map((doctor, i) => (
    <tr key={i}>
      {/* <td>{doctor.id}</td> */}
      <td>{doctor.Referral.name}</td>
    </tr>
  ));

  return (
    <>
      <div className="modal">
        <div className="cardd">
          <Table className=" text-end">
            <thead>
              <tr>
                <th></th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>{show}</tbody>
            {/* {doctor.length === 0 ? (
              <p className=" text-center fs-2 mt-5">لا يوجد محتوى</p>
            ) : (
              show
            )} */}
          </Table>
        </div>
      </div>
    </>
  );
}

export default ShowReferralsToDoctor;
