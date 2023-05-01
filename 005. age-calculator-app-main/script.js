document.getElementById("advance").addEventListener("click", validadeData); // apertar no botão
document.getElementById("inputDay").addEventListener("keypress", validadeData); // enter nos inputs
document.getElementById("inputMonth").addEventListener("keypress", validadeData);
document.getElementById("inputYear").addEventListener("keypress", validadeData);
let speed = 10;

function validadeData(e){ // recebe o evento como argumento
  if(e.key == "Enter" || e.target.id == "advance" || e.target.id == "advanceIcon"){ // caso o evento seja o clique no botão avançar, ou no ícone do botão, ou enter nos inputs
    const dataAtual = new Date();
    const yearAlert = document.getElementById("yAlert");
    const monthAlert = document.getElementById("mAlert");
    const dayAlert = document.getElementById("dAlert");
    let inputDay = Number(document.getElementById("inputDay").value);
    let inputMonth = Number(document.getElementById("inputMonth").value);
    let inputYear = Number(document.getElementById("inputYear").value);
    let diaValido, mesValido, anoValido = false;
  
    if(document.getElementById("inputDay").value === ""){ // input vazio
      dayAlert.innerHTML = "This field is required";
      styleErrors("labelDay", "inputDay");
    }
    else if(Number.isInteger(inputDay) == false){
      dayAlert.innerHTML = "Must be a valid date";
      styleErrors("labelDay", "inputDay");
    }
    else if(inputDay < 1 || inputDay > 31){ // dias vão de 1 até 31
      dayAlert.innerHTML = "Must be a valid day";
      styleErrors("labelDay", "inputDay");
    }
    else if(inputMonth == 4 && inputDay == 31 || inputMonth == 6 && inputDay == 31 || inputMonth == 9 && inputDay == 31 || inputMonth == 11 && inputDay == 31){ // meses que não possuem 31 dias
      dayAlert.innerHTML = "Must be a valid date";
      styleErrors("labelDay", "inputDay");
    }
    else if(inputDay > 29 && inputMonth == 2){ // fev não passa de 29 dias
      dayAlert.innerHTML = "Must be a valid date";
      styleErrors("labelDay", "inputDay");
    }
    else if(inputDay == 29 && inputMonth == 2 && inputYear % 4 != 0){ // 29 fev mas não é ano bissexto 
      dayAlert.innerHTML = "Must be a valid date";
      styleErrors("labelDay", "inputDay");
    }
    else{
      dayAlert.innerHTML = "";
      styleNormal("labelDay", "inputDay");
      diaValido = true;
    }
  
    if(document.getElementById("inputMonth").value === ""){ // input vazio
      monthAlert.innerHTML = "This field is required";
      styleErrors("labelMonth", "inputMonth");
    }
    else if(Number.isInteger(inputMonth) == false){
      monthAlert.innerHTML = "Must be a valid date";
      styleErrors("labelMonth", "inputMonth");
    }
    else if(inputMonth < 1 || inputMonth > 12){ // meses vão de 1 até 12
      monthAlert.innerHTML = "Must be a valid month";
      styleErrors("labelMonth", "inputMonth");
    }
    else{
      monthAlert.innerHTML = "";
      styleNormal("labelMonth", "inputMonth");
      mesValido = true;
    }
  
    if(document.getElementById("inputYear").value === ""){ // input vazio
      yearAlert.innerHTML = "This field is required";
      styleErrors("labelYear", "inputYear");
    }
    else if(Number.isInteger(inputYear) == false || inputYear < 0){
      yearAlert.innerHTML = "Must be a valid date";
      styleErrors("labelYear", "inputYear");
    }
    else if(inputYear > dataAtual.getFullYear()){ // input de ano a frente do ano atual
      yearAlert.innerHTML = "Must be in the past";
      styleErrors("labelYear", "inputYear");
    }
    else{
      yearAlert.innerHTML = "";
      styleNormal("labelYear", "inputYear");
      anoValido = true;
    }
  
    // dados válidos
    if(diaValido && mesValido && anoValido){
      let days, months, years;
      let timeYear = dataAtual.getFullYear();
      let timeMonth = dataAtual.getMonth() + 1;
      let timeDay = dataAtual.getDate();

      if(inputMonth < timeMonth){ // já fez aniversário
          years = timeYear - inputYear;
          if(inputDay <= timeDay){
            months = timeMonth - inputMonth;
            days = timeDay - inputDay;
          }
          else{
            months = timeMonth - inputMonth - 1;
            days = timeDay - inputDay + 30;
          }
      }

      else if(inputMonth == timeMonth){ // mesmo mês de aniv
        if(inputDay <= timeDay){ // dia aniversário
          years = timeYear - inputYear;
          months = 0;
          days = timeDay - inputDay;
        }
        else{
          years = timeYear - inputYear - 1;
          months = 11;
          days = timeDay - inputDay + 30;
        }
      }

      else if(inputMonth > timeMonth){ // não fez aniversário
        years = timeYear - inputYear - 1;
        if(inputDay <= timeDay){
          months = timeMonth - inputMonth + 12;
          days = timeDay - inputDay;
        }
        else{
          months = timeMonth - inputMonth + 12 - 1; // -1 mês por conta do dia ser depois do dia do aniv, logo é -1 mês e considera-se os dias restantes.
          days = timeDay - inputDay + 30;
        } 
      }

      atualizarValores(years, months, days);
    }
    else{ // reiniciar os resultados
      atualizarValores("- -", "- -", "- -");
    }
  }
}

function atualizarValores(y, m, d){
  document.getElementById("resultYear").innerHTML = y; // valores absolutos, caso o ano seja a.C.
  document.getElementById("resultMonth").innerHTML = m;
  document.getElementById("resultDay").innerHTML = d;
}

function styleErrors(label, input){
  document.getElementById(label).className = "label-wrongStyle";
  document.getElementById(input).className = "input-wrongStyle";
}

function styleNormal(label, input){
  document.getElementById(label).classList.remove("label-wrongStyle");
  document.getElementById(label).className = "input-label";
  document.getElementById(input).classList.remove("input-wrongStyle");
}