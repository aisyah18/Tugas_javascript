const data = require("./data");

function lihatData() {
  data.map((item, index) => {
    console.log(
      `${index + 1}. Nama: ${item.nama}, Umur: ${item.umur}, Alamat: ${
        item.alamat
      }, Email: ${item.email}`
    );
  });
}

function tambahData(nama, umur, alamat, email) {
  data.push({ nama, umur, alamat, email });
  console.log("Data berhasil ditambahkan!");
}

function hapusData(index) {
  if (index >= 0 && index < data.length) {
    data.splice(index, 1);
    console.log("Data berhasil dihapus!");
  } else {
    console.log("Index tidak valid!");
  }
}

module.exports = { lihatData, tambahData, hapusData };
