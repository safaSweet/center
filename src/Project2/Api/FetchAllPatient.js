import React from "react";
import Cookies from "cookie-universal";

import { useEffect } from "react";
import { useState } from "react";
function FetchAllPatient() {
  const [user, setUser] = useState([]);

  const cookies = Cookies();

  const token = cookies.get("token");

  //fetch doctor
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/getAllPatient`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((e) => e.json())
      .then((e) => {
        setUser(e.data);
        console.log(e.data);
      });
  }, []);

  const options = user.map((patient, i) => (
    <option key={i} value={patient.id}>
      {patient.f_name} {patient.l_name}
    </option>
  ));
  return <>{options}</>;
}

export default FetchAllPatient;
