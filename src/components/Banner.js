import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md="6" xl="7">
            <span>Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Besnik`}
              <span className="wrap">Full-stack web Developer</span>
            </h1>
            <p>
              I am currently a junior full stack developer with skills in HTML,
              CSS, JavaScript and Python coding languages. I have experience in
              databases such as SQL, MongoDB, frameworks such as Bootstrap,
              Flask and Django. I have also worked with Amazon AWS S3 storage
              systems. I have experience in working with API's and linking them
              to websites.
            </p>
            <button onClick={() => console.log('connect')}>Let's Connect <BsArrowRightCircle /></button>
          </Col>
          <Col xs={12} md="6" xl="5">
            <img alt="header image"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
