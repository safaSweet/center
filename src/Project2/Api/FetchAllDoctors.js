import React from "react";
import Cookies from "cookie-universal";
import { useEffect } from "react";
import { useState } from "react";
export function FetchAllDoctors() {
  const [user, setUser] = useState([]);
  const cookies = Cookies();

  const token = cookies.get("token");

  //fetch doctor
  let t = useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/getAllDoctor`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((e) => e.json())
      .then((e) => setUser(e.data));
  }, []);
  console.log(t);
  const options = user.map((doctor, i) => (
    <option key={i} value={doctor.id}>
      {doctor.full_name}
    </option>
  ));
  return <>{options}</>;
}
