let formulario = document.getElementById("form");
formulario.addEventListener('submit', verificar);
document.getElementById("verifica").addEventListener("click", verificar);
let n = document.getElementById('nom');
let emai = document.getElementById('email');
let cpf = document.getElementById('c');
let data = document.getElementById('dtn');
let numero = document.getElementById('num');

function nomenull() {

    if (n.value == '') {
        return false;
    } else {
        return true;
    }
}

function emailnull() {

    if (emai.value == '') {
        return false;
    } else {
        return true;
    }
}

function emaill() {

    if (emai.value.indexOf(".com") == -1) {
        return false;
    } else {
        return true;
    }
}

function cpfnull(){
    if (cpf.value == ''){
        return false;
    } else {
        return true;
    }
}

function validacpf() {
    var s = 0;
    var r;
    
    var strCPF = cpf.value;
  
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) s = s + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  r = (s * 10) % 11;

    if ((r == 10) || (r == 11))  r = 0;
    if (r != parseInt(strCPF.substring(9, 10)) ) return false;

  s = 0;
    for (i = 1; i <= 10; i++) s = s + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    r = (s * 10) % 11;

    if ((r == 10) || (r == 11))  r = 0;
    if (r != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

function datanull (){
    if (data.value == ''){
        return false;
    } else {
        return true;
    }
}

function checarData() {
    var dataAtual = new Date();
    var dataDigitada = new Date(data.value);
    
    var diasvencidos = Math.floor((dataAtual - dataDigitada) / (1000 * 60 * 60 * 24 * 30 * 12));
    
    if (diasvencidos < 18 ){
        return false
    } else {
        return true
    }
  }

function validanum(){
    if( numero.value == ''){
        return false;
    } else {
        return true;
    }
}

function numtelefone(){
    if (numero.value.length != 9){
        return false
    } else {
        return true;
    }
}



function verificar(e) {

    if ((nomenull() == false) || (cpfnull() == false) || (validacpf() == false ) || (datanull() == false) || (checarData() == false )|| (validanum() == false) ||  (numtelefone() == false) ||(emailnull() == false) || (emaill() == false)) {

        if (nomenull() == false) {

            n.setAttribute("class", "incorreto");
            document.getElementById('erro1').innerHTML = "O nome não pode ser nulo (sem valor)!";
        } else if (nomenull() == true) {
            n.setAttribute("class", "correto");
        }
        if (cpfnull() == false) {
            cpf.setAttribute("class", "incorreto");
            document.getElementById('erro2').innerHTML = "O CPF não pode ser nulo (sem valor)!";
        } else if (cpfnull() == true) {
            cpf.setAttribute("class", "correto");
        }
        if (validacpf() == false ) {
            cpf.setAttribute("class", "incorreto");
            document.getElementById('erro3').innerHTML = "O CPF está inválido!";
        } else if (validacpf() == true){
            cpf.setAttribute("class", "correto");
        }
        if (datanull() == false) {
            data.setAttribute("class", "incorreto");
            document.getElementById('erro4').innerHTML = "A data não pode ser nula (sem valor)!";
        } else if (datanull() == true) {
            data.setAttribute("class", "correto");
        }
        if  (checarData() == false) {
            data.setAttribute("class", "incorreto");
            document.getElementById('erro4').innerHTML = "Data invalida!";
        } else if (checarData() == true){
            data.setAttribute("class", "correto");
        }
        if (validanum() == false) {
            numero.setAttribute("class", "incorreto");
            document.getElementById('erro6').innerHTML = "O número para contato não pode ser nulo (sem valor)!";
        } else if (validanum() == true){
            numero.setAttribute("class", "correto");
        }
        if (numtelefone() == false) {
            numero.setAttribute("class", "incorreto");
            document.getElementById('erro7').innerHTML = "O número de telefone não pode ser menos e nem exceder 8 dígitos!";
        } else if (numtelefone() == true){
            numero.setAttribute("class", "correto");
        }
        if (emailnull() == false) {
            emai.setAttribute("class", "incorreto");
            document.getElementById('erro8').innerHTML = "O email não pode ser nulo (sem valor)!";
        } else if (emailnull() == true) {
            emai.setAttribute("class", "correto");
        }
        if (emaill() == false) {
            emai.setAttribute("class", "incorreto");
            document.getElementById('erro9').innerHTML = "O email precisa ter um .com!";
        } else if (emaill() == true) {
            emai.setAttribute("class", "correto")
        }
    } else {
        document.getElementById('correto').innerHTML = "Tudo está correto, parabéns!";
    }
}
