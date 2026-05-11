function Home({ auteur }) {
  return (
    <main className="container my-5">

      <section className="text-center mb-5">
        <h1 className="mb-3">je suis {auteur}</h1>
        <p className="lead">
         Futur Développeur Front-End passionné par React et le design web moderne.
        </p>

        <p className="mb-3">
          Ce portfolio présente mes compétences, mes realisations et mes coordonnées pour me contacter.
        </p>

        <p className="mb-3"> J'utilise principalement <strong>React.js</strong> avec <strong>Bootstrap</strong> pour construire des interfaces réactives et accessibles.
          Chaque projet est pensé pour être clair, responsive et fidèle aux maquettes professionnelles.
        </p>

        <p className="mb-3"> N’hésitez pas à parcourir les différentes sections, à consulter mes créations et à me contacter pour toute question ou collaboration.
        </p>

      </section>

      <section className="mb-5">
        <h2 className="mb-4 text-center">Compétences</h2>

        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <h5>
              <i className="fa-solid fa-code me-2"></i>Front-End
            </h5>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>
              <i className="fa-solid fa-laptop-code me-2"></i>Frameworks
            </h5>
            <p>React, Bootstrap</p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>
              <i className="fa-solid fa-database me-2"></i>Outils
            </h5>
            <p>Git, GitHub, VS Code</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-center">Expérience</h2>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Projet Portfolio React</h5>
            <p className="card-text">
              Création d’un portfolio en React avec routing, Bootstrap et design responsive.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;
