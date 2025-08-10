import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Dhanya Ramesh Shetty,</span> an Information Science and Engineering student at <span className="purple">Sahyadri College of Engineering & Management</span>, Mangalore.
            <br />
            <br />
            I am passionate about <b className="purple">Web Development, Artificial Intelligence, and Machine Learning.</b> I love building projects that solve real-world problems and enhance user experience.
            <br />
            <br />
            <b>Academic Highlights:</b>
            <ul>
              <li>CGPA: <b className="purple">9.56</b></li>
              <li>PUC: 92.83% – Govt H Benne PU College, Nellikeri</li>
              <li>SSLC: 92.62% – Janata Vidyalaya Kadatoka, Honnavar</li>
            </ul>
          </p>
          <p style={{ textAlign: "justify" }}>
            Some technologies and tools I’ve worked with include:
            <ul>
              <li>Languages: C, Java, Python</li>
              <li>Web: HTML, CSS, JavaScript, React.js, Node.js, Express.js</li>
              <li>Database: MongoDB, MySQL</li>
              <li>Tools: Git, VS Code, Eclipse, IntelliJ, NetBeans</li>
            </ul>
          </p>
          <p style={{ textAlign: "justify" }}>
            I am also an <b className="purple">NSS volunteer</b> and have participated in events like <b>TechVision-25</b>, gaining experience in project presentation and community involvement.
          </p>
          <p>Outside of academics, I enjoy:</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep exploring, keep building!"{" "}
          </p>
          <footer className="blockquote-footer">Dhanya Shetty</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard; 