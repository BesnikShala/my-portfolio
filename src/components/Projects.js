import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projectImg1 from "../assets/images/projectImg1.jpeg";
import projectImg2 from "../assets/images/projectImg2.jpeg";

export const Projects = () => {
  const projects = [
    {
      title: "BeFitness E-Commerce",
      description:
        "A milestone project created with Python and Django Framework, including user account and authentication. Completed with Stripe payments and using Amazon AWS S3 for storage",
      imgUrl: projectImg1,
      siteUrl: "https://befitness-ms4.herokuapp.com/",
    },
    {
      title: "Founder Property Ltd",
      description:
        "My first real world project for a local construction company. Site built using Python and Django Framework",
      imgUrl: projectImg2,
      siteUrl: "https://www.founderproperty.co.uk/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here you can see my project portfolio of my work</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="/home">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
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
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                        key={index}
                        {...project}
                        />
                      )
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">

                </Tab.Pane>
                <Tab.Pane eventKey="third">

                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
