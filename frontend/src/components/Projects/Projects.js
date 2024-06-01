import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/Buyantugs/cs489-project/blob/main/frontend/src/Assets/images/Stack/Billing-Overview.PNG?raw=true"
              isBlog={false}
              title="Billing System Modernization"
              description="Administered the modernization of complex Billing & Order Management systems using top-tier vendor solutions, ensuring enhanced core system reliability, and secured its lifetime of usage 5 more years."              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/Buyantugs/cs489-project1/blob/main/MarketCampaign.jpg?raw=true"
              isBlog={false}
              title="Market Campaign Management System"
              description="Orchestrated the integration of a micro-market campaign service and mobile subscribers data, leading to a $30K increase in monthly product sales revenue."      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Buyantugs/cs489-project1/main/DWH-Project.png"
              isBlog={false}
              title="DWH"
              description="Implemented a Data Warehouse (DWH) system using real-time ETL technologies, and Power-BI enabling real-time reporting capability to executives."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/Buyantugs/cs489-project1/blob/main/CallCenterProject.jpg?raw=true"
              isBlog={false}
              title="Call Center system renewal"
              description="Involved in a contact center system modernization project by Genesys product, integrated existing CRM, CTI, IVR systems enabled skill-based call routing feature, reduced agent headcount seat 10%."              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/Buyantugs/cs489-project1/blob/main/OTT-Project.jpg?raw=true"
              isBlog={false}
              title="OTT Project"
              description="Installed and integrated a new Over the Top (OTT) media streaming service platform, introducing a brand-new product and establishing a new business line within the company. Achieved 60K paid subscribers in the first year."             
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
