import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Images
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import greencart from "../../Assets/Projects/greencart.png"; // ✅ Your new image

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Tailor Shop Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tailor Shop Management System"
              description="A web-based system that helps tailoring businesses manage customer orders, employee assignments, and delivery timelines. Developed with HTML5, CSS, and PHP."
              ghLink="https://github.com/DHANYASHETTY107/TAILOR-SHOP-MANAGEMENT-SYSTEM"
              demoLink=""
            />
          </Col>

          {/* Pothole Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Pothole Detection using Deep Learning"
              description="Automated pothole detection using Python and OpenCV with a trained deep learning model. Helps in identifying road damages from images for smart infrastructure development."
              ghLink="https://github.com/DHANYASHETTY107/Pothole_Detection"
              demoLink=""
            />
          </Col>

          {/* Green Cart */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={greencart} // ✅ Correct image now used
              isBlog={false}
              title="Green Cart – Online Grocery Shopping"
              description="A full-stack MERN grocery shopping app where users can browse products, place orders, and track deliveries. Built using MongoDB, Express.js, React.js, and Node.js."
              ghLink="https://github.com/ShubhamDigole/Fruit-shopping-cart"
              demoLink="" // Add a live link if available
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
