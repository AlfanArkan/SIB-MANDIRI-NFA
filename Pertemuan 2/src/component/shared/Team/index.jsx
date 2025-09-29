export default function Team(){
    return (
        <>
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
        </>
    )
}