import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import meter4 from "../assets/images/meter4.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className='skill' id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>Skills</h2>
                            <p>My skills in Web Development</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className='item'>
                                    <img src={meter1} alt="skill percentage meter" />
                                    <h5>Frontend Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt="skill percentage meter" />
                                    <h5>Backend Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt="skill percentage meter" />
                                    <h5>Web Design</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter4} alt="skill percentage meter" />
                                    <h5>Teamwork & Communication</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}