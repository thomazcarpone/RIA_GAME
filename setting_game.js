function myRadioFunction() {
    var easyRadio = document.getElementById("easyRadio");
    var mediumRadio = document.getElementById("mediumRadio");
    var hardRadio = document.getElementById("hardcoreRadio");
    if (easyRadio.checked){
        var txt = "Easy";
    }
    if (mediumRadio.checked){
        var txt = "Medium";
    }
    if (hardcoreRadio.checked){
        var txt = "Hardcore";
    }
    document.getElementById("difficulty").innerHTML = "Actual difficulty : " + txt;
}