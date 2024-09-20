import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "cookie-universal";

function FetchAllUsers() {
  const cookies = Cookies();

  const token = cookies.get("token");
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/allUser`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((e) => e.json())
      .then((e) => {
        setUser(e.data);
        console.log(e.data);
      });
  }, []);

  const show = user.map((u, i) => (
    <option key={i} value={u.id}>
      {u.full_name}
    </option>
  ));

  return <>{show}</>;
}

export default FetchAllUsers;
