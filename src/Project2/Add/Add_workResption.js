import * as React from "react";
import { useState } from "react";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';

import axios from "axios";

import Cookie from "cookie-universal";
import Submit from "../Components/Submit";

const Add_workResption = (props) => {
  const id = window.location.pathname.split("/").slice(-1)[0];

  const cookie = Cookie();
  const token = cookie.get("token");

  const [formValues, setFormValues] = useState(
    { startHour: "", endHour: "", day_id: "" },
  );

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

 

  async function handleSubmit(e) {
    e.preventDefault();
    const selectedDayId = formValues.day_id;

    const validDayIds = ["1", "2", "3", "4", "5", "6", "7"];

    if (!validDayIds.includes(selectedDayId)) {
      console.log("خطأ: يجب تحديد يوم صحيح");
      return;
    }

    try {
      let res = await axios.post(
        `http://127.0.0.1:8000/api/addWorkingHoursToReception`,
        {
          reception_id: id,
          day_id: selectedDayId,
          startHour: formValues.startHour,
          endHour: formValues.endHour,
        },

        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log("res : ", res);
      window.location.pathname = "/ListSecretary";
    } catch (e) {
      console.log("error ; ", e);
    }
  }
  return (
    <div className="cardForm">
      <form onSubmit={handleSubmit}>
        {/* {formValues.map((element, index) => ( */}
          {/* <div className="form-inline mt-5" > */}
            {/* <label className=' ms-3'>اليوم</label> */}
            <select
              name="day_id"
              value={formValues.day_id}
              onChange={handleChange}
              className="p-2"
              style={{ borderRadius: "4px" }}
            >
            <option> اختر يوم</option>
              <option value="1">Sunday</option>
              <option value="2">Monday</option>
              <option value="3">Tuesday</option>
              <option value="4">Wednesday</option>
              <option value="5">Thursday</option>
              <option value="6">Friday</option>
              <option value="7">Saturday</option>
            </select>

            <label
            htmlFor="mm"
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
            id="mm"
              type="text"
              name="startHour"
              value={formValues.startHour}
              onChange={handleChange}
              className=" p-2"
              style={{ borderRadius: "6px", border: "none" }}
            />
            <label
            htmlFor="oo"
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
            id="oo"
              type="text"
              name="endHour"
              value={formValues.endHour}
              onChange={handleChange}
              className="p-2 "
              style={{ borderRadius: "6px", border: "none" }}
            />
           
         
        <Submit />
      </form>
    </div>
  );
};

export default Add_workResption;
