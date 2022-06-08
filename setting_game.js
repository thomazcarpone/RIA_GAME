function myRadioFunction() {
    var easyRadio = document.getElementById("easyRadio");
    var mediumRadio = document.getElementById("mediumRadio");
    var hardcoreRadio = document.getElementById("hardcoreRadio");
    if (easyRadio.checked){
        var txt = "Easy";
        sessionStorage.setItem("difficulty",0);
    }
    if (mediumRadio.checked){
        var txt = "Medium";
        sessionStorage.setItem("difficulty",1);
    }
    if (hardcoreRadio.checked){
        var txt = "Hardcore";
        sessionStorage.setItem("difficulty",2);
    }
    document.getElementById("difficulty").innerHTML = "Actual difficulty : " + txt;
}
