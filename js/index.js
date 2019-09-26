function fight() {
    var success = Math.floor (Math.random() * 10);
    console.log (success);
    if(success > 3) {
        document.getElementById("pic").src = "img/hit.jpg";
    } else {
        document.getElementById("pic").src = "img/miss.png";
    }
}