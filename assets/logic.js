$(document).ready(function () {



    var dessertsArray = ["Ice cream", "cookies", "brownies"]

    // This makes buttons and adds gifs
    function populateButtons(dessertsArray, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();

        for (var i = 0; i < dessertsArray.length; i++) {
            var searchedGif = $("<button>");
            searchedGif.addClass(classToAdd);
            searchedGif.attr("data-type", dessertsArray[i]);
            searchedGif.text(dessertsArray[i]);
            $(areaToAddTo).append(searchedGif);

        }
    }

    $(document).on("click", ".searchButton", function () {
        $(".gifs").empty();
        

        var type = $(this).attr("data-type");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=fLSK8kQLL6eVTpieZ7yy7EQ3fJa2HkPs" + "&limit=5";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var dessertsDiv = $("<div class=\"dessert-item\">");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var animated = results[i].images.fixed_height.url;
                    var still = results[i].images.fixed_height_still.url;

                    var dessertsImg = $("<img>");
                    dessertsImg.attr("src", still);
                    dessertsImg.attr("data-still", still);
                    dessertsImg.attr("data-animate", animated);
                    dessertsImg.attr("data-state", "still");
                    dessertsImg.addClass("desserts-image");

                    dessertsDiv.append(p);
                    dessertsDiv.append(dessertsImg);

                    $(".gifs").append(dessertsDiv);
                }
            });

        $.ajax()
    })

    populateButtons(dessertsArray, "searchButton", "#desserts");

    $(document).on("click", ".desserts-image", function () {

        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    $("#add-dessert").on("click", function (event) {
        event.preventDefault();
        var newDessert = $("input").eq(0).val();

        if (newDessert.length) {
            dessertsArray.push(newDessert);
        }

        populateButtons(dessertsArray, "searchButton", "#desserts");
    });

})