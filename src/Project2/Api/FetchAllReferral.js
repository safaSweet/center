import React from "react";
import Cookies from "cookie-universal";
import { useEffect } from "react";
import { useState } from "react";

function FetchAllReferral() {
  // http://127.0.0.1:8000/api/showReferralToEntitiy
  const [ref, setRef] = useState([]);
  const cookies = Cookies();

  const token = cookies.get("token");

  //fetch doctor
  let t = useEffect(() => {
    fetch(` http://127.0.0.1:8000/api/getAllReferralEntitiy`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((e) => e.json())
      .then((e) => setRef(e.data));
  }, []);
  console.log(t);
  const options = ref.map((ref, i) => (
    <option key={i} value={ref.id}>
      {ref.name}
    </option>
  ));
  return <>{options}</>;
}

export default FetchAllReferral;
