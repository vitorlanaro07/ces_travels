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


// Button while scroll
let myButton = document.getElementById('button_to_top');

console.log(myButton);

window.onscroll = function (){scrollFcuntion()};

function scrollFcuntion(){
    console.log(document.documentElement.scrollTop);
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){

        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}