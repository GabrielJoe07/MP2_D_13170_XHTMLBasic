var nodeLuas;
var nodeKeliling;

function init() {
nodeLuas = document. getElementById("hasilLuas").firstChild;
nodeKeliling = document.getElementById("hasilKeliling").firstChild;
hitungGeometri();

}

function hitungGeometri() {
var p = parseFloat(document.getElementById("panjang").value);
var 1 = parseFloat(document.getElementById("lebar").value);

var luas = p * 1;
var keliling = 2 * (p + 1);

nodeLuas.data = luas;
nodeKeliling.data = keliling;

}