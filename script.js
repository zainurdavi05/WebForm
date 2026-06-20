function hitungTransaksi() {
    // 1. Ambil elemen input nilai
    const namaPelanggan = document.getElementById('namaPelanggan').value.trim();
    const namaProduk = document.getElementById('namaProduk').value.trim();
    const hargaProdukRaw = document.getElementById('hargaProduk').value.trim();
    const jumlahPembelianRaw = document.getElementById('jumlahPembelian').value.trim();

    // 4. Validasi Data: Semua input wajib diisi
    if (namaPelanggan === "" || namaProduk === "" || hargaProdukRaw === "" || jumlahPembelianRaw === "") {
        alert("Semua input wajib diisi!");
        return;
    }

    // 4. Validasi Data: Harga Produk dan Jumlah Pembelian hanya boleh berupa angka
    const hargaProduk = Number(hargaProdukRaw);
    const jumlahPembelian = Number(jumlahPembelianRaw);

    if (isNaN(hargaProduk) || isNaN(jumlahPembelian) || hargaProduk <= 0 || jumlahPembelian <= 0) {
        alert("Harga Produk dan Jumlah Pembelian hanya boleh berupa angka positif!");
        return;
    }

    // 2. Proses Perhitungan Aritmatika
    // Rumus: Total Belanja = Harga Produk * Jumlah Pembelian
    const totalBelanja = hargaProduk * jumlahPembelian;
    
    // 2 & Percabangan (If): Ketentuan Bonus/Potongan
    let potongan = 0;
    if (totalBelanja >= 400000) {
        potongan = 50000;
    }

    // Rumus: Total Bayar = Total Belanja - Potongan
    const totalBayar = totalBelanja - potongan;

    // Format angka ke format Rupiah (Rp. xx.xxx)
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    // 3 & 5. Manipulasi DOM untuk menampilkan hasil output ke elemen Card
    document.getElementById('outNamaPelanggan').innerText = namaPelanggan;
    document.getElementById('outNamaProduk').innerText = namaProduk;
    document.getElementById('outTotalBelanja').innerText = formatter.format(totalBelanja).replace("Rp", "Rp ");
    document.getElementById('outPotongan').innerText = formatter.format(potongan).replace("Rp", "Rp ");
    document.getElementById('outTotalBayar').innerText = formatter.format(totalBayar).replace("Rp", "Rp ");

    // PERBAIKAN DI SINI: Mengubah .style.style.display menjadi .style.display
    document.getElementById('hasilCard').style.display = 'block';
}

// 5. Fitur Tambahan: Fungsi Reset Form
function resetForm() {
    document.getElementById('namaPelanggan').value = "";
    document.getElementById('namaProduk').value = "";
    document.getElementById('hargaProduk').value = "";
    document.getElementById('jumlahPembelian').value = "";

    // PERBAIKAN DI SINI: Mengubah .style.style.display menjadi .style.display
    document.getElementById('hasilCard').style.display = 'none';
}