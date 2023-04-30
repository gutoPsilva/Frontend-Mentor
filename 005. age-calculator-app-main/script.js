const calculateButton = document.getElementById("advance");

calculateButton.addEventListener("click", validadeData); // apertar no botão
document.getElementById("inputDay").addEventListener("keypress", validadeData); // enter nos inputs
document.getElementById("inputMonth").addEventListener("keypress", validadeData);
document.getElementById("inputYear").addEventListener("keypress", validadeData);

function validadeData(e){ // recebe o evento como argumento
  if(e.key == "Enter" || e.target.id == "advance" || e.target.id == "advanceIcon"){ // caso o evento seja o clique no botão avançar, ou no ícone do botão, ou enter nos inputs
    const dataAtual = new Date();
    const yearAlert = document.getElementById("yAlert");
    const monthAlert = document.getElementById("mAlert");
    const dayAlert = document.getElementById("dAlert");
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
    else if(inputDay < 1 || inputDay > 31){ // dias vão de 1 até 31
      dayAlert.innerHTML = "Must be a valid day";
      styleDay();
    }
    else if(inputMonth == 2 && inputDay == 31 || inputMonth == 6 && inputDay == 31 || inputMonth == 9 && inputDay == 31 || inputMonth == 11 && inputDay == 31){ // meses que não possuem 31 dias
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
      document.getElementById("labelDay").className = "input-label";
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
      document.getElementById("labelMonth").className = "input-label";
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
      document.getElementById("labelYear").className = "input-label";
      document.getElementById("inputYear").classList.remove("input-wrongStyle");
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
            days = timeDay - inputDay + 31;
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
          days = timeDay - inputDay + 31;
        }
      }

      else if(inputMonth > timeMonth){ // não fez aniversário

        years = timeYear - inputYear - 1;
        months = timeMonth - inputMonth + 12;
        days = timeDay - inputDay;
      }

      document.getElementById("resultYear").innerHTML = years; // valores absolutos, caso o ano seja a.C.
      document.getElementById("resultMonth").innerHTML = months;
      document.getElementById("resultDay").innerHTML = days;
    }
    else{ // reiniciar os resultados
      document.getElementById("resultYear").innerHTML = "- -";
      document.getElementById("resultMonth").innerHTML = "- -";
      document.getElementById("resultDay").innerHTML = "- -";
    }
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
