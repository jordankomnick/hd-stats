
//load google's chart packages
google.load("visualization", "1", {packages:["corechart"]});

//create some initial data
var pollingInitialData = [
    ['Option', '# Responses'],
    ['In Person',  4],
    ['Email',  3],
    ['Voice',  3],
    ['Visual',  0]
  ];
  var quizInitialData = [
    ['Response', '# Responses'],
    ['Correct',  4],
    ['Incorrect',  3]
  ];
  var randomNumberInitialData = [
    ['Response', '# Responses'],
    ['Correct',  4],
    ['Incorrect',  3]
  ];
  
//once google's packages have loaded, call the drawChart function w/ initial data
google.setOnLoadCallback(function(){ pollingDrawChart(pollingInitialData) });
google.setOnLoadCallback(function(){ quizDrawChart(quizInitialData) });
google.setOnLoadCallback(function(){ randomNumberDrawChart(randomNumberInitialData) });


//draws the chart with the data given
function pollingDrawChart(data) {

//formats the data array into something the charts can use
var formattedData = google.visualization.arrayToDataTable(data);

//set chart options
  var options = {
    title: 'How do you like to receive information?',
    hAxis: {title: 'Option'}
  };

  //create a new chart in the div with id='chart'
  var chart = new google.visualization.ColumnChart(document.getElementById('pollingChart'));

  //draw the chart with the given data and options
  chart.draw(formattedData, options);

}

//draws the chart with the data given
function quizDrawChart(data) {

//formats the data array into something the charts can use
var formattedData = google.visualization.arrayToDataTable(data);

//set chart options
  var options = {
    title: 'What is the lowest price appliance to get no interest if paid in full in a year?',
    hAxis: {title: 'Response'}
  };

  //create a new chart in the div with id='chart'
  var chart = new google.visualization.ColumnChart(document.getElementById('quizChart'));

  //draw the chart with the given data and options
  chart.draw(formattedData, options);

}

//draws the chart with the data given
function randomNumberDrawChart(data) {

//formats the data array into something the charts can use
var formattedData = google.visualization.arrayToDataTable(data);

//set chart options
  var options = {
    title: 'Product ID 8923 has been recalled. Notify callers.',
    hAxis: {title: 'Response'}
  };

  //create a new chart in the div with id='chart'
  var chart = new google.visualization.ColumnChart(document.getElementById('randomNumberChart'));

  //draw the chart with the given data and options
  chart.draw(formattedData, options);

}


$(document).ready(function(){
	//using jquery to check if a checkbox is checked or not whenever it is clicked
  $("#pollingOption1").click(function(){
    if($("#pollingOption1").is(":checked")) {
	//make some new data
	var pollingOption1CheckedData = [
    ['Option', '# Responses'],
    ['In Person',  4],
    ['Email',  10],
    ['Voice',  5],
    ['Visual',  1]
  ];
  //redraw the chart with the new data
  pollingDrawChart(pollingOption1CheckedData);
	} else {
		var pollingOption1UncheckedData = [
    ['Option', '# Responses'],
    ['In Person',  4],
    ['Email',  3],
    ['Voice',  3],
    ['Visual',  0]
  ];
  pollingDrawChart(pollingOption1UncheckedData);
	}
  });
});
