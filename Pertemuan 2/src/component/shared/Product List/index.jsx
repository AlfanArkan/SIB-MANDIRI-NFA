export default function ProductList(){
    return (
        <>
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
        </>
    )
}