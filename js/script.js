var versenha = document.querySelector('#password');
var input = document.querySelector('#pass input');

versenha.addEventListener('click', function(){
    var senha = input.value;

    if (input.getAttribute('type') == 'text') {
        input.setAttribute('type', 'password');
        versenha.setAttribute('class', 'fa-regular fa-eye');
    } else {
        versenha.setAttribute('class', 'fa-regular fa-eye-slash');
        input.setAttribute('type', 'text');
    }
});
