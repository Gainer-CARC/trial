function saveInfo() {
    let inst = document.getElementById("inputInst").value;
    let pref = document.getElementById("inputPref").value;
    let loc = document.getElementById("inputLoc").value;
    let fee = document.getElementById("inputFee").value;
    let hours = document.getElementById("inputHours").value;
    let att = document.getElementById("inputAtt").value;
    let pos = document.getElementById("inputPos").value;

    if (inst) document.getElementById("inst").innerText = inst;
    if (pref) document.getElementById("pref").innerText = pref;
    if (loc) document.getElementById("loc").innerText = loc;
    if (fee) document.getElementById("fee").innerText = fee;
    if (hours) document.getElementById("hours").innerText = hours;
    if (att) document.getElementById("att").innerText = att;
    if (pos) document.getElementById("pos").innerText = pos;

    localStorage.setItem("inst", inst);
    localStorage.setItem("pref", pref);
    localStorage.setItem("loc", loc);
    localStorage.setItem("fee", fee);
    localStorage.setItem("hours", hours);
    localStorage.setItem("att", att);
    localStorage.setItem("pos", pos);

    alert("Information saved!");
}

window.onload = function() {
    if (localStorage.getItem("inst")) {
        document.getElementById("inst").innerText = localStorage.getItem("inst");
        document.getElementById("pref").innerText = localStorage.getItem("pref");
        document.getElementById("loc").innerText = localStorage.getItem("loc");
        document.getElementById("fee").innerText = localStorage.getItem("fee");
        document.getElementById("hours").innerText = localStorage.getItem("hours");
        document.getElementById("att").innerText = localStorage.getItem("att");
        document.getElementById("pos").innerText = localStorage.getItem("pos");
    }
}

function GoToUpdteSlts(){
    window.location.href="page 8.html"
}