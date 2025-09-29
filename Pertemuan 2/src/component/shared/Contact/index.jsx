export default function Contact(){
    return (
        <>
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
        </>
    )
}