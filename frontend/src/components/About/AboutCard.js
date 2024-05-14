import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            
            Highly accomplished professional with over <span className="purple">15+</span> years of experience in coding, <span className="purple">database design, development, integration, optimization, and maintenance </span> across Telecommunication, Broadband, Media, and Fintech sectors. Expertise includes SQL, PL/SQL, T-SQL development, data modeling, ETL, query optimization, and system analysis. Proven track record in solutions design, systems integration, migrations, and change management, project management.
            <br />
            <br />
            <span className="purple"><h3>Education</h3></span>
            <br />
            2023 - 2024
            <br />
            M.S in Computer Science | Maharishi International University | Fairfield, Iowa, US
            <br />
            <br />
            2009 - 2011
            <br />            
            M.S in Information Systems | University of Science and Technology | Ulaanbaatar, Mongolia
            <br />
            <br />
            2000 - 2004
            <br />
            B.A in Mathematics and Computer | State University of Education | Ulaanbaatar, Mongolia
            <br />

            <br />
            
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
