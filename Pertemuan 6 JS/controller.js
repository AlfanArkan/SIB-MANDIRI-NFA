// controller.js //
let dataList = require("./data.js");

// 1. Melihat data (pakai map) //
function lihatData() {
  console.log("=== Daftar Data ===");
  dataList.map((item, index) => {
    console.log(
      `${index + 1}. Nama: ${item.nama}, Umur: ${item.umur}, Alamat: ${item.alamat}, Email: ${item.email}`
    );
  });
}

// 2. Menambah data (push minimal 2 data baru) //
function tambahData() {
  dataList.push(
    { nama: "Kurnia", umur: 31, alamat: "Bekasi", email: "kurnia@mail.com" },
    { nama: "Lestari", umur: 23, alamat: "Bogor", email: "lestari@mail.com" }
  );
  console.log("Data baru berhasil ditambahkan!");
}

// 3. Menghapus data (berdasarkan index) //
function hapusData(index) {
  if (index >= 0 && index < dataList.length) {
    const removed = dataList.splice(index, 1);
    console.log(`❌ Data ${removed[0].nama} berhasil dihapus!`);
  } else {
    console.log("⚠️ Index tidak ditemukan!");
  }
}

// --- Simulasi --- //
console.log("Data awal:");
lihatData();

console.log("\n Menambah data...");
tambahData();
lihatData();

console.log("\nMenghapus data ke-2...");
hapusData(1); // hapus data dengan index ke-1 (Nabila) //
lihatData();
