	/* Top Search box toggle */
  $(document).ready(function(){
    
    $(".slide-toggle").on("click", function(event){
   

      var tab = $(this).data("pricetab");

      //$(".price-tab").hide();

      $(".price-tab").removeClass("tab-active");
      $("."+tab).addClass("tab-active");

      //$("."+tab).toggle();
      $(".slide-toggle").addClass("active");
      $(".slide-toggle").not(this).removeClass("active");


    });
    
});