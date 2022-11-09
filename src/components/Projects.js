import { Container, Row, Col } from "react-bootstrap";

export const Projects = () => {
    const projects = [
        {
            title: "BeFitness E-Commerce",
            description: "A milestone project created with Python and Django Framework, including user account and authentication. Completed with Stripe payments and using Amazon AWS S3 for storage",
            imgUrl: projectImg1,
        },
        {
            title: "Founder Property Ltd",
            description: "My first real world project for a local construction company. Site built using Python and Django Framework",
            imgUrl: projectImg2,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Here you can see my project portfolio of my work</p>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}