// Nav js

$(document).ready(function () {
    $("#nav").load('../../dynamic/Nav.html')
});

// Footer js

$(document).ready(function () {
    $("#footer").load('../../dynamic/Footer.html')
});

// Currency Calculator js

$(document).ready(function () {

    var copper = 0;
    var silver = 0;
    var electrum = 0;
    var gold = 0;
    var platinum = 0;

    $("#copperInput").keyup(function () {
        copper = $(this).val();
        silver = copper / 10;

        $("#silverInput").val(parseInt(silver));
        electrum = copper / 50;
        $("#electrumInput").val(parseInt(electrum));
        gold = copper / 100;
        $("#goldInput").val(parseInt(gold));
        platinum = copper / 1000;
        $("#platinumInput").val(parseInt(platinum));

    }).keyup();

    $("#silverInput").keyup(function () {
        silver = $(this).val();
        copper = silver * 10;
        $("#copperInput").val(parseInt(copper));
        electrum = silver / 5;
        $("#electrumInput").val(parseInt(electrum));
        gold = silver / 10;
        $("#goldInput").val(parseInt(gold));
        platinum = silver / 100;
        $("#platinumInput").val(parseInt(platinum));

    }).keyup();

    $("#electrumInput").keyup(function () {
        electrum = $(this).val();
        copper = electrum * 50;
        $("#copperInput").val(parseInt(copper));
        silver = electrum * 5;
        $("#silverInput").val(parseInt(silver));
        gold = electrum / 2;
        $("#goldInput").val(parseInt(gold));
        platinum = electrum / 20;
        $("#platinumInput").val(parseInt(platinum));

    }).keyup();

    $("#goldInput").keyup(function () {
        gold = $(this).val();
        copper = gold * 100;
        $("#copperInput").val(parseInt(copper));
        silver = gold * 10;
        $("#silverInput").val(parseInt(silver));
        electrum = gold * 2;
        $("#electrumInput").val(parseInt(electrum));
        platinum = gold / 10;
        $("#platinumInput").val(parseInt(platinum));

    }).keyup();

    $("#platinumInput").keyup(function () {
        platinum = $(this).val();
        copper = platinum * 1000;
        $("#copperInput").val(parseInt(copper));
        silver = platinum * 100;
        $("#silverInput").val(parseInt(silver));
        electrum = platinum * 20;
        $("#electrumInput").val(parseInt(electrum));
        gold = platinum * 10;
        $("#goldInput").val(parseInt(gold));

    }).keyup();
});

// Xp Chart js

$(document).ready(function () {
    $("#barbDiv").click(function () {
        $("#barbTable").removeClass("hidden");
        $("#bardTable").addClass("hidden");
        $("#clericTable").addClass("hidden");
        $("#druidTable").addClass("hidden");
        $("#fighterTable").addClass("hidden");
        $("#monkTable").addClass("hidden");
        $("#paladinTable").addClass("hidden");
        $("#rangerTable").addClass("hidden");
        $("#rogueTable").addClass("hidden");
        $("#sorcererTable").addClass("hidden");
        $("#warlockTable").addClass("hidden");
        $("#wizardTable").addClass("hidden");

        $("#barbDiv").addClass("active");
        $("#bardDiv").removeClass("active");
        $("#clericDiv").removeClass("active");
        $("#druidDiv").removeClass("active");
        $("#fighterDiv").removeClass("active");
        $("#monkDiv").removeClass("active");
        $("#paladinDiv").removeClass("active");
        $("#rangerDiv").removeClass("active");
        $("#rogueDiv").removeClass("active");
        $("#sorcererDiv").removeClass("active");
        $("#warlockDiv").removeClass("active");
        $("#wizardDiv").removeClass("active");
    });
    $("#bardDiv").click(function () {
        $("#barbTable").addClass("hidden");
        $("#bardTable").removeClass("hidden");
        $("#clericTable").addClass("hidden");
        $("#druidTable").addClass("hidden");
        $("#fighterTable").addClass("hidden");
        $("#monkTable").addClass("hidden");
        $("#paladinTable").addClass("hidden");
        $("#rangerTable").addClass("hidden");
        $("#rogueTable").addClass("hidden");
        $("#sorcererTable").addClass("hidden");
        $("#warlockTable").addClass("hidden");
        $("#wizardTable").addClass("hidden");

        $("#barbDiv").removeClass("active");
        $("#bardDiv").addClass("active");
        $("#clericDiv").removeClass("active");
        $("#druidDiv").removeClass("active");
        $("#fighterDiv").removeClass("active");
        $("#monkDiv").removeClass("active");
        $("#paladinDiv").removeClass("active");
        $("#rangerDiv").removeClass("active");
        $("#rogueDiv").removeClass("active");
        $("#sorcererDiv").removeClass("active");
        $("#warlockDiv").removeClass("active");
        $("#wizardDiv").removeClass("active");
    });
    $("#clericDiv").click(function () {
        $("#barbTable").addClass("hidden");
        $("#bardTable").addClass("hidden");
        $("#clericTable").removeClass("hidden");
        $("#druidTable").addClass("hidden");
        $("#fighterTable").addClass("hidden");
        $("#monkTable").addClass("hidden");
        $("#paladinTable").addClass("hidden");
        $("#rangerTable").addClass("hidden");
        $("#rogueTable").addClass("hidden");
        $("#sorcererTable").addClass("hidden");
        $("#warlockTable").addClass("hidden");
        $("#wizardTable").addClass("hidden");

        $("#barbDiv").removeClass("active");
        $("#bardDiv").removeClass("active");
        $("#clericDiv").addClass("active");
        $("#druidDiv").removeClass("active");
        $("#fighterDiv").removeClass("active");
        $("#monkDiv").removeClass("active");
        $("#paladinDiv").removeClass("active");
        $("#rangerDiv").removeClass("active");
        $("#rogueDiv").removeClass("active");
        $("#sorcererDiv").removeClass("active");
        $("#warlockDiv").removeClass("active");
        $("#wizardDiv").removeClass("active");
    });
    $("#druidDiv").click(function () {
        $("#barbTable").addClass("hidden");
        $("#bardTable").addClass("hidden");
        $("#clericTable").addClass("hidden");
        $("#druidTable").removeClass("hidden");
        $("#fighterTable").addClass("hidden");
        $("#monkTable").addClass("hidden");
        $("#paladinTable").addClass("hidden");
        $("#rangerTable").addClass("hidden");
        $("#rogueTable").addClass("hidden");
        $("#sorcererTable").addClass("hidden");
        $("#warlockTable").addClass("hidden");
        $("#wizardTable").addClass("hidden");

        $("#barbDiv").removeClass("active");
        $("#bardDiv").removeClass("active");
        $("#clericDiv").removeClass("active");
        $("#druidDiv").addClass("active");
        $("#fighterDiv").removeClass("active");
        $("#monkDiv").removeClass("active");
        $("#paladinDiv").removeClass("active");
        $("#rangerDiv").removeClass("active");
        $("#rogueDiv").removeClass("active");
        $("#sorcererDiv").removeClass("active");
        $("#warlockDiv").removeClass("active");
        $("#wizardDiv").removeClass("active");
    });
    $("#fighterDiv").click(function () {
        $("#barbTable").addClass("hidden");
        $("#bardTable").addClass("hidden");
        $("#clericTable").addClass("hidden");
        $("#druidTable").addClass("hidden");
        $("#fighterTable").removeClass("hidden");
        $("#monkTable").addClass("hidden");
        $("#paladinTable").addClass("hidden");
        $("#rangerTable").addClass("hidden");
        $("#rogueTable").addClass("hidden");
        $("#sorcererTable").addClass("hidden");
        $("#warlockTable").addClass("hidden");
        $("#wizardTable").addClass("hidden");

        $("#barbDiv").removeClass("active");
        $("#bardDiv").removeClass("active");
        $("#clericDiv").removeClass("active");
        $("#druidDiv").removeClass("active");
        $("#fighterDiv").addClass("active");
        $("#monkDiv").removeClass("active");
        $("#paladinDiv").removeClass("active");
        $("#rangerDiv").removeClass("active");
        $("#rogueDiv").removeClass("active");
        $("#sorcererDiv").removeClass("active");
        $("#warlockDiv").removeClass("active");
        $("#wizardDiv").removeClass("active");
    });
    $("#monkDiv").click(function () {
        $("#barbTable").addClass("hidden");
        $("#bardTable").addClass("hidden");
        $("#clericTable").addClass("hidden");
        $("#druidTable").addClass("hidden");
        $("#fighterTable").addClass("hidden");
        $("#monkTable").removeClass("hidden");
        $("#paladinTable").addClass("hidden");
        $("#rangerTable").addClass("hidden");
        $("#rogueTable").addClass("hidden");
        $("#sorcererTable").addClass("hidden");
        $("#warlockTable").addClass("hidden");
        $("#wizardTable").addClass("hidden");

        $("#barbDiv").removeClass("active");
        $("#bardDiv").removeClass("active");
        $("#clericDiv").removeClass("active");
        $("#druidDiv").removeClass("active");
        $("#fighterDiv").removeClass("active");
        $("#monkDiv").addClass("active");
        $("#paladinDiv").removeClass("active");
        $("#rangerDiv").removeClass("active");
        $("#rogueDiv").removeClass("active");
        $("#sorcererDiv").removeClass("active");
        $("#warlockDiv").removeClass("active");
        $("#wizardDiv").removeClass("active");
    });
    $("#paladinDiv").click(function () {
        $("#barbTable").addClass("hidden");
        $("#bardTable").addClass("hidden");
        $("#clericTable").addClass("hidden");
        $("#druidTable").addClass("hidden");
        $("#fighterTable").addClass("hidden");
        $("#monkTable").addClass("hidden");
        $("#paladinTable").removeClass("hidden");
        $("#rangerTable").addClass("hidden");
        $("#rogueTable").addClass("hidden");
        $("#sorcererTable").addClass("hidden");
        $("#warlockTable").addClass("hidden");
        $("#wizardTable").addClass("hidden");

        $("#barbDiv").removeClass("active");
        $("#bardDiv").removeClass("active");
        $("#clericDiv").removeClass("active");
        $("#druidDiv").removeClass("active");
        $("#fighterDiv").removeClass("active");
        $("#monkDiv").removeClass("active");
        $("#paladinDiv").addClass("active");
        $("#rangerDiv").removeClass("active");
        $("#rogueDiv").removeClass("active");
        $("#sorcererDiv").removeClass("active");
        $("#warlockDiv").removeClass("active");
        $("#wizardDiv").removeClass("active");
    });
    $("#rangerDiv").click(function () {
        $("#barbTable").addClass("hidden");
        $("#bardTable").addClass("hidden");
        $("#clericTable").addClass("hidden");
        $("#druidTable").addClass("hidden");
        $("#fighterTable").addClass("hidden");
        $("#monkTable").addClass("hidden");
        $("#paladinTable").addClass("hidden");
        $("#rangerTable").removeClass("hidden");
        $("#rogueTable").addClass("hidden");
        $("#sorcererTable").addClass("hidden");
        $("#warlockTable").addClass("hidden");
        $("#wizardTable").addClass("hidden");

        $("#barbDiv").removeClass("active");
        $("#bardDiv").removeClass("active");
        $("#clericDiv").removeClass("active");
        $("#druidDiv").removeClass("active");
        $("#fighterDiv").removeClass("active");
        $("#monkDiv").removeClass("active");
        $("#paladinDiv").removeClass("active");
        $("#rangerDiv").addClass("active");
        $("#rogueDiv").removeClass("active");
        $("#sorcererDiv").removeClass("active");
        $("#warlockDiv").removeClass("active");
        $("#wizardDiv").removeClass("active");
    });
    $("#rogueDiv").click(function () {
        $("#barbTable").addClass("hidden");
        $("#bardTable").addClass("hidden");
        $("#clericTable").addClass("hidden");
        $("#druidTable").addClass("hidden");
        $("#fighterTable").addClass("hidden");
        $("#monkTable").addClass("hidden");
        $("#paladinTable").addClass("hidden");
        $("#rangerTable").addClass("hidden");
        $("#rogueTable").removeClass("hidden");
        $("#sorcererTable").addClass("hidden");
        $("#warlockTable").addClass("hidden");
        $("#wizardTable").addClass("hidden");

        $("#barbDiv").removeClass("active");
        $("#bardDiv").removeClass("active");
        $("#clericDiv").removeClass("active");
        $("#druidDiv").removeClass("active");
        $("#fighterDiv").removeClass("active");
        $("#monkDiv").removeClass("active");
        $("#paladinDiv").removeClass("active");
        $("#rangerDiv").removeClass("active");
        $("#rogueDiv").addClass("active");
        $("#sorcererDiv").removeClass("active");
        $("#warlockDiv").removeClass("active");
        $("#wizardDiv").removeClass("active");
    });
    $("#sorcererDiv").click(function () {
        $("#barbTable").addClass("hidden");
        $("#bardTable").addClass("hidden");
        $("#clericTable").addClass("hidden");
        $("#druidTable").addClass("hidden");
        $("#fighterTable").addClass("hidden");
        $("#monkTable").addClass("hidden");
        $("#paladinTable").addClass("hidden");
        $("#rangerTable").addClass("hidden");
        $("#rogueTable").addClass("hidden");
        $("#sorcererTable").removeClass("hidden");
        $("#warlockTable").addClass("hidden");
        $("#wizardTable").addClass("hidden");

        $("#barbDiv").removeClass("active");
        $("#bardDiv").removeClass("active");
        $("#clericDiv").removeClass("active");
        $("#druidDiv").removeClass("active");
        $("#fighterDiv").removeClass("active");
        $("#monkDiv").removeClass("active");
        $("#paladinDiv").removeClass("active");
        $("#rangerDiv").removeClass("active");
        $("#rogueDiv").removeClass("active");
        $("#sorcererDiv").addClass("active");
        $("#warlockDiv").removeClass("active");
        $("#wizardDiv").removeClass("active");
    });
    $("#warlockDiv").click(function () {
        $("#barbTable").addClass("hidden");
        $("#bardTable").addClass("hidden");
        $("#clericTable").addClass("hidden");
        $("#druidTable").addClass("hidden");
        $("#fighterTable").addClass("hidden");
        $("#monkTable").addClass("hidden");
        $("#paladinTable").addClass("hidden");
        $("#rangerTable").addClass("hidden");
        $("#rogueTable").addClass("hidden");
        $("#sorcererTable").addClass("hidden");
        $("#warlockTable").removeClass("hidden");
        $("#wizardTable").addClass("hidden");

        $("#barbDiv").removeClass("active");
        $("#bardDiv").removeClass("active");
        $("#clericDiv").removeClass("active");
        $("#druidDiv").removeClass("active");
        $("#fighterDiv").removeClass("active");
        $("#monkDiv").removeClass("active");
        $("#paladinDiv").removeClass("active");
        $("#rangerDiv").removeClass("active");
        $("#rogueDiv").removeClass("active");
        $("#sorcererDiv").removeClass("active");
        $("#warlockDiv").addClass("active");
        $("#wizardDiv").removeClass("active");
    });
    $("#wizardDiv").click(function () {
        $("#barbTable").addClass("hidden");
        $("#bardTable").addClass("hidden");
        $("#clericTable").addClass("hidden");
        $("#druidTable").addClass("hidden");
        $("#fighterTable").addClass("hidden");
        $("#monkTable").addClass("hidden");
        $("#paladinTable").addClass("hidden");
        $("#rangerTable").addClass("hidden");
        $("#rogueTable").addClass("hidden");
        $("#sorcererTable").addClass("hidden");
        $("#warlockTable").addClass("hidden");
        $("#wizardTable").removeClass("hidden");

        $("#barbDiv").removeClass("active");
        $("#bardDiv").removeClass("active");
        $("#clericDiv").removeClass("active");
        $("#druidDiv").removeClass("active");
        $("#fighterDiv").removeClass("active");
        $("#monkDiv").removeClass("active");
        $("#paladinDiv").removeClass("active");
        $("#rangerDiv").removeClass("active");
        $("#rogueDiv").removeClass("active");
        $("#sorcererDiv").removeClass("active");
        $("#warlockDiv").removeClass("active");
        $("#wizardDiv").addClass("active");
    });
});

// Monster List js

$(document).ready(function () {

    $("#sizeChoice li a").click(function () {
        $("#sizeBtn:first-child").text($(this).text());
        $("#sizeBtn:first-child").val($(this).text());
        $("#sizeBtn:first-child").append("<span class=\"caret\"></span>");
    });

    $("#typeChoice li a").click(function () {
        $("#typeBtn:first-child").text($(this).text())
        $("#typeBtn:first-child").val($(this).text());
        $("#typeBtn:first-child").append("<span class=\"caret\"></span>");
    });

    $("#clearBtn").click(function () {
        $("#sizeBtn:first-child").text("Size ");
        $("#sizeBtn:first-child").val("");
        $("#sizeBtn:first-child").append("<span class=\"caret\"></span>");

        $("#typeBtn:first-child").text("Type ");
        $("#typeBtn:first-child").val("");
        $("#typeBtn:first-child").append("<span class=\"caret\"></span>");

        $("#monsterName").val("");
        $("#hp").val("");
        $("#ac").val("");
        $("#cr").val("");
        $("#xp").val("");

    });
});


// Initiative Tracker js

$(document).ready(function () {

    var track = [];
    var result = 0;

    // function that will search for an item, in an object, in an array
    function arrayObjectIndexOf(myArray, searchTerm, property) {
        for (var i = 0, len = myArray.length; i < len; i++) {
            if (myArray[i][property] === searchTerm) return i;
        }
        return -1;
    }

    //function to clear and print cells
    function print() {
        // Erase all elements
        $("#cellContainer").empty();

        // Generate cell for each object in array

        for (var i = 0; i < track.length; i++) {
            $("#cellContainer").append('<div class="col-sm-12"><div class="input-group row-margin"><span class="trackInitative input-group-addon">' + track[i].initative + '</span><input id="initative" type="text" placeholder="Initative" value="' + track[i].name + '" disabled class="trackName form-control" aria-label="..."><span class="input-group-btn"><button class="btnRemove btn btn-default" type="button">X</button></span></div></div>');
            
        }

        //button on each cell that will remove its entry from the page as well as removing itself from the array
        $(".btnRemove").click(function () {         

            var index = arrayObjectIndexOf(track, $(".trackName").val(), "name");           
            track.splice(index, 1);

            $(this).parent().parent().parent().remove();
        })
    }

    //called when key is pressed in initative textbox
    $("#initative").keypress(function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    // will add a cell to page in correct order based on initative
    $("#addBtn").click(function () {

        // if creature field is empty, don't commit and change background color of field
        if ($("#creature").val() == "") {

            $("#creature").stop().css("background-color", "#FFFF9C");

            // check for same for initative and apply formatting
            if (($("#initative").val() == "")) {
                $("#initative").stop().css("background-color", "#FFFF9C");
            } else {
                $("#initative").stop().css("background-color", "#FFFFFF");
            }

        // if initative field is empty, don't commit and change background color of field
        } else if ($("#initative").val() == "") {

            $("#initative").stop().css("background-color", "#FFFF9C");

            // check for same for creature and apply formatting
            if (($("#creature").val() == "")) {
                $("#creature").stop().css("background-color", "#FFFF9C");
            } else {
                $("#creature").stop().css("background-color", "#FFFFFF");
            }
        // else commit data to array
        } else {
            
            // reset formatting of input boxes
            $("#creature").stop().css("background-color", "#FFFFFF");
            $("#initative").stop().css("background-color", "#FFFFFF");

            // push inputs to array
            track.push({ name: $("#creature").val(), initative: $("#initative").val() });

            // reset inputs to default value
            $("#creature").val("");
            $("#initative").val("");

            // sorts initative by greatest to lowest
            track.sort(function (a, b) { return b.initative - a.initative });

            print();

            $("#creature").focus();
        }
    })

    //clears creature and initative textbox and arrays. Also deletes all cells off page after prompting user
    $("#resetBtn").click(function () {
        var choice = confirm("Are you sure?");
        if (choice == true) {
            track = [];
            $("#cellContainer").empty();
            $(this).text("Reset");
        }
        $("#initative").stop().css("background-color", "#FFFFFF");
        $("#creature").stop().css("background-color", "#FFFFFF");
        $("#creature").val("");
        $("#initative").val("");
        $("#creature").focus();

    })

    //moves the first in the array to the back and reprints cells
    $("#nextBtn").click(function () {
        track.push(track.shift());
        print();
    })



});