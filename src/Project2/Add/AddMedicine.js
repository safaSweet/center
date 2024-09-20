import React, { useState } from "react";

const AddM = () => {
  const [formValues, setFormValues] = useState([
    { start: "", end: "", day: "" },
  ]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { start: "", end: "", day: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <form onSubmit={handleSubmit}>
      {formValues.map((element, index) => (
        <div className="form-inline mt-5" key={index}>
         
          <label
            className=" ms-3"
            style={{
              backgroundColor: "rgb(139,188,231)",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
         اسم الدواء
          </label>
          <input
            type="Time"
            name="start"
            value={element.name || ""}
            onChange={(e) => handleChange(index, e)}
            className=" p-2"
            style={{ borderRadius: "6px", border: "none" }}
          />
           <label className=" ms-3"
            style={{
              backgroundColor: "rgb(139,188,231)",
              borderRadius: "3px",
              padding: "7px",
            }}>نوع الدواء</label> 
         <select name="day" className="p-2" style={{borderRadius:'4px'}}>
            <option value="Sunday">شراب</option>
            <option value="Monday">حب</option>
            <option value="Tuesday">مرهم</option>
         
            <option value="Saturday">إبر</option>
          </select>
          <label
            className=" ms-3"
            style={{
              backgroundColor: "rgb(139,188,231)",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
         وقت الدواء
          </label>
          <input
            type="Time"
            name="end"
            value={element.email || ""}
            onChange={(e) => handleChange(index, e)}
            className="p-2 "
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
      فترة الدواء
          </label>
          <input
            type="Time"
            name="end"
            value={element.email || ""}
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
      {/* <button className="button submit" type="submit">Submit</button> */}
      {/* </div> */}
    </form>
  );
};

export default AddM;
