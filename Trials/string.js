$.ajax({
    url: 'database.csv',
    success: function(response) {
       readCSVFile(response);
    }
});


function readCSVFile(response) {
    var lines = response.split("\n");

    for (var i = 0; i < lines.length; i++) {
       var _firstColumn = lines[i].split(";")[0];     //First column (Split on the separator!)

       //Do your stuff
    }
};