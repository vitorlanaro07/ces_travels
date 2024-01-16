function plusDivs(n) {
    showDivs (slideIndex += n);
}

var slideIndex = 1;

showDivs(slideIndex);

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("slides");
    var names = document.getElementsByClassName("names");


    if (n > x.length){
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = x.length;
    }

    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
        names[i].style.display = "none";

    }
    x[slideIndex-1].style.display = "block";
    names[slideIndex-1].style.display = "block";
}

