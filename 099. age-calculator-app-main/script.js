const yearAlert = document.getElementById("yAlert");
const monthAlert = document.getElementById("mAlert");
const dayAlert = document.getElementById("dAlert");


document.getElementById("advance").onclick = function(){
  validadeData();
}

function validadeData(){
  const dataAtual = new Date();
  let inputDay = Number(document.getElementById("inputDay").value);
  let inputMonth = Number(document.getElementById("inputMonth").value);
  let inputYear = Number(document.getElementById("inputYear").value);
  let diaValido = false;
  let mesValido = false;
  let anoValido = false;

  if(document.getElementById("inputDay").value === ""){ // input vazio
    dayAlert.innerHTML = "This field is required";
    styleDay();
  }
  else if(inputDay < 1 || inputDay > 31 ){ // dias vão de 1 até 31
    dayAlert.innerHTML = "Must be a valid day";
    styleDay();
  }
  else if(inputMonth == 2 && inputDay == 31 || inputMonth == 4 && inputDay == 31 || inputMonth == 6 && inputDay == 31 || inputMonth == 9 && inputDay == 31 || inputMonth == 11 && inputDay == 31){ // meses que não possuem 31 dias
    dayAlert.innerHTML = "Must be a valid date";
    styleDay();
  }
  else if(inputDay > 29 && inputMonth == 2){ // fev não passa de 29 dias
    dayAlert.innerHTML = "Must be a valid date";
    styleDay();
  }
  else if(inputDay == 29 && inputMonth == 2 && inputYear % 4 != 0){ // 29 fev mas não é ano bissexto 
    dayAlert.innerHTML = "Must be a valid date";
    styleDay();
  }
  else{
    dayAlert.innerHTML = "";
    document.getElementById("labelDay").classList.remove("label-wrongStyle");
    document.getElementById("inputDay").classList.remove("input-wrongStyle");
    diaValido = true;
  }


  if(document.getElementById("inputMonth").value === ""){ // input vazio
    monthAlert.innerHTML = "This field is required";
    styleMonth();
  }
  else if(inputMonth < 1 || inputMonth > 12){ // meses vão de 1 até 12
    monthAlert.innerHTML = "Must be a valid month";
    styleMonth();
  }
  else{
    monthAlert.innerHTML = "";
    document.getElementById("labelMonth").classList.remove("label-wrongStyle");
    document.getElementById("inputMonth").classList.remove("input-wrongStyle");
    mesValido = true;
  }


  if(document.getElementById("inputYear").value === ""){ // input vazio
    yearAlert.innerHTML = "This field is required";
    styleYear();
  }
  else if(inputYear > dataAtual.getFullYear()){ // input de ano a frente do ano atual
    yearAlert.innerHTML = "Must be in the past";
    styleYear();
  }
  else{
    yearAlert.innerHTML = "";
    document.getElementById("labelYear").classList.remove("label-wrongStyle");
    document.getElementById("inputYear").classList.remove("input-wrongStyle");
    anoValido = true;
  }

  // dados válidos
  if(diaValido && mesValido && anoValido){
    let years = Number(dataAtual.getFullYear()) - inputYear;
    let months = (Number(dataAtual.getMonth()) + 1) - inputMonth; // getMonth retorna de 0 a 11, portanto +1 para inteirar os 12
    let days = Number(dataAtual.getDate()) - inputDay;
    document.getElementById("resultYear").innerHTML = Math.abs(years);
    document.getElementById("resultMonth").innerHTML = Math.abs(months);
    document.getElementById("resultDay").innerHTML = Math.abs(days);
  }
  else{
    document.getElementById("resultYear").innerHTML = "- -";
    document.getElementById("resultMonth").innerHTML = "- -";
    document.getElementById("resultDay").innerHTML = "- -";
  }
}

function styleDay(){
  document.getElementById("labelDay").className = "label-wrongStyle";
  document.getElementById("inputDay").className = "input-wrongStyle";
}

function styleMonth(){
  document.getElementById("labelMonth").className = "label-wrongStyle";
  document.getElementById("inputMonth").className = "input-wrongStyle";
}

function styleYear(){
  document.getElementById("labelYear").className = "label-wrongStyle";
  document.getElementById("inputYear").className = "input-wrongStyle"
}