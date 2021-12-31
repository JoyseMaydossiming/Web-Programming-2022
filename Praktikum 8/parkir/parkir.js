const formatRupiah = (money) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money);
};
function hitungParkir() {
  let jam_masuk = document.getElementById("masuk").value;
  let jam_keluar = document.getElementById("keluar").value;
  let selisih = jam_keluar - jam_masuk;
  let biaya = 0;
  const tarif_awal = 3000;
  const tarif_perjam = 1000;
  if (selisih <= 2) {
    biaya = tarif_awal;
  } else {
    let tambahan_jam = selisih - 2;
    biaya = tarif_awal + tarif_perjam * tambahan_jam;
  }
  document.getElementById("lama").value = selisih + " jam";
  document.getElementById("biaya").value = formatRupiah(biaya);
}
