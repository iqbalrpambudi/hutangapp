var pasaran = ['Legi','Pahing','Pon','Wage','Kliwon']
var d2 = new Date("2014/01/27");
var d1 = new Date();

var selisih = Math.floor(Math.abs(d1-d2)/86400000);
var pasar = pasaran[selisih%5];

export default pasar;