import React from "react";
import {
  FaEdit,
  FaEllipsisV,
  FaPhone,
  FaRegTrashAlt,
  FaSearch,
} from "react-icons/fa";
import Cookies from "cookie-universal";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function Search(props) {
  //
  const cookies = Cookies();
  const token = cookies.get("token");
  const type = cookies.get("type");

  const [form, setForm] = useState("");
  const [Users, setUsers] = useState([]);

  function handlrChange(e) {
    setForm(e.target.value);
  }

  async function handlrSubmit(e) {
    e.preventDefault();

    try {
      let res = await axios
        .post(
          `http://127.0.0.1:8000/api/searchUser`,
          { name: form },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((e) => {
          console.log(e.data.doctor);
          // setForm(e.data)
          setUsers(e.data.doctor);
        });
      // .then()

      console.log("nnmmmmmmmmmnnnnnnnnnnn", Users);
    } catch (e) {}
  }

  //delete user
  async function del(id) {
    const confirmDelete = window.confirm(
      `${id} هل أنت متأكد من أنك تريد حذف هذا العنصر؟`
    );

    if (confirmDelete) {
      try {
        await axios.post(
          `http://127.0.0.1:8000/api/${props.del}`,
          {
            id: id,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        window.location.pathname = "/Doctors";
      } catch (e) {}
    } else {
      alert("تم رفض الإجراء.");
    }
  }

  const search_show = Users.map((user, i) => (
    <tr className=" text-center" key={i}>
      <td className=" d-flex justify-content-around">
        {type == "admin" && (
          <span onClick={() => del(user.user_id)}>
            <FaRegTrashAlt />
          </span>
        )}

        <Link to={`/ShowPhonesForUser/${user.user_id}`}>
          <FaPhone />
        </Link>

        {type == "admin" && (
          <Link to={`${props.work}/${user.id}`}>{props.plus}</Link>
        )}

        {type == "admin" && (
          <Link to={`${props.edit}/${user.id}`}>
            <FaEdit />
          </Link>
        )}

        <Link to={`${props.view}/${user.id}`}>
          <FaEllipsisV />
        </Link>
      </td>

      <td>{user.user.l_name}</td>
      <td>{user.user.m_name}</td>
      <td>{user.user.f_name}</td>
      <td>{user.id}</td>
    </tr>
  ));

  return (
    <>
      <form
        className="text-center "
        style={{ marginTop: "50px" }}
        onSubmit={handlrSubmit}
      >
        <input
          className=" w-75 mt-4 mb-4 p-1"
          placeholder="Search"
          onChange={handlrChange}
          style={{ borderRadius: "25px" }}
          name="name"
        />

        <button className=" border-0 fs-5 bg-white" type="submit">
          <FaSearch />
        </button>
      </form>
      <Table>
        <thead>
          <tr className=" text-center">
            <th></th>
            <th>الكنية</th>
            <th>الاسم الثاني</th>
            <th>الاسم الأول</th>
            <th>رقمه</th>
          </tr>
        </thead>

        <tbody>{search_show}</tbody>
      </Table>
    </>
  );
}

export default Search;

//   //search

//   const [form, setForm] = useState("");
//   const [Users, setUsers] = useState([]);
//   function handlrChange(e) {
//     setForm(e.target.value);
//   }

// async function handlrSubmit(e){
//   e.preventDefault();

//     try {

//       let res = await axios.post(`http://127.0.0.1:8000/api/searchUser`,
//       {name:form},
//       {
//         headers: {
//         Authorization:
//          "Bearer " + token }
//          },
//       ).then((e)=>{
//         console.log(e.data.doctor)
//         // setForm(e.data)
//        setUsers(e.data.doctor)

//       })
//       // .then()

//       console.log("nnmmmmmmmmmnnnnnnnnnnn",Users)
//     }
//       catch(e){}
// }

// const search_show=Users.filter((e)=>{return form.toLowerCase()===""?e:e.user.university.toLowerCase().includes(form)}).map((user,i)=>(
//   <tr>
//     <td>{user.university}</td>
//       {/* <td>{user.user.m_name}</td>
//       <td>{user.user.f_name}</td> */}
//       <td>{user.id}</td>
//   </tr>
// ))
