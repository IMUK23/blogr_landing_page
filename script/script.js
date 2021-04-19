function change() {
    var x = document.getElementById("mobile-icon-id");
    var image = x.getElementsByClassName("hamburger")[0];

    if (image.src == "./images/icon-close.svg") {
        image.src = "./images/icon-hamburger.svg";
    } else {
        image.src = "./images/icon-close.svg";
    }


}