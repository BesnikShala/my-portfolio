import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/images/logo.png';
import {
    TiSocialLinkedinCircular,
    TiSocialGithubCircular,
  } from "react-icons/ti";


export const Footer = () => {
  return (
    <footer className="footer" alt="logo">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/besnik-shala-a5045910a/"
                target="_blank">
                <TiSocialLinkedinCircular style={{ color: "white" }} />
              </a>
              <a href="https://github.com/BesnikShala" target="_blank">
                <TiSocialGithubCircular style={{ color: "white" }} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
