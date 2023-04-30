const calculateButton = document.getElementById("advance");
const yearAlert = document.getElementById("yAlert");
const monthAlert = document.getElementById("mAlert");
const dayAlert = document.getElementById("dAlert");

calculateButton.onclick = function(){
  const dataAtual = new Date();
  let inputDay = Number(document.getElementById("inputDay").value);
  let inputMonth = Number(document.getElementById("inputMonth").value);
  let inputYear = Number(document.getElementById("inputYear").value);
  let diaValido = false;
  let mesValido = false;
  let anoValido = false;

  if(document.getElementById("inputDay").value === ""){ // input vazio
    dayAlert.innerHTML = "This field is required";
  }
  else if(inputDay < 1 || inputDay > 31 ){ // dias vão de 1 até 31
    dayAlert.innerHTML = "Must be a valid day"
  }
  else if(inputDay > 29 && inputMonth == 2){ // fev não passa de 29 dias
    dayAlert.innerHTML = "Must be a valid date";
  }
  else if(inputDay == 29 && inputMonth == 2 && inputYear % 4 != 0){ // 29 fev mas não é ano bissexto 
    dayAlert.innerHTML = "Must be a valid date";
  }
  else if(inputMonth == 2 || inputMonth == 4 || inputMonth == 6 || inputMonth == 9 || inputMonth == 11 && inputDay == 31){ // meses que não possuem 31 dias
    dayAlert.innerHTML = "Must be a valid date1";
  }
  else{
    dayAlert.innerHTML = "";
    diaValido = true;
  }


  if(document.getElementById("inputMonth").value === ""){ // input vazio
    monthAlert.innerHTML = "This field is required";
  }
  else if(inputMonth < 1 || inputMonth > 12){ // meses vão de 1 até 12
    monthAlert.innerHTML = "Must be a valid month";
  }
  else{
    monthAlert.innerHTML = "";
    mesValido = true;
  }


  if(document.getElementById("inputYear").value === ""){ // input vazio
    yearAlert.innerHTML = "This field is required";
  }
  else if(inputYear > dataAtual.getFullYear()){ // input de ano a frente do ano atual
    yearAlert.innerHTML = "Must be in the past";
  }
  else{
    yearAlert.innerHTML = "";
    anoValido = true;
  }

  if(diaValido && mesValido && anoValido){
    let years = inputYear - Number(dataAtual.getFullYear());
    window.alert(years);
  }
}

function validadeData(){
  
}



// function invalidDayStyles(){
//   document.getElementById("labelDay").style.color = "var(--LightRed)";
//   document.getElementById("inputDay").style.border = "1 px solid var(--lightRed)";
// }