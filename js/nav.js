function contentDisplay(a, b, c, d, e) {
    var a = document.getElementsByClassName(a)[0];
    var b = document.getElementsByClassName(b)[0];
    var c = document.getElementsByClassName(c)[0];
    var d = document.getElementsByClassName(d)[0];
    var e = document.getElementsByClassName(e)[0];

    if (a.style.display === "grid") {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "block";
    } else {
        a.style.display = "grid";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }
}
