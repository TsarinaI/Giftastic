var searchArray = ["Ice cream", "cookies", "brownies"]



function populateButtons(searchArray, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();
    for (let i = 0; i < searchArray.length; i++) {
        var searchedGif = $("<button");
        searchedGif.addClass(classToAdd);
        searchedGif.attr("data-type", searchArray[i]);
        searchedGif.text(searchArray[i]);
        $(areaToAddTo).append(searchedGif);
        
    }
}

$(function() {

})