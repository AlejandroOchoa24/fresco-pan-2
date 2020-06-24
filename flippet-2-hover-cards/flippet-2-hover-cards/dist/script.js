$(document).ready(function(){
  /*==============================
       Flippet hover cards
===============================*/ 

  function expandImage(){
    var $name = 'basic-hover-cards',
        $block = $('.flippet[data-type="'+$name+'"]'),
        $ico = $block.find('.expand'),
        $light = $('#lightbox');

    $ico.on('click',function(e){
      e.preventDefault();
      var $this = $(this),
          $url = $this.parent().parent().find('img').attr('src');
      $block.prepend('<div id="lightbox" ><img src="'+$url+'"  /></div>');
     
      if($('body').find('img')){
        $('#lightbox img').on('click',function(e){
          e.preventDefault();
          var $this = $(this);
          $this.parent().fadeOut(500);  
          setTimeout(function(){
            $this.parent().remove();
          },600);
        });
      }
    });   

    

  }
  //call expand function
  expandImage();
});