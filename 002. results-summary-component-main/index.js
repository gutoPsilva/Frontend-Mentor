/*
const overallDoc = document.getElementById("overall");
const reactionDoc = document.getElementById("reactionStats");
const memoryDoc = document.getElementById("memoryStats");
const verbalDoc = document.getElementById("verbalStats");
const visualDoc = document.getElementById("visualStats");
let r = 80;
let m = 92;
let e = 61;
let i = 72;


function calculate(){
    overallStats = Math.round((r + m + e + i) / 4);
    overallDoc.innerHTML = overallStats;
    if(overallDoc.innerHTML == "NaN"){
        window.alert("You typed text instead of numbers! WRONG!")
    }
}

overallDoc.onclick = function(){
    window.alert("If you want to change the overall, click on the scores and change them!");
}

reactionDoc.onclick = function(){
    r = Number(window.prompt("Type the new score: "));
    while(r<0 || r>100){
        window.alert("The score needs to be a number between 0 and 100!")
        r = window.prompt("Type the new score: ");
    }
    reactionDoc.innerHTML = `${Number(r)} <span class="maxStats">/ 100</span>`;
    calculate();
}

memoryDoc.onclick = function(){
    m = Number(window.prompt("Type the new score: "));
    while(m<0 || m>100){
        window.alert("The score needs to be a number between 0 and 100!")
        m = window.prompt("Type the new score: ");
    }
    memoryDoc.innerHTML = `${Number(m)} <span class="maxStats">/ 100</span>`;
    calculate();
}

verbalDoc.onclick = function(){
    e = Number(window.prompt("Type the new score: "));
    while(e<0 || e>100){
        window.alert("The score needs to be a number between 0 and 100!")
        e = Number(window.prompt("Type the new score: "));
    }
    verbalDoc.innerHTML = `${Number(e)} <span class="maxStats">/ 100</span>`;
    calculate();
}

visualDoc.onclick = function(){
    i = Number(window.prompt("Type the new score: "));
    while(i<0 || i>100){
        window.alert("The score needs to be a number between 0 and 100!")
        i = Number(window.prompt("Type the new score: "));
    }
    visualDoc.innerHTML = `${Number(i)} <span class="maxStats">/ 100</span>`;
    calculate();
}
*/
