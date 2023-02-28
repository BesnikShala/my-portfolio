import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectImg1 from "../assets/images/projectImg1.jpeg";
import projectImg2 from "../assets/images/projectImg2.jpeg";
import exercise from '../assets/images/exercise.jpeg'
import recipiy from '../assets/images/recipiy.jpeg';
import lothailand from '../assets/images/lothailand.jpeg';
import prestige from '../assets/images/prestige.jpeg';

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
    {
      title: "Exercise App",
      description:
        "A fitness site for people to search exercises with Rapid-Api. Gif demonstrations and youtube videos via Youtube-Api",
      imgUrl: exercise,
      siteUrl: "https://exercises-api.netlify.app/",
    },
  ];

  const project2 = [
    {
      title: "Recipiy",
      description:
        "Recipe sharing site. Made with Python and Flask, database created with MongoDB",
      imgUrl: recipiy,
      siteUrl: "web-production-066d.up.railway.app",
    },
    {
      title: "Lost In Thailand project",
      description:
        "Travel information site based on my trip to Thailand. Main focus using JavaScript to manipulate elements. Learned how to implement Google Maps API and set up emails with EmailJS",
      imgUrl: lothailand ,
      siteUrl: "lost-in-thailand-ms2-project-production.up.railway.app",
    },
    {
      title: "Prestige Automotive",
      description:
        "Static site fully responsive using HTML, CSS and JavaScript. Learned how to structure style and manipulate elements using JavaScript and introduce google maps API",
      imgUrl: prestige ,
      siteUrl: "https://besnikshala.github.io/Milestone-project-1/",
    },
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here you can see my project portfolio of my work</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                <Row>
                    {project2.map((project, index) => {
                      return (
                        <ProjectCard
                        key={index}
                        {...project}
                        />
                      )
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">

                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
