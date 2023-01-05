import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { Col, Container, Row } from "reactstrap";

const Auth = (props) => {
    return (  
        <>
        <h2>Hello from Auth</h2>
        <Container>
            <Row>
                <Col md="6">
            <Signup />
                </Col>
            <Login />

            </Row>
        </Container>
        </>
    );
}
 
export default Auth;