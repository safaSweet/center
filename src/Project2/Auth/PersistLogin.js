import axios from "axios";
import React from "react";
import { useContext } from "react";
import { User } from "../Context/Context";
import { useState } from "react";
import Loading from "../Components/Loading";
import Cookie from "cookie-universal";
import { useEffect } from "react";
import { Outlet } from "react-router";
function PersistLogin() {
  const [loading, setLoading] = useState(true);
  const context = useContext(User); // fetch user
  const token = context.auth.token;

  const cookie = Cookie();
  const cookie_token = cookie.get("token");
  useEffect(() => {
    async function refresh(e) {
      try {
        let res = await axios
          .post("http://127.0.0.1:8000/api/refresh", null, {
            headers: { Authorization: "Bearer " + cookie_token },
          })
          .then((data) =>
            context.setAuth((prev) => {
              return { ...prev, token: data.data.token };
            })
          );
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    !token ? refresh() : setLoading(false);
  }, []);

  return loading ? <Loading /> : <Outlet />;
}

export default PersistLogin;
