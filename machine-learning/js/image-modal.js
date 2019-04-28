$(function() {
    console.log( "ready!" );
    $('.modal-compatible').on('click', function(){
      console.log('clicked!');
      $('#image-modal-container').removeClass('modal-hidden');
      $('#image-modal-container').addClass('modal-shown');
    })

    $('#image-modal-container').on('click', function(){
      console.log('clicked!');
      $('#image-modal-container').removeClass('modal-shown');
      $('#image-modal-container').addClass('modal-hidden');
    })

});
