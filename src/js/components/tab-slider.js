$(document).ready(function(){

    //Tab to slider on Mobile View
    var tabsWrapper = $(".three-tabs-btn");

    if(tabsWrapper.length>0){

        tabsWrapper.each(function(){
            
            //Check if mobile display
            if( $(window).width() < 991 ){
                
                var self = $(this);
                var tabPrev = self.find(".tab-prev");
                var tabNext = self.find(".tab-next");

                //Hide prev on load
                tabPrev.hide();

                tabPrev.on("click", function(event){

                    event.preventDefault();

                    var pricePlanBtn = $(this).parent().find(".priceplan-btn");
                    var pricePlanBtnActive = $(this).parent().find(".priceplan-btn.plan-active");

                    if( pricePlanBtnActive.prev().hasClass("priceplan-btn") ){

                        pricePlanBtnActive.hide();
                        pricePlanBtnActive.prev().css("display","block");
                        pricePlanBtnActive.prev().trigger("click");
                        pricePlanBtnActive = pricePlanBtnActive.prev();

                        if( !pricePlanBtnActive.prev().hasClass("priceplan-btn") ){
                            $(this).hide();
                        }

                    }

                    tabNext.show();
                });

                tabNext.on("click", function(event){

                    event.preventDefault();
                    
                    var pricePlanBtn = $(this).parent().find(".priceplan-btn");
                    var pricePlanBtnActive = $(this).parent().find(".priceplan-btn.plan-active");

                    if( pricePlanBtnActive.next().hasClass("priceplan-btn") ){

                        pricePlanBtnActive.hide();
                        pricePlanBtnActive.next().css("display","block");
                        pricePlanBtnActive.next().trigger("click");
                        pricePlanBtnActive = pricePlanBtnActive.next();

                        if( !pricePlanBtnActive.next().hasClass("priceplan-btn") ){
                            $(this).hide();
                        }

                    }

                    tabPrev.show();
                });


            }


        });

    }

});