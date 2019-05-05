// Need to put .modal-compatible class to any image to appear in the modal
$(function() {
    document.getElementById('vsauce-video').style.height = document.getElementById('vsauce-video').offsetWidth * 0.5625 + 'px';
    console.log( "ready!" );
    let aspectRatio = 1;

    $('.modal-compatible').on('click', function(){
      $('#image-modal-container').removeClass('modal-hidden');
      $('#image-modal-container').addClass('modal-shown');
      setModalDimensions(jQuery(window).width(), jQuery(window).height(), this);
    })

    $(window).on('click', function(e){
      // console.log(e);
      if(e.target == $('#image-modal-container')[0] || e.target == $('#nav-ul')[0]) {
        $('#image-modal-container').removeClass('modal-shown');
        $('#image-modal-container').addClass('modal-hidden');
      }
    })

    $('#modal-close-btn').on('click', function(){
      $('#image-modal-container').removeClass('modal-shown');
      $('#image-modal-container').addClass('modal-hidden');
      setModalDimensions(jQuery(window).width(), jQuery(window).height(), this);
    })

    $(window).on("resize", function(){
      setModalDimensions(jQuery(window).width(), jQuery(window).height())
    })

    function setModalDimensions(w,h,image) {
      let modalContent = $('#image-modal-content');
      let modalImage = document.getElementById('modal-image');
      if (image) {
        let source = image.getAttribute("src");
        $('#modal-image').attr('src', source);
        aspectRatio = image.clientWidth/image.clientHeight;
      }

      let contentWidth = 0.8*w;
      let contentHeight = contentWidth * (1/aspectRatio);
      modalContent.css({height: contentHeight, width: contentWidth});

    }
});
