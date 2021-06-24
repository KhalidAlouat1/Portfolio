window.addEventListener("DOMContentLoaded", (event) => {
    if (localStorage.getItem("theme")) {
        document.getElementById('mystylesheet').href = localStorage.getItem("theme")
    }

})

function swapStyle(sheet) {
    document.getElementById('mystylesheet').href = sheet
    localStorage.setItem('theme', sheet)
}




