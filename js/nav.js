function oi () {
    console.log('oi')
}

oi();

function contentDisplay(e) {
    var x = document.getElementsByClassName(e)
    if (x.style.display === "none") {
        x.style.display = "grid";
    } else {
        x.style.display = "none";
    }
}
