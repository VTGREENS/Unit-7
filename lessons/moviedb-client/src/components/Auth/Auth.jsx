import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { Col, Container, Row } from "reactstrap";

const Auth = (props) => {
    return (  
        <>
        <h2></h2>
        <Container>
            <Row>
                <Col md="6">
            <Signup updateToken={props.updateToken}/>
                </Col>
            <Col md="6">   
            <Login updateToken={props.updateToken} />
            </Col>
        </Row>
        </Container>
        </>
    );
}
 
export default Auth;