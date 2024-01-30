

const message = document.querySelector('.container-message');
const button = document.querySelector('.message-button');
const buttonSubmit = document.querySelector('.button_submit');

$('.button_submit').on('click', (event) => {
    $.ajax({
        type:'POST',
        url:'/sending',
        data: $('.form_contato').serializeArray(),
        success: function (result) {
            console.log(result);
        }   
    });
    event.preventDefault();
});

function loadMessage(){
    message.setAttribute('style', 'display: flex');
    message.classList.add('show');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function closeMessage(){
    message.setAttribute('style', 'display: none');
    message.classList.remove('show');
}

