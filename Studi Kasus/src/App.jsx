function App() {
  return (
    <>
      {/*Header*/}
      <div className="b-example-divider"></div>
      <div className="container">
        <header
          className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
        >
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i className="fa-solid fa-book" style={{ color: "blue" }}></i>
              <span className="ms-2 fs-4">BookStore</span>
            </a>
          </div>
          <ul
            className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"
          >
            <li><a href="#home" className="nav-link px-2">Home</a></li>
            <li><a href="#book" className="nav-link px-2">Book</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/*Heroes*/}
        <div className="b-example-divider"></div>
        <div className="container my-5">
          <div
            className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"
          >
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                Atomic Habits: Perubahan Kecil yang memberikan hasil luar biasa.
              </h1>
              <p className="lead">
                Belajarlah Sebelum Terlambat.
              </p>
              <div
                className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
              >
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Detail
                </button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                className="rounded-lg-3"
                src="https://picsum.photos/720/600"
                alt=""
                width="720"
              />
            </div>
          </div>
        </div>

        {/*product list*/}
        <section id="book" className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Selling Book</h1>
              <p className="lead text-body-secondary">
                A curated collection showcasing unique works and thoughtful creations—highlighting both the pieces themselves and the vision of their creator. Take a moment to explore; there’s more than meets the eye
              </p>
              <p>
                <a href="#" className="btn btn-primary my- m-2">Views</a>
                <a href="#" className="btn btn-secondary my-2">Other Books</a>
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {/* Card buku (isi placeholder) */}
              {[...Array(6)].map((_, i) => (
                <div className="col" key={i}>
                  <div className="card shadow-sm">
                    <svg
                      aria-label="Placeholder: Thumbnail"
                      className="bd-placeholder-img card-img-top"
                      height="225"
                      preserveAspectRatio="xMidYMid slice"
                      role="img"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            View
                          </button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            Edit
                          </button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <section id="team" className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold">Meet Our Team</h2>
              <p className="text-muted">Tim yang berdedikasi untuk menghadirkan buku terbaik</p>
            </div>
            <div className="row">
              {["Risca", "Alfan", "Rafly", "Raka"].map((name, i) => (
                <div className="col-md-3" key={i}>
                  <div className="card shadow-sm border-0">
                    <img
                      src={`https://i.pravatar.cc/300?img=${i + 10}`}
                      className="card-img-top rounded-circle p-3"
                      alt={name}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text text-muted">
                        {i % 2 === 0 ? "Frontend Developer" : "UI/UX Designer"}
                      </p>
                      <a href="#" className="btn btn-outline-primary btn-sm">Contact</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold">Contact Us</h2>
              <p className="text-muted">Kami siap menerima pertanyaan, kritik, dan saran dari Anda</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary shadow-sm">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nama</label>
                    <input type="text" className="form-control" id="name" placeholder="Masukkan nama Anda" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="nama@email.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Pesan</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Tulis pesan Anda"></textarea>
                  </div>
                  <button className="w-100 btn btn-primary btn-lg" type="submit">Kirim</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/*Footer*/}
        <div className="b-example-divider"></div>
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="#home" className="nav-link px-2 text-body-secondary">Home</a>
              </li>
              <li className="nav-item">
                <a href="#book" className="nav-link px-2 text-body-secondary">Book</a>
              </li>
              <li className="nav-item">
                <a href="#team" className="nav-link px-2 text-body-secondary">Team</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">About</a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">&copy; 2025 NF Academy, Inc</p>
          </footer>
        </div>
      </div>
    </>
  )
}
export default App
