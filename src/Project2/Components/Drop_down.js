// import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import SplitButton from 'react-bootstrap/SplitButton';

// function DropDirectioExample() {
//   return (
//     <>
//       <div className="mb-2">
//         {['up', 'up-centered', 'down', 'down-centered', 'start', 'end'].map(
//           (direction) => (
//             <DropdownButton
//               as={ButtonGroup}
//               key={direction}
//               id={`dropdown-button-drop-${direction}`}
//               drop={direction}
//               variant="secondary"
//               title={` Drop ${direction} `}
//             >
//               <Dropdown.Item eventKey="1">Action</Dropdown.Item>
//               <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
//               <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
//               <Dropdown.Divider />
//               <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
//             </DropdownButton>
//           ),
//         )}
//       </div>

//       {/* <div>
//         {['up', 'up-centered', 'down', 'down-centered', 'start', 'end'].map(
//           (direction) => (
//             <SplitButton
//               key={direction}
//               id={`dropdown-button-drop-${direction}`}
//               drop={direction}
//               variant="secondary"
//               title={`Drop ${direction}`}
//             >
//               <Dropdown.Item eventKey="1">Action</Dropdown.Item>
//               <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
//               <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
//               <Dropdown.Divider />
//               <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
//             </SplitButton>
//           ),
//         )}
//       </div> */}
//     </>
//   );
// }

// export default DropDirectioExample;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {
   
    FaTools
  } from "react-icons/fa";
  import Cookies from "cookie-universal";
export default function Mm(props) {
	const cookies = Cookies();

	const type = cookies.get("type");
return (
	<div style={{ display: 'block',
				width: '700',
				padding: '30' ,zIndex:'10000'}}>
	{/* <h4>React-Bootstrap Dropdown Component</h4> */}
	<Dropdown >
		<Dropdown.Toggle variant="success"style={{backgroundColor:'#8bbce7',border:'none'}}>
		{props.name} {props.icon}
		</Dropdown.Toggle>
		<Dropdown.Menu>
		
		<Dropdown.Item href={`${props.link1}`}>
        {props.name1}
		</Dropdown.Item>
		<Dropdown.Item href={`${props.link2}`}>
			{props.name2}
		</Dropdown.Item>



		<Dropdown.Item href={`${props.link3}`}>
			{props.name3}
		</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>
	</div>
);
}
