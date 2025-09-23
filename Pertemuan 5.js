// Data Produk //
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Headphone", harga: 1500000 },
  { id: 4, nama: "Keyboard", harga: 700000 },
  { id: 5, nama: "Mouse", harga: 300000 }
];
// Event Handler //
const eventHandler = {
  tambah: (id, nama, harga) => tambahProduk(id, nama, harga),
  hapus: (id) => hapusProduk(id),
  tampilkan: () => tampilkanProduk()
};
// Menambahkan Produk dengan Spread Operator//
function tambahProduk(id, nama, harga) {
  const newProduk = { id, nama, harga };
  produkList = [...produkList, newProduk]; // Spread Operator
  console.log(`Produk ${nama} berhasil ditambahkan!`);
}
// Menghapus Produk dengan Rest Parameter //
function hapusProduk(...id) {
  produkList = produkList.filter((produk) => !id.includes(produk.id));
  console.log(`Produk dengan id ${id} berhasil dihapus!`);
}

// Menampilkan Produk dengan Destructuring //
function tampilkanProduk() {
  console.log("=== Daftar Produk ===");
  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
  });
}

// Simulasi Event Listener //
document.addEventListener("DOMContentLoaded", () => {
  tampilkanProduk(); // tampilkan awal //

  // Tambah produk //
  eventHandler.tambah(6, "Tablet", 7000000);
  tampilkanProduk();

  // Hapus produk //
  eventHandler.hapus(2);
  tampilkanProduk();
});
