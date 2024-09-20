// import React from "react";

// import Submit from "../Components/Submit";
// import Loading from "../Components/Loading";
// import Log from "../Css/Login.module.css";
// import { Card } from "react-bootstrap";

// const Login = (props) => {
//   const image1 = require("../Image/Screenshot Login1.png");
//   return (
//     <>
//       {props.loading && <Loading />}
//       <div className="row bg-white">
//         <img
//           className="img col-8 w-50"
//           src={image1}
//           alt=""
//           style={{ minHeight: "640px" }}
//         />
//         <div className="col-2"></div>
//         <div className="col-4 border-3 ">
//           <form className={Log.form} onSubmit={props.handleSubmit}>
//             <p className=" pb-5 fs-4 text-center fw-bold">تسجيل الدخول</p>
//             <input
//             required
//               className=" form-control mb-3"
//               type={"text"}
//               placeholder="الاسم الكامل"
//               value={props.full_name}
//               name="full_name"
//               onChange={props.handlechange}
//             />
//             <input
//             required
//               className=" form-control mb-4"
//               type={"password"}
//               placeholder="كلمة المرور"
//               value={props.password}
//               name="password"
//               onChange={props.handlechange}
//             />

//             <Submit />

//             {props.emailErr !==""&&
//             <span className="error">{props.emailErr}</span>
//             }

//           </form>
//         </div>
//       </div>

//     </>
//   );

// };

// export default Login;
import React from "react";
import Loading from "../Components/Loading";
import { Container, Card, Row, Col, Form } from "react-bootstrap";
import Submit from "../Components/Submit";

function Login(props) {
  const image = require("../Image/log11.webp");
  
  return (
    <Container className="my-5">
      {props.loading && <Loading />}
      <Card>
        <Row className="g-0" style={{ height: "505px" }}>
          <Col md="6">
            <Card.Img
              src={image}
              alt="login form"
              className="rounded-start w-75 h-100"
            />
          </Col>
          <Col md="6">
            <Card.Body className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <i
                  className="fas fa-cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                ></i>
              </div>
              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>
              <form onSubmit={props.handleSubmit}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    size="lg"
                    required
                    className=" form-control mb-3"
                    type="text"
                    placeholder="الاسم الكامل"
                    value={props.full_name}
                    name="full_name"
                    onChange={props.handlechange}
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    size="lg"
                    required
                    className=" form-control mb-4"
                    placeholder="كلمة المرور"
                    value={props.password}
                    name="password"
                    onChange={props.handlechange}
                  />
                </Form.Group>
                <Submit />
                {props.emailErr !== "" && (
                  <span className="error">{props.emailErr}</span>
                )}
              </form>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Login;
