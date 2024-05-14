import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbJson } from "react-icons/tb";
import { GiGears } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaAws } from "react-icons/fa";
import {
  DiNodejs,
  DiMongodb,
  DiMsqlServer,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiOracle,
  SiPostgresql,
} from "react-icons/si";
import { TbRelationOneToMany } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";

function Techstack() {
 
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">        
          <DiMsqlServer />      
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <GiGears />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbRelationOneToMany />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineFundProjectionScreen />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FcLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbJson />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>        
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>    
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
    </Row>
  );
}

export default Techstack;
