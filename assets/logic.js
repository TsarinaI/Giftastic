$(document).ready(function () {



    var dessertsArray = ["Ice cream", "cookies", "brownies"]

    // This makes buttons and adds gifs
    function populateButtons(dessertsArray, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();

        for (let i = 0; i < dessertsArray.length; i++) {
            var searchedGif = $("<button");
            searchedGif.addClass(classToAdd);
            searchedGif.attr("data-type", dessertsArray[i]);
            searchedGif.text(dessertsArray[i]);
            $(areaToAddTo).append(searchedGif);

        }
    }

    $(document).on("click", ".searchButton", function () {
        $("#desserts").empty();
        $(".searchButton").removeClass("active");
        $(this).addClass("active");

        var type = $(this).data("type");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q" + type + "&api_key=fLSK8kQLL6eVTpieZ7yy7EQ3fJa2HkPs" + "&limit=5";
        $.ajax()
    })

    $(function () {

    })

})