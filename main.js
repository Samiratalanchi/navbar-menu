function displayMenu() {
    if(document.getElementById("second").style.scale != "0" ) {
        console.log(document.getElementById("second").style.scale);
        document.getElementById("first").style.transition="1s"
        document.getElementById("second").style.transition="1s"
        document.getElementById("third").style.transition="1s"
        document.getElementById("second").style.scale="0";
        document.getElementById("first").style.rotate="-135deg";
        document.getElementById("first").style.marginTop="10px";
        document.getElementById("third").style.rotate="135deg";
        document.getElementById("third").style.marginTop="-20px";
    } else {
        document.getElementById("first").style.transition="1s"
        document.getElementById("second").style.transition="1s"
        document.getElementById("third").style.transition="1s"
        document.getElementById("second").style.scale=1;
        document.getElementById("first").style.rotate="0deg";
        document.getElementById("first").style.marginTop="5px";
        document.getElementById("third").style.rotate="0deg";
        document.getElementById("third").style.marginTop="5px";

    }
}
