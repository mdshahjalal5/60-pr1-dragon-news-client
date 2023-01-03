import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import LeftSideNav from "./LeftSideNav";
import RightSideNav from "./RightSideNav";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='2' className="d-none d-lg-block">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='7'><Outlet></Outlet></Col>
                    <Col lg='3'>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Main;