import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPalette, FaCode, FaSearch } from "react-icons/fa";


function Services() {
  return (
    <Container className="py-5">

      <h2 className="mb-4 text-center">Mon offre de Services</h2>
        <p>voici les prestations sur lesquelles je peux intervenir.</p>
      <Row className="g-4">

        {/* UX Design */}
        <Col xs={12} md={4}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Body>
              <FaPalette size={40} className="mb-3 text-primary" />
              <Card.Title>UX Design</Card.Title>
              <Card.Text>
                Conception d’interfaces modernes, intuitives et centrées
                sur l’expérience utilisateur.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Développement Web */}
        <Col xs={12} md={4}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Body>
              <FaCode size={40} className="mb-3 text-success" />
              <Card.Title>Développement Web</Card.Title>
              <Card.Text>
                Création de sites web performants, responsives et optimisés
                avec les technologies modernes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Référencement */}
        <Col xs={12} md={4}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Body>
              <FaSearch size={40} className="mb-3 text-warning" />
              <Card.Title>Référencement</Card.Title>
              <Card.Text>
                Optimisation SEO pour améliorer la visibilité
                et le positionnement sur les moteurs de recherche.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  );
}

export default Services;