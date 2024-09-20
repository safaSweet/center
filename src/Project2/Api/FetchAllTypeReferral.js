import React from "react";
import Cookies from "cookie-universal";
import { useEffect } from "react";
import { useState } from "react";

function FetchAllTypeReferral() {
  // http://127.0.0.1:8000/api/showReferralToEntitiy
  const [ref, setRef] = useState([]);
  const cookies = Cookies();

  const token = cookies.get("token");

  //fetch doctor
  let t = useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/getAlltypeReferral`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((e) => e.json())
      .then((e) => setRef(e));
  }, []);
  console.log(t);
  const options = ref.map((clinic, i) => (
    <option key={i} value={clinic.id}>
      {clinic.name}
    </option>
  ));
  return (
    <>
      {/* {ref.length == 0 ? (
              <p className=" text-center fs-2 mt-5">لا يوجد محتوى</p>
            ) : (
              options
            )} */}
      {options}
    </>
  );
}

export default FetchAllTypeReferral;
