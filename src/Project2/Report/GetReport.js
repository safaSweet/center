import React from "react";
import Submit from "../Components/Submit";
import { useState } from "react";
import axios from "axios";
import Cookies from "cookie-universal";
import { saveAs } from "file-saver";
function GetReport(props) {
  const cookies = Cookies();
  const token = cookies.get("token");
  const [form, setForm] = useState({
    year: "",
    month: "",
  });

  function handlrChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handlerSubmit(e) {
    e.preventDefault();

    try {
      axios
        .get(
          `http://127.0.0.1:8000/api/${props.path}/${form.year}/${form.month}`,
          { responseType: "blob" }
        ) //
        .then((response) => {
          const blob = new Blob([response.data], {
            type:
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
          saveAs(blob, `${props.name}`);
        })
        .catch((error) => {
          console.error("خطأ في تصدير ملف إكسل:", error);
        });
    } catch (e) {}
  }
  return (
    <><p className=" fs-3  mt-5 text-end">التقارير الشهرية</p>
      <div className="cardForm" style={{direction:'rtl'}}>
      
        <form className=" mt-5" onSubmit={handlerSubmit}>
          {/* <label htmlFor="univ">الشهر</label> */}
          <input
            required
            id="univ"
            type="text"
            className=" w-50 mb-3 form-control text-end"
            placeholder="الشهر"
            onChange={handlrChange}
            value={form.month}
            name="month"
          />
          {/* <label htmlFor="univ">السنة</label> */}
          <input
            required
            id="univ"
            type="text"
            className=" w-50 mb-3 mt-5 form-control text-end"
            placeholder="السنة"
            onChange={handlrChange}
            value={form.year}
            name="year"
          />
          
         <div style={{width:'26%'}}> <Submit/></div>
        </form>
      </div>
    </>
  );
}

export default GetReport;
