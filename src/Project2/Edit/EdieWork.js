import * as React from "react";
import { useState } from "react";
import axios from "axios";

import Cookie from "cookie-universal";
import Submit from "../Components/Submit";
import { useEffect } from "react";
import EditButton from "../Components/EditButton";

function EdieWork() {
  const id = window.location.pathname.split("/").slice(-1)[0];
  const idResption = window.location.pathname.split("/")[
    window.location.pathname.split("/").length - 2
  ];
  const cookie = Cookie();
  const token = cookie.get("token");

  const [formValues, setFormValues] = useState([
    { startHour: "", endHour: "", day_id: "" },
  ]);
  const [work, setWork] = useState([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    let res = axios
      .post(
        "http://127.0.0.1:8000/api/showWoringHoursForReception ",
        { reception_id: id },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((e) => {
        console.log(e.data.data);
        setWork(e.data.data);
      });
  }, []);

  function handleChange_start(e) {
    setStart(e.target.value);
  }
  function handleChange_end(e) {
    setEnd(e.target.value);
  }
  function handleChange_day(e) {
    setDay(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const selectedDayId = formValues[0].day_id;

    const validDayIds = ["1", "2", "3", "4", "5", "6", "7"];

    if (!validDayIds.includes(selectedDayId)) {
      console.log("خطأ: يجب تحديد يوم صحيح");
      return;
    }

    try {
    } catch (e) {
      console.log("error ; ", e);
    }
  }

  return (
    <div style={{ margin: "156px 241px" }}>
      <form onSubmit={handleSubmit}>
        {formValues.map((element, index) => (
          <div className="form-inline mt-5" key={index}>
            <select
              name="day_id"
              value={formValues[0].day_id}
              onChange={handleChange_day}
              className="p-2"
              style={{ borderRadius: "4px" }}
            >
              <option value="1">Sunday</option>
              <option value="2">Monday</option>
              <option value="3">Tuesday</option>
              <option value="4">Wednesday</option>
              <option value="5">Thursday</option>
              <option value="6">Friday</option>
              <option value="7">Saturday</option>
            </select>

            <label
              className=" ms-3"
              style={{
                backgroundColor: "rgb(139,188,231)",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              بداية الدوام
            </label>

            <input
              type="text"
              name="startHour"
              value={formValues.startHour}
              onChange={handleChange_start}
              className=" p-2"
              style={{ borderRadius: "6px", border: "none" }}
            />
            <label
              className=" ms-3"
              style={{
                backgroundColor: "rgb(139,188,231)",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              نهاية الدوام
            </label>
            <input
              type="text"
              name="endHour"
              value={formValues.endHour}
              onChange={handleChange_end}
              className="p-2 "
              style={{ borderRadius: "6px", border: "none" }}
            />
          </div>
        ))}

        <EditButton />
      </form>
    </div>
  );
}

export default EdieWork;
