

        $( document ).ready(function() {

        var targetNumber;
        var wins = 0;
        var losses = 0;
        var counter;
        var imageArray = ["assets/images/white crystal.jpg", "assets/images/purple crystal.jpg", "assets/images/green crystal.png", "http://wallpaperweb.org/wallpaper/digital_art/1920x1200/708_crystals.jpg"];
        

        function reset() {
            $("#crystals").text("");
            counter = 0;
            targetNumber = Math.floor(Math.random() * 110);
            $("#number-to-guess").text(targetNumber);
            for (var i = 0; i < 4; i++) {

                var random = Math.floor(Math.random() * 12);
                console.log(random);

                var imageCrystal = $("<img>");
    

                imageCrystal.addClass("crystal-image");
                imageCrystal.attr("src", imageArray[i]);


                imageCrystal.attr("data-crystalvalue", random);
                $("#crystals").append(imageCrystal);
            }
        }
        reset();
        
        //var numberOptions = [10, 5, 9, 2];
        //var increment = numberOptions[Math.round(Math.random())];

        $("#crystals").on("click", ".crystal-image", function () {
            console.log("test");
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);
            counter += crystalValue;

            $("#current-score").text(counter);

            if (counter === targetNumber) {
                alert("You win!");
                wins += 1;
                $("#w").text(wins);
                reset();
                //document.getElementById("w").innerHTML= wins;
                //console.log("wins: " + wins);
                //location.reload();
            }
            else if (counter > targetNumber) {
                alert("You lose!");
                losses += 1;
                document.getElementById("l").innerHTML = losses;
                reset();
                //location.reload();
            }

        });
        

        });
        
        


    