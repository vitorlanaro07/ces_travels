function plusDivs(n) {
    showDivs (slideIndex += n);
}

var slideIndex = 1;

showDivs(slideIndex);

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("slides");

    //To modify number on display Ex: 1/4 -> 2/4 _3/4 -> 4/4 and repeating
    document.getElementsByClassName("pic_current")[0].innerHTML=n;
    document.getElementsByClassName("pic_total")[0].innerHTML=x.length;

    console.log(n, x.length);
    try {
        var names = document.getElementsByClassName("names");
    } catch (error) {
    }
    
    if (n > x.length){
        document.getElementsByClassName("pic_current")[0].innerHTML=1;
        slideIndex = 1;
    }
    if (n < 1){
        document.getElementsByClassName("pic_current")[0].innerHTML= x.length;
        slideIndex = x.length;
    }

    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
        try {
            names[i].style.display = "none";
        } catch (error) {
        }
        

    }
    x[slideIndex-1].style.display = "block";
    try {
        names[slideIndex-1].style.display = "block";
    } catch (error) {
    }  
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