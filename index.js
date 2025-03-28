const { lihatData, tambahData, hapusData } = require("./controller");

// Melihat data
lihatData();

// Menambah data
tambahData("Kiki", 26, "Padang", "kiki@example.com");
tambahData("Luna", 21, "Palembang", "luna@example.com");
lihatData();

// Menghapus data pada index ke-1
hapusData(1);
lihatData();
