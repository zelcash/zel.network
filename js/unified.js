/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        document.getElementById("myNav").style.height = "0%";
   }
});