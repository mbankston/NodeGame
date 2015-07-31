 var random = function random(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

$(document).ready(function() {
    $(".genproject").on('click', function () {
        $('#project').empty('#project');
       $('#project').append("<h2>Project Name " + random(1,9000) + "</h2>")
        $('#project').append("<div id='frontpoints' class='col-md-4'>Front End Scrum Points " +random(10,60) +"</div>")
        $('#project').append("<div id='clientpoints' class='col-md-4'>Client Side Scrum Points " +random(10,60) +"</div>")
        $('#project').append("<div id='serverpoints' class='col-md-4'>Server Side Scrum Points " +random(10,60) +"</div>")
        $('#project').append("<button id='assignstaff' class='btn btn-primary'>Assign Staff</button>")
    });
    $("body").on('click','#assignstaff', function() {
        $.ajax({
            url: "/employee-requestt",
            success: function (data) {
                console.log(data);
            }
        })
    });
//jquery on click
//append the following
//1.  Random Project name
//2. Front end and random(10,60)
//3. Clientside logic and random(10,60)
//4.  Serverside logic and random(10,60)