
//load google's chart packages
google.load("visualization", "1", {packages:["corechart"]});

//create some initial data
var initialData = [
    ['Option', '# Responses'],
    ['1',  50],
    ['2',  20],
    ['3',  30],
    ['4',  25]
  ];
  
//once google's packages have loaded, call the drawChart function w/ initial data
google.setOnLoadCallback(function(){ drawChart(initialData) });

//draws the chart with the data given
function drawChart(data) {

//formats the data array into something the charts can use
var formattedData = google.visualization.arrayToDataTable(data);

//set chart options
  var options = {
    title: 'Test Question',
    hAxis: {title: 'Option', titleTextStyle: {color: 'red'}}
  };

  //create a new chart in the div with id='chart'
  var chart = new google.visualization.ColumnChart(document.getElementById('chart'));

  //draw the chart with the given data and options
  chart.draw(formattedData, options);

}


$(document).ready(function(){
	//using jquery to check if a checkbox is checked or not whenever it is clicked
  $("#option1").click(function(){
    if($("#option1").is(":checked")) {
	//make some new data
		var box1CheckedData = [
    ['Option', '# Responses'],
    ['1',  100],
    ['2',  20],
    ['3',  30],
    ['4',  25]
  ];
  //redraw the chart with the new data
  drawChart(box1CheckedData);
	} else {
		var box1UncheckedData = [
    ['Option', '# Responses'],
    ['1',  50],
    ['2',  20],
    ['3',  30],
    ['4',  25]
  ];
  drawChart(box1UncheckedData);
	}
  });
});
