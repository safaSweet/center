import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "cookie-universal";
import { Table } from "react-bootstrap";

function EditQueueVisit() {
    const id = window.location.pathname.split("/").slice(-1)[0];
    const cookie = Cookies();
    const token = cookie.get("token");
    const[appoint,setAppoint]=useState({

    });
    
  return (
    <>

    </>
  )
}

export default EditQueueVisit