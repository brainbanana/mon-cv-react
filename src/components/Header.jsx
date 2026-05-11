import { Container } from "react-bootstrap";

function Header() {
  return (
    <header className="bg-light py-5 border-bottom ">
      <Container className="text-center">
        <h1 className="mb-3">En formation </h1>
        <p className="lead">Développeur Web Full stack</p>
      </Container>
    </header>
  );
}

export default Header;
