$(document).ready(function(){

var gaTrackerEle = $(".ga-tracker");

if(gaTrackerEle.length>0){

    gaTrackerEle.each(function(){

        var gaItem =$(this);

        gaItem.on("click", function(event){
            
            event.preventDefault();
            var href = $(this).attr("href");
            var gaLabel = $(this).data("galabel");

            if(gadataLayerPush(gaLabel)){
                window.location=href;
            }

        });

    });

}

});

function gadataLayerPush(gaLabel){

    dataLayer.push({
        "event" : "preorderiphonex",
        "gaCategory" : "iPhone X Pre-Order",
        "gaAction" : "Click on Banner",
        "gaLabel" : gaLabel
    });
    
    console.log("data layer");

    return true;

}