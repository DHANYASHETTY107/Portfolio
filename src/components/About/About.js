import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard
              name="Dhanya Ramesh Shetty"
              description="I am an Information Science and Engineering student passionate about Web Development, Artificial Intelligence, and Machine Learning. With a CGPA of 9.56 and hands-on experience in multiple academic and personal projects, I bring creativity and strong technical skills to problem-solving and product building."
              email="dhanyashetty710@gmail.com"
              linkedIn="https://www.linkedin.com/in/dhanya-shetty-35263526a"
              github="https://github.com/DHANYASHETTY107"
              Instagram="https://www.instagram.com/dhanyashetty01"
              education={[
                "Sahyadri College of Engineering & Management (2022-2026) – CGPA: 9.56",
                "Govt H Benne PU College, Nellikeri – 92.83%",
                "Janata Vidyalaya Kadatoka, Honnavar – 92.62%",
              ]}
              interests={["Web Development", "AI/ML", "Travel", "Dancing", "Sports"]}
            />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;