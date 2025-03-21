// Class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }

  tampilkanInfo() {
    return `${this.nama} (${this.nomorTelepon}) menyewa ${this.kendaraanDisewa}`;
  }
}

// Class Sistem Penyewaan
class SistemPenyewaan {
  constructor() {
    this.pelangganList = [];
  }

  tambahPelanggan(pelanggan) {
    this.pelangganList.push(pelanggan);
  }

  tampilkanDaftarPelanggan() {
    if (this.pelangganList.length === 0) {
      console.log("Tidak ada pelanggan yang sedang menyewa kendaraan.");
    } else {
      console.log("Daftar Pelanggan yang Menyewa Kendaraan:");
      this.pelangganList.forEach((pelanggan, index) => {
        console.log(`${index + 1}. ${pelanggan.tampilkanInfo()}`);
      });
    }
  }
}

// Contoh penggunaan
const sistem = new SistemPenyewaan();

const pelanggan1 = new Pelanggan("Aisyah", "08123456789", "Mobil");
const pelanggan2 = new Pelanggan("Budi", "08234567890", "Motor");

sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

sistem.tampilkanDaftarPelanggan();
