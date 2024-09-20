import React from "react";
import Cookies from "cookie-universal";
import "../Css/Card.css";
import { Link } from "react-router-dom";
import Typesbutton from "../Components/Typesbutton";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../Components/Loading";

function ListClinic() {
  const cookies = Cookies();
  const [loading, setLoading] = useState(false);

  const image1 = require("../Image/17212.png");

  const token = cookies.get("token");
  const type = cookies.get("type");
  const [clincs, setClinics] = useState([]);

  useEffect(() => {
    
    try{
      
    let b = fetch("http://127.0.0.1:8000/api/getAllClinic",  {

      headers: { Authorization: "Bearer " + token },
      
    },)
      .then((e) => e.json() )
     
      .then((e) => { 
        
        setClinics(e.data);    
      });
    console.log(b);
    setLoading(false);
    console.log(loading)}
    
    catch(e){

      setLoading(false);
      console.log(loading)
      console.log(e)
    }
  }, []);

  const show = clincs.map((clinic, id) => (
    <div className="col-4 p-3" key={clinic.id}>
      <span key={id} className=" p-1 fs-5" style={{ fontWeight: "500" }}>
        <Link to={`/ListClinic/ViewClinic/${clinic.id}`}>{clinic.name}</Link>
      </span>
      <img
        className=""
        style={{ borderRadius: "5px", width: "27%" }}
        src={image1}
        alt="..."
      />
    </div>
  ));

  return (
    <>
    {loading&&<Loading/>
   }
      <div className="cardd">
        {type == "admin" && (
          <div className="d-flex justify-content-end mb-5">
            <Typesbutton name="إضافة طبيب الى عيادة" link="/DoctorClinic" />

            <Typesbutton name="إضافة عيادة" link="/AddClinic" />
          </div>
        )}
        <div className=" row text-end" style={{ overflowY: "auto" }}>
         
          {clincs.length == 0 ? (
            <p className=" text-center fs-2 mt-5">لا يوجد محتوى</p>
          ) : (
            show
          )}
        </div>
      </div>
    </>
  );
}

export default ListClinic;
