const overallDoc = document.getElementById("overall");
const reactionDoc = document.getElementById("reactionStats");
const memoryDoc = document.getElementById("memoryStats");
const verbalDoc = document.getElementById("verbalStats");
const visualDoc = document.getElementById("visualStats");
let r = 80;
let m = 92;
let e = 61;
let i = 72;

/*
function calculate(){
    overallStats = Math.round((r + m + e + i) / 4);
    overallDoc.innerHTML = overallStats;
    if(overallDoc.innerHTML == "NaN"){
        window.alert("Você digitou texto ao invés de número! ERRADO!")
    }
}

overallDoc.onclick = function(){
    window.alert("Caso queira ter um overall diferente, clique nas pontuações abaixo e altere-as.");
}

reactionDoc.onclick = function(){
    r = Number(window.prompt("Digite a nova pontuação: "));
    while(r<0 || r>100){
        window.alert("A pontuação deve ser um número de 0 a 100!")
        r = window.prompt("Digite a nova pontuação: ");
    }
    reactionDoc.innerHTML = `${Number(r)} <span class="maxStats">/ 100</span>`;
    calculate();
}

memoryDoc.onclick = function(){
    m = Number(window.prompt("Digite a nova pontuação: "));
    while(m<0 || m>100){
        window.alert("A pontuação deve ir de 0 a 100!")
        m = window.prompt("Digite a nova pontuação: ");
    }
    memoryDoc.innerHTML = `${Number(m)} <span class="maxStats">/ 100</span>`;
    calculate();
}

verbalDoc.onclick = function(){
    e = Number(window.prompt("Digite a nova pontuação: "));
    while(e<0 || e>100){
        window.alert("A pontuação deve ir de 0 a 100!");
        e = Number(window.prompt("Digite a nova pontuação: "));
    }
    verbalDoc.innerHTML = `${Number(m)} <span class="maxStats">/ 100</span>`;
    calculate();
}

visualDoc.onclick = function(){
    i = Number(window.prompt("Digite a nova pontuação: "));
    while(i<0 || i>100){
        window.alert("A pontuação deve ir de 0 a 100!");
        i = Number(window.prompt("Digite a nova pontuação: "));
    }
    visualDoc.innerHTML = `${Number(i)} <span class="maxStats">/ 100</span>`;
    calculate();
}
*/
