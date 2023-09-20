import React from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaFileDownload,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { ImageHolder, ProfileButton } from "../../components";
import {
  ProfessionalHeadshot,
  FallbackProfessionalHeadshot,
  HomeBackground,
} from "../../assets";
import styles from "./Home.module.css";
import resume from '../../assets/Naveen_Kommuri.pdf';

const Home = () => {
  return (
    <Container
      fluid
      className={styles.container}
      style={{ background: `url(${HomeBackground})` }}
    >
      <Row>
        <ImageHolder
          primarySource={ProfessionalHeadshot}
          secondarySource={FallbackProfessionalHeadshot}
          alt="Professional Headshot of Naveen Kommuri"
          className={styles.professionalHeadshot}
        />
      </Row>
      <Row>
        <Col>
          <span className={`${styles.textWhite} ${styles.headingOne}`}>
            Naveen Kommuri
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span className={`${styles.textWhite} ${styles.headingThree}`}>
            Software Engineer, Full-Stack Developer
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="https://github.com/Naveenkommuri12" target="_blank_">
            <FaGithubSquare className={styles.icon} />
          </a>
        </Col>
        <Col>
          <a href="https://www.linkedin.com/in/naveenkommuri" target="_blank_">
            <FaLinkedin className={styles.icon} />
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProfileButton
            logo={<FaFileDownload className={styles.iconSmall} />}
            href={resume}
            download="Naveen_Kommuri.pdf"
          >
            Résumé
          </ProfileButton>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
