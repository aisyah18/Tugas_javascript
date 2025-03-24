// **Data Produk**
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Headphone", harga: 1500000 },
    { id: 5, nama: "Smartwatch", harga: 2500000 }
];

// Nama fungsi bebas
tconst eventHandler = {
    tambahProduk: function (...produkBaru) {
        produkList = [...produkList, ...produkBaru];
        tampilkanProduk();
    },
    hapusProduk: function (id) {
        produkList = produkList.filter(produk => produk.id !== id);
        tampilkanProduk();
    }
};

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
    eventHandler.tambahProduk({ id, nama, harga });
}

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(...idProduk) {
    idProduk.forEach(id => eventHandler.hapusProduk(id));
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
    console.clear();
    produkList.forEach(({ id, nama, harga }) => {
        console.log(`${id}. ${nama} - Rp${harga}`);
    });
}

tampilkanProduk();

// Contoh penambahan data
tambahProduk(6, "Monitor", 3000000);
tampilkanProduk();

hapusProduk(2);
tampilkanProduk();
