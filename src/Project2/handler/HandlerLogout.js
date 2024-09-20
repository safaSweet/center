import React from "react";
import axios from "axios";
import Cookies from "cookie-universal";

function HandlerLogout() {
  const cookies = Cookies();
  const token = cookies.get("token");
  async function handlLogout() {
    let res = await axios.post("http://127.0.0.1:8000/api/logout", null, {
      headers: { Authorization: "Bearer " + token },
    });
  }
  cookies.remove("token");
  window.location.pathname = "/login";
}

export default HandlerLogout;
