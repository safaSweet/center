import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import React from 'react';
function Submit(props) {
  return (
    <>
{/* <Link to={props.link}> */}
      <Button as="input" type="submit" value="حفظ" style={{backgroundColor:'rgb(139,188,231)'}}/>
    {/* </Link> */}
    </>
  );
}

export default Submit;