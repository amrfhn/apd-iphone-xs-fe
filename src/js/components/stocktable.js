	/* Top Search box toggle */
  $(document).ready(function(){
    
    $(".mobiletab-btn").on("click", function(event){
   

      var tab = $(this).data("mobiletab");

      $(".stocktable").hide();
      $("."+tab).toggle();
      $(".mobiletab-btn").addClass("stock-active");
      $(".mobiletab-btn").not(this).removeClass("stock-active");


    });
    
});