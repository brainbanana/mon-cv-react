import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isServicesPage = location.pathname.toLowerCase().includes("services");

  return (
    <footer className="bg-dark py-4 border-top mt-auto">
      <Container fluid>
        <Row className="align-items-center">

          {/* Logos à gauche */}
          <Col xs={12} md={4} className="text-start mb-2 mb-md-0">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <FaLinkedin className="fs-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <FaGithub className="fs-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaTwitter className="fs-5" />
            </a>
          </Col>

          {/* Copyright et Mentions légales */}
          <Col xs={12} md={4} className="text-center justify-content-center align-items-center gap-3 mb-2 mb-md-0">
            {isServicesPage && (
              <Link to="/mentions" className="text-decoration-none text-white small">
                → Mentions légales
              </Link>
            )}
            <p className="mb-0 text-white">© 2026</p>

          </Col>

          {/* Colonne vide pour équilibrer */}
          <Col md={4}></Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
