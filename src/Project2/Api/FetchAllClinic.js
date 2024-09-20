import React from "react";
import Cookies from "cookie-universal";
import { useEffect } from "react";
import { useState } from "react";
export function FetchAllClinic() {
  const [clinic, setclinic] = useState([]);
  const cookies = Cookies();

  const token = cookies.get("token");

  //fetch doctor
  let t = useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/getAllClinic`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((e) => e.json())
      .then((e) => setclinic(e.data));
  }, []);
  console.log(t);
  const options = clinic.map((clinic, i) => (
    <option key={i} value={clinic.id}>
      {clinic.name}
    </option>
  ));
  return <>{options}</>;
}
