let nilaiPertama;
let nilaiKedua;
let total;
function OnChange(value) {
  nilaiPertama = parseFloat(document.getElementById("satu").value);
  nilaiKedua = parseFloat(document.getElementById("dua").value);
  total = nilaiPertama + nilaiKedua;
  document.formD.txtDisplay.value = total;
}
