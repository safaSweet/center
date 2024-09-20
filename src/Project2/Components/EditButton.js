import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import React from 'react';
function EditButton(props) {
  return (
    <>
{/* <Link to={props.link}> */}
      <Button as="input" type="submit" value="تحديث" style={{backgroundColor:'rgb(139,188,231)'}}/>
    {/* </Link> */}
    </>
  );
}

export default EditButton;