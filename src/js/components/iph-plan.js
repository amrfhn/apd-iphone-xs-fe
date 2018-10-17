	/* Top Search box toggle */
  $(document).ready(function(){
    
    $(".priceplan-btn").on("click", function(event){
   

      var tab = $(this).data("priceplan");

      $(".plan-tab").hide();
      $("."+tab).toggle();
      $(".priceplan-btn").addClass("plan-active");
      $(".priceplan-btn").not(this).removeClass("plan-active");
      $(".plan-tab").addClass("isActive");
      $(".plan-tab").not(this).removeClass("isActive");

    });
    
});