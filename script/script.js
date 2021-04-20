function change() {
    var x = document.getElementById("mobile-icon-id");
    var image = x.getElementsByClassName("hamburger")[0];
    var menu = document.getElementById("menu");

    if (image.src.match("./images/icon-close.svg")) {
        image.src = "./images/icon-hamburger.svg";
        menu.style.display = "none";

    } else {
        image.src = "./images/icon-close.svg";
        menu.style.display = "block";

    }


}

function product() {
    if (document.getElementById("item-2-content").style.display.match("block")) {
        hideproduct();
    } else {
        document.getElementById("item-2-content").style.display = "block";
        document.getElementById("item-2-content").style.backgroundColor = "rgba(206, 203, 203, 0.76)";
        hidecompany();
        hideconnect();
    }
}

function hideproduct() {
    document.getElementById("item-2-content").style.display = "none";
}

function company() {
    if (document.getElementById("item-3-content").style.display.match("block")) {
        hidecompany();
    } else {
        document.getElementById("item-3-content").style.display = "block";
        document.getElementById("item-3-content").style.backgroundColor = "rgba(206, 203, 203, 0.76)";
        hideproduct();
        hideconnect();
    }
}

function hidecompany() {
    document.getElementById("item-3-content").style.display = "none";
}

function connect() {
    if (document.getElementById("item-4-content").style.display.match("block")) {
        hideconnect();
    } else {
        document.getElementById("item-4-content").style.display = "block";
        document.getElementById("item-4-content").style.backgroundColor = "rgba(206, 203, 203, 0.76)";
        hidecompany();
        hideproduct();
    }
}

function hideconnect() {
    document.getElementById("item-4-content").style.display = "none";

}