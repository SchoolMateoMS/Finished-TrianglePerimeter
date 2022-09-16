// Triangle Perimeter Assignment Start Code
document.getElementById("btn").addEventListener("click", btnClick);

function btnClick(){
    let xA = +document.getElementById("vertex-xA").value;
    let yA = +document.getElementById("vertex-yA").value;
    let xB = +document.getElementById("vertex-xB").value;
    let yB = +document.getElementById("vertex-yB").value;
    let xC = +document.getElementById("vertex-xC").value;
    let yC = +document.getElementById("vertex-yC").value;

    let AB = calcDist(xA, yA, xB, yB);
    let AC = calcDist(xA, yA, xC, yC);
    let BC = calcDist(xB, yB, xC, yC);

    let Perimeter = AB + AC + BC

    document.getElementById("AB").innerHTML = AB;
    document.getElementById("AC").innerHTML = AC;
    document.getElementById("BC").innerHTML = BC;
    document.getElementById("Perimeter").innerHTML = Perimeter;

}

function calcDist(x1, y1, x2, y2){
    let A = x1 - x2;
    let B = y1 - y2;
    return Math.sqrt((A * A) + (B * B));
}