
import React, { useState } from "react";
import axios from "axios";
import Cookie from "cookie-universal";
import Submit from "../Components/Submit";

const Add_workDoctor = (props) => {
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
        `http://127.0.0.1:8000/api/addWorkingHoursToDoctore`,
        {
          ClinicDoctor_id: id,
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
  
      window.alert("تمت الإضافة بنجاح");
  
      // تحديث حالة حقول الإدخال لتكون فارغة
      setFormValues({ startHour: "", endHour: "", day_id: "" });
  
   
    } catch (e) {
      console.log("error ; ", e);
    }
  }
  return (
    <div className="row  cardForm" >

      <form onSubmit={handleSubmit}>
     
        
         
              <select
              required
                name="day_id"
                value={formValues.day_id}
                onChange={handleChange}
                className="p-2 "
                style={{ borderRadius: "4px" , marginRight:'75px'}}
              >
                <option>اختر يوم</option>
                <option value="1">الأحد</option>
                <option value="2">الاثنين</option>
                <option value="3">الثلاثاء</option>
                <option value="4">الأربعاء</option>
                <option value="5">الخميس</option>
                <option value="6">الجمعة</option>
                <option value="7">السبت</option>
              </select>
           

            <label
            htmlFor="sH"
              className="col"
              style={{
                backgroundColor: "rgb(139,188,231)",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              بداية الدوام
            </label>
            <input
            id="sH"
            required
              type="text"
              name="startHour"
              value={formValues.startHour}
              onChange={handleChange}
              className=" p-2"
              style={{ borderRadius: "6px", border: "none" }}
            />

            




            <label
            htmlFor="eeH"
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
            id="eeH"
            required
              type="text"
              name="endHour"
              value={formValues.endHour}
              onChange={handleChange}
              className="p-2 "
              style={{ borderRadius: "6px", border: "none" }}
            />
         
       
<br/>
<br/>
<br/>
<br/>
<br/>
        <Submit />
      </form>
    </div>
  );
};

export default Add_workDoctor;

