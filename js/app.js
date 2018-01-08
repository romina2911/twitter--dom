$(document).ready(function() {
  var textArea = $('#tweet-area');
  // var textArea = document.querySelector('#tweet-area');
  var button = $('#tweet-btn');
  var msg = $('#messages');
  var contador = $('#count');
  var MAXCOUNT = 140;
  
  textArea.on('input', function(event) { //funcion manejadora de eventos para la var
  // console.log((event.target.value));
  // console.log((($(this)).val()).length);
  var long = $(this).val().length;
  contador.text(MAXCOUNT-long);
  if(long>0) {
      button.attr('disabled', false);
      if(long > 120) {
        contador.css('color', 'green');
      } else{
          contador.css('color', 'black');
      }
      if (long > 130) {
         contador.css('color', 'red');
      } if (long > 140) {
          button.attr('disabled', true);
      }
  }else{
      button.attr('disabled', true);
  }
  // if(long === 20){
  //     ($(this)).css('color', 'pink');
  //     button.attr('disabled', false);
  });
  button.on('click', function(event){
      event.preventDefault();
      msg.prepend('<div>'+textArea.val()+'</div>').css({'background-color':'white', 'color':'red'});
  });
  
  });