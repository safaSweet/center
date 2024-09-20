import Table from 'react-bootstrap/Table';
import React from 'react';
import { Link } from 'react-router-dom';
import {FaEllipsisV,FaRegTrashAlt,FaEdit } from "react-icons/fa";
import Typesbutton from './Typesbutton';
function Listcenter() {
  return (
    <>
    <Typesbutton name='إضافة دوام' link='/AddWorkCenter'/>
 
 <div className='cardd'>
       <Table >
      <thead >
      <tr className=' text-center '>
      <th >اليوم</th>
              <th > بداية الدوام</th>
              <th>نهاية الدوام</th>
             
              {/* <th >رقم الهاتف</th> */}
              <th > </th>
             
              </tr>
      </thead>
      <tbody>
      <tr className=' text-center'>
             
              <td></td>
              <td></td>
              <td></td>
            
              <td className=' d-flex justify-content-around'><Link exact="true" to='/ViewDoctor' ><FaEllipsisV/></Link>
              <Link exact="true" to='/ViewDoctor' ><FaEdit/></Link>
              <Link exact="true" to='/ViewDoctor' ><FaRegTrashAlt/></Link>
              </td>
               </tr>
      </tbody>
    </Table>
 </div>
 </>
  );
}

export default Listcenter;