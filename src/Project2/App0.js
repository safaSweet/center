import React, {  useState } from "react";
import Login from "./Auth/Login";
import App from "./App";
import Cookie from "cookie-universal";
import axios from "axios";

function App0() {
  const [loading, setLoading] = useState(false);
  const cookie = Cookie();
  const [emailErr, setEmailErr] = useState();
  const [form, setform] = useState({
    full_name: "",
    password: "",
  });

  function handleChange(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/login",
        form
      );

      const token = res.data.access_token;
      const detail = res.data.user;
      const email = res.data.user.email;
      const type = res.data.user.type;
      const full_name = res.data.user.full_name;
     
      cookie.set("token", token);
      cookie.set("details", detail);
      cookie.set("email", email);
      cookie.set("full_name", full_name);
      cookie.set("type", type);
      cookie.set("isLogin", true);
     

      window.alert("تم التسجيل بنجاح");

      setLoading(false);
      // window.location.pathname='/ListClinic'
    
    } catch (error) {
      setLoading(false);

      if (error.response && error.response.status === 401) {
        
        setEmailErr("يوجد خطأ في اسم المستخدم او كلمة المرور");
      }
    }
  }
  const isLog = cookie.get("isLogin");

  return (
    <>
      {!isLog ? (
        <Login
          handleSubmit={handleSubmit}
          handlechange={handleChange}
          full_name={form.full_name}
          password={form.password}
          loading={loading}
          emailErr={emailErr}
        />
      ) : (
        <>
          <App />
        </>
      )}
    </>
  );
}

export default App0;
