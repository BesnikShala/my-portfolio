import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import profileImg from "../assets/images/profile.jpeg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Full-stack Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(350);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={6} xl={7}>
            <span>Hi, my name is</span>
            <h1>{`Besnik Shala `}</h1>
            <h2>
              <span>I'm a </span>
              <span className="wrap">{text}</span>
            </h2>
            <p>
              I am currently a junior full stack developer with skills in HTML,
              CSS, JavaScript and Python coding languages. I have experience in
              databases such as SQL, MongoDB, frameworks such as Bootstrap,
              Flask and Django. I have also worked with Amazon AWS S3 storage
              systems. I have experience in working with API's and linking them
              to websites.
            </p>
            <Router>
              <HashLink to='#connect'>
                <button>
                  Let's Connect <BsArrowRightCircle />
                </button>
              </HashLink>
            </Router>
          </Col>
          <Col sm={12} md={6} xl={5} className="profile-img">
            <img src={profileImg} alt="header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
