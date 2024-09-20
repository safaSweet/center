import React from 'react'
import Search from '../Search'
import {  FaEllipsisV} from "react-icons/fa";
function SearchDoctor() {
  return (
    <>
        <Search
        plus=<FaEllipsisV/>
        path="getAllDoctor"
        view="/Doctors/ViewDoctor"//"/Doctors/ViewDoctor/:id"
        add=""
        edit="/Doctors/EditDoctor"//"/EditDoctor"
        del="deleteDoctore"
        name_button="اضافة طبيب"
        link_button="/AddDoctor"
        work="/Doctors/showReferralsToDoctor"
        />
    </>
  )
}

export default SearchDoctor