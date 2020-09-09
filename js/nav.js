function contentDisplay(z) {
    
    var z = document.getElementsByClassName(z)[0];

    var a = document.getElementsByClassName('content-text')[0];

    var b = document.getElementsByClassName('checkbox-content')[0];
    var c = document.getElementsByClassName('radio-content')[0];
    var d = document.getElementsByClassName('inputs-content')[0];
    var e = document.getElementsByClassName('buttons-content')[0];
    
    var f = document.getElementById('checkbox').children[0];
    var g = document.getElementById('radio').children[0];
    var h = document.getElementById('inputs').children[0];
    var i = document.getElementById('buttons').children[0];

    if (z == b || z == c || z == d || z == e) {
        a.style.display = 'none';
    } else {
        a.style.display = 'block';
    }

    if (z == b) {
        b.style.display = 'grid';
        f.style.color = '#f8ab37';
    } else if (z != b) {
        b.style.display = 'none';
        f.style.color = '#000000'
    }

    if (z == c) {
        c.style.display = 'grid';
        g.style.color = '#f8ab37';
    } else if (z != c) {
        c.style.display = 'none';
        g.style.color = '#000000'
    }

    if (z == d) {
        d.style.display = 'grid';
        h.style.color = '#f8ab37';
    } else if (z != d) {
        d.style.display = 'none';
        h.style.color = '#000000'
    }

    if (z == e) {
        e.style.display = 'grid';
        i.style.color = '#f8ab37';
    } else if (z != e) {
        e.style.display = 'none';
        i.style.color = '#000000'
    }

}
