import { Container, Accordion } from "react-bootstrap";
import { useEffect } from "react";

function Mentions() {

useEffect(() => {
  document.title = "Mentions légales - David Sacristain";
  const meta = document.createElement("meta");
  meta.name = "robots";
  meta.content = "noindex";
  document.head.appendChild(meta);

  return () => {
    document.head.removeChild(meta);
  };
}, []);  
  return (
    <Container className="my-5">

      <h1 className="text-center mb-4">Mentions Légales</h1>

      <Accordion defaultActiveKey="0">

        <Accordion.Item eventKey="0">
          <Accordion.Header>L’éditeur du site</Accordion.Header>
          <Accordion.Body>
            <strong>David Sacristain</strong><br />
            32 rue pierre Boudou<br />
            92600 Asnières-sur-seine<br />
            Téléphone : 06 19 82 97 14<br />
            Email : onenation@hotmail.fr
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>L’hébergeur du site</Accordion.Header>
          <Accordion.Body>
            <strong>alwaysdata</strong><br />
            91 rue du Faubourg saint-honoré<br />
            75008 Paris<br />
            France<br />
            www.alwaysdata.com
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            Ce site ne contient actuellement aucune image externe nécessitant un crédit.
            Si des images sont ajoutées ultérieurement, elles proviendront de{" "}
            <a
              href="https://pixabay.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixabay
            </a>.
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>

    </Container>
  );
}

export default Mentions;
