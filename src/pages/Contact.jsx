function Contact() {
  return (
    <main className="container my-5">

      <h1 className="mb-4 text-center">Contactez-moi</h1>
      <p className="text-center mb-5">
        Vous pouvez me contacter via le formulaire ci-dessous :
      </p>

      <div className="row">

        <div className="col-md-6 mb-4">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nom</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Sacristain David"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="onenation@hotmail.fr"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Téléphone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="06 19 82 97 14"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="sujet" className="form-label">Sujet</label>
              <input
                type="text"
                className="form-control"
                id="sujet"
                placeholder="Sujet"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Votre message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>

        <div className="col-md-6 mb-4">
          <h5 className="mb-3 text-center">Localisation</h5>
          <p className="text-center">
            32 rue Pierre Boudou <br />
            92600 Asnières-sur-Seine <br />
            France
          </p>

          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps?q=32+rue+Pierre+Boudou,+92600+Asni%C3%A8res-sur-Seine,+France&output=embed"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Plan de Asnières-sur-seine"
            ></iframe>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Contact;
