import React from 'react';
import Card from 'react-bootstrap/Card';

function CarddDash(props) {
  return (
    <Card className='col p-0 ms-1'>
      <Card.Header className="text-end" style={{ backgroundColor: `${props.color}`}}> {props.name}</Card.Header>
      <Card.Body>
      <p className=" d-flex justify-content-between p-2">
              <div style={{ color: `${props.color}`,fontSize:'20px' }} >
                {props.icon}
              </div>
              <span>5</span>
            </p>
        
      </Card.Body>
    </Card>
  );
}

export default CarddDash;