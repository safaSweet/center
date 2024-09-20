import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link , useNavigate} from 'react-router-dom';
function Typesbutton(props) {
  // const nav=useNavigate();
  return (
    <>
      <Button style={{backgroundColor:'#8bbce7', marginLeft:'10px', border:'none'}} > 
      
     <Link exact="true" to={props.link} style={{color:'white'}}> {props.name}</Link>
     
           </Button>
    </>
  );
}

export default Typesbutton;