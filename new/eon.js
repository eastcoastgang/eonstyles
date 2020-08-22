function toggleloader() {
    $('#eonloaderelement').modal('toggle')
}

function transfer(page) {
    a = document.createElement('div')
    a.style = 'position: fixed; width: 100%; height: 100%; top: 0px; left: 0px; background-color: #fff; z-index: 2000000000931028490124809'
    a.classList.add('animated')
    a.classList.add('fadeInUpBig')
    a.classList.add('faster')
    document.getElementById('body').appendChild(a)

    window.setTimeout(function () {
        b = document.createElement('a')
        b.href = page
        b.id = 'animatelink'
        document.getElementById('body').appendChild(b)
        document.getElementById('animatelink').click()
    }, 500)
}

function transferdark(page) {
    a = document.createElement('div')
    a.style = 'position: fixed; width: 100%; height: 100%; top: 0px; left: 0px; background-color: #121212; z-index: 2000000000931028490124809'
    a.classList.add('animated')
    a.classList.add('fadeInUpBig')
    a.classList.add('faster')
    document.getElementById('body').appendChild(a)

    window.setTimeout(function () {
        b = document.createElement('a')
        b.href = page
        b.id = 'animatelink'
        document.getElementById('body').appendChild(b)
        document.getElementById('animatelink').click()
    }, 500)
}

function error(msg) {
    document.getElementById('erorrModalMsg').innerHTML = msg
    $('#errorModal').modal('toggle')
}

function showcomplete(num8123uods) {
    if (num8123uods == null || num8123uods == undefined) {
        num8123uods = 1000
    }
    document.getElementById('doneleementicon').style.display = 'none'
    $('#eondoneelement').modal('toggle')   
    window.setTimeout(function() {
        document.getElementById('doneleementicon').style.display = 'block'
    }, 100)
    window.setTimeout(function() {
        $('#eondoneelement').modal('toggle')   
    }, num8123uods)
}