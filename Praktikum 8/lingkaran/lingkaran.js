function hitung() {
  const phi = 3.14; //Konstanta
  let jari = document.getElementById("bil1").value;
  console.log("jari - jari : " + jari);
  let luas = phi * jari * jari;
  let kll = 2.0 * phi * jari;
  console.log("luas :" + luas);
  console.log("keliling :" + kll);
  document.getElementById("opt_luas").value = luas;
  document.getElementById("opt_keliling").value = kll;
}
