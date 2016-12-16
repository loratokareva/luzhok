// Для замены текста ссылки раскрытии/закрытия определенного блока аккордиона
var buttonChange = document.querySelectorAll('a[data-parent="#accordion-article"]');

for( i = 0 ; i < buttonChange.length; i++){
    buttonChange[i].onclick = textChange;
}

function textChange() {
    for( i = 0 ; i < buttonChange.length; i++){
        if( buttonChange[i] != this){
            buttonChange[i].innerHTML = 'подробнее';
        }
    }
    if( this.innerHTML == 'подробнее' )  this.innerHTML = 'свернуть';
    else  this.innerHTML = 'подробнее';
}
// смена стиля у сайта
var inputRadio = document.querySelectorAll('form[name="chooseColor"] input');

for (i = 0; i < inputRadio.length; i++ ) {
    inputRadio[i].onclick = getColor;
}

function getColor(){
    document.body.className = this.getAttribute('value');
}

// удаление сообщений конференции
var messageButton = document.querySelectorAll('.comments-block .message-close');

for (var i = 0; i < messageButton.length; i++) {
    messageButton[i].onclick = function() {
        var parentCurrent = this.parentNode;
        while(!parentCurrent.classList.contains('comments-block')){
            parentCurrent = parentCurrent.parentNode;
        }
        parentCurrent.parentNode.removeChild(parentCurrent);

    };
}