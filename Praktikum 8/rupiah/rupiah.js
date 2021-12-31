const rp = 14650;
let rupiah;
let d;
const formatRupiah = (money) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money);
};
function hitung() {
  d = parseFloat(document.getElementById("dollar").value);
  rupiah = rp * d;
  document.getElementById("rupiah").value = formatRupiah(rupiah);
}
