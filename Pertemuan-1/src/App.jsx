import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import gambar lokal dari folder src/assets
import homeImage from "./assets/home.jpg";
import member1 from "./assets/member1.jpg";
import member2 from "./assets/member2.jpg";
import member3 from "./assets/member3.jpg";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <div className="container mt-5">
            <div className="text-center">
              <h1>Selamat Datang di MyLearning</h1>
              <p className="lead">Tempat terbaik untuk belajar dan berbagi teknologi.</p>
              <img src={homeImage} alt="Home" className="img-fluid rounded shadow-sm" />
            </div>

            <div className="row mt-5">
              <div className="col-md-4">
                <h3>Kursus Dan Modul Interaktif</h3>
                <p>Pengguna dapat mengakses berbagai kursus online dan modul pembelajaran tentang teknologi terbaru, lengkap dengan video, kuis, dan latihan praktik..</p>
              </div>
              <div className="col-md-4">
                <h3>Forum Diskusi & Komunitas</h3>
                <p>Fitur untuk bertanya, berbagi pengalaman, dan berdiskusi antar pengguna tentang topik teknologi tertentu, memungkinkan kolaborasi belajar secara interaktif.</p>
              </div>
              <div className="col-md-4">
                <h3>Artikel dan Tutorial Teknologi</h3>
                <p>Koleksi artikel, tips, dan tutorial yang selalu diperbarui untuk membantu pengguna belajar mandiri atau mengikuti tren teknologi terbaru..</p>
              </div>
            </div>
          </div>
        );
      case "team":
        return (
          <div className="container mt-5">
            <h1 className="text-center mb-4">Our Teacher</h1>
            <div className="row">
              <div className="col-md-4 text-center">
                <img src={member1} className="rounded-circle mb-3" width="150" alt="Member 1" />
                <h5>Alfan Arkan</h5>
                <p>Coach 1</p>
              </div>
              <div className="col-md-4 text-center">
                <img src={member2} className="rounded-circle mb-3" width="150" alt="Member 2" />
                <h5>Satria Abbel Pangestu</h5>
                <p>Coach 2</p>
              </div>
              <div className="col-md-4 text-center">
                <img src={member3} className="rounded-circle mb-3" width="150" alt="Member 3" />
                <h5>Risca Marcella Jhesica</h5>
                <p>Coach 3</p>
              </div>
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="container mt-5">
            <h1 className="text-center mb-4">Contact Us</h1>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nama</label>
                    <input type="text" className="form-control" placeholder="Masukkan nama" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Masukkan email" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Pesan</label>
                    <textarea className="form-control" rows="4" placeholder="Tulis pesanmu"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Kirim</button>
                </form>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand">MyLearning</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white" onClick={() => setPage("home")}>Home</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white" onClick={() => setPage("team")}>Team</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white" onClick={() => setPage("contact")}>Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Konten */}
      {renderPage()}

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3 mt-5">
        &copy; 2025 MyLearning. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
