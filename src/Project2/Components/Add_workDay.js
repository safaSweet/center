// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { TimeClock } from '@mui/x-date-pickers/TimeClock';

import axios from "axios";
import React, { useState } from "react";
import Submit from "./Submit";

const Add_workDay = (props) => {
  const id = window.location.pathname.split("/").slice(-1)[0];

  const [formValues, setFormValues] = useState([
    { startHour: "", endHour: "", day_id: "" },
  ]);

  let handleChange = (i, e) => {
    const { name, value } = e.target;
    let newFormValues = [...formValues];
    newFormValues[i][name] = value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { startHour: "", endHour: "", day_id: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const selectedDayId = formValues[0].day_id;

    const validDayIds = ["1", "2", "3", "4", "5", "6", "7"];

    if (!validDayIds.includes(selectedDayId)) {
      console.log("خطأ: يجب تحديد يوم صحيح");
      return;
    }

    try {
      let res = await axios.post(
        `http://127.0.0.1:8000/api/${props.work}`,
        {
          reception_id: id,
          day_id: selectedDayId,
          startHour: formValues[0].startHour,
          endHour: formValues[0].endHour,
        },

        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjkwNDM2MDc3LCJleHAiOjE3MjY0MzYwNzcsIm5iZiI6MTY5MDQzNjA3NywianRpIjoiZ1BuUUtIcW1SQmFwRzY2ZSIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.dhhWwsOHFmpU_MXxoi7IND_0hwLbxg7a3PbdnYTOC9g",
          },
        }
      );
      console.log("res : ", res);
    } catch (e) {
      console.log("error ; ", e);
    }
  }
  return (
    <div style={{ margin: "156px 241px" }}>
      <form onSubmit={handleSubmit}>
        {formValues.map((element, index) => (
          <div className="form-inline mt-5" key={index}>
            {/* <label className=' ms-3'>اليوم</label> */}
            <select
              name="day_id"
              value={formValues[0].day_id}
              onChange={(e) => handleChange(0, e)}
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
              onChange={(e) => handleChange(index, e)}
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
              onChange={(e) => handleChange(index, e)}
              className="p-2 "
              style={{ borderRadius: "6px", border: "none" }}
            />
            {index ? (
              <button
                type="button"
                className="button remove"
                style={{
                  borderRadius: "20px",
                  border: "solid 1px #fbc05c",
                  color: "#fbc05c",
                }}
                onClick={() => removeFormFields(index)}
              >
                Remove
              </button>
            ) : null}
          </div>
        ))}
        <button
          className="button add p-2 m-4"
          type="button"
          style={{
            borderRadius: "20px",
            border: "solid 1px #1980c2",
            color: "#1980c2",
          }}
          onClick={() => addFormFields()}
        >
          اضافة
        </button>
        <Submit />
      </form>
    </div>
  );
};

export default Add_workDay;
{
  /* <LocalizationProvider dateAdapter={AdapterDayjs}>
<DemoContainer components={['TimeClock', 'TimeClock', 'TimeClock']}>
<DemoItem label="AM PM disabled">
    <TimeClock defaultValue={dayjs('2022-04-17T15:30')} ampm={false} />
  </DemoItem>
</DemoContainer>
</LocalizationProvider> */
}
