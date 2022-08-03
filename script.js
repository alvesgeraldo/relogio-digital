let data = new Date();

let dia = String(data.getDate()).padStart(2, '0');
let mes = String(data.getMonth()).padStart(2, '0');
let ano = data.getFullYear();
let diaSem = ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"];
let strDia = diaSem[data.getDay()];

let calendario = document.getElementById('calendario');

calendario.innerHTML = dia + '-' + mes + '-' + ano + '  -  ' + strDia;