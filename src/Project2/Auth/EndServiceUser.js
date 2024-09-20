import React from 'react'
import FetchAllUsers from '../Api/FetchAllUsers'
import Submit from '../Components/Submit'
import { useState } from 'react'
import axios from 'axios';
import Cookies from "cookie-universal";
import ServiceUser from './ServiceUser';
function EndServiceUser() {
  

  return (
    <>
      <ServiceUser path="endServiceUser" text="انهاء خدمة موظف"/>
    </>
  )
}

export default EndServiceUser