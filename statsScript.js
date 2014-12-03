
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
    ['Correct',  1],
    ['Incorrect',  9]
  ];
  var randomNumberInitialData = [
    ['Response', '# Responses'],
    ['Correct',  4],
    ['Incorrect',  3]
  ];
  
  var pollingCurrentData = pollingInitialData;
  var quizCurrentData = quizInitialData;
  var randomNumberCurrentData = randomNumberInitialData;
  
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
    hAxis: {title: 'Option'},
	colors: ['#EF7026', 'gray']
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
    hAxis: {title: 'Response'},
	colors: ['#EF7026', 'gray']
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
    hAxis: {title: 'Response'},
	colors: ['#EF7026', 'gray']
  };

  //create a new chart in the div with id='chart'
  var chart = new google.visualization.ColumnChart(document.getElementById('randomNumberChart'));

  //draw the chart with the given data and options
  chart.draw(formattedData, options);

}


$(document).ready(function(){
	//using jquery to check if a checkbox is checked or not whenever it is clicked
  $("#pollingSeniorMgr2").click(function(){
    if($("#pollingSeniorMgr2").is(":checked")) {
	//make some new data
	//this is weird because everyone who responded to this poll is under Kate
	pollingCurrentData[1][1] += 4;
	pollingCurrentData[2][1] += 3;
	pollingCurrentData[3][1] += 3;
  //redraw the chart with the new data
  pollingDrawChart(pollingCurrentData);
	} else {
	pollingCurrentData[1][1] -= 4;
	pollingCurrentData[2][1] -= 3;
	pollingCurrentData[3][1] -= 3;
	pollingDrawChart(pollingCurrentData);
	}
  });
  
  $("#pollingManager4").click(function(){
    if($("#pollingManager4").is(":checked")) {
	//make some new data
	//this is weird because everyone who responded to this poll is under Matt
	pollingCurrentData[1][1] += 4;
	pollingCurrentData[2][1] += 3;
	pollingCurrentData[3][1] += 3;
  //redraw the chart with the new data
  pollingDrawChart(pollingCurrentData);
	} else {
	pollingCurrentData[1][1] -= 4;
	pollingCurrentData[2][1] -= 3;
	pollingCurrentData[3][1] -= 3;
	pollingDrawChart(pollingCurrentData);
	}
  });
  
  $("#quizSeniorMgr2").click(function(){
    if($("#quizSeniorMgr2").is(":checked")) {
	//make some new data
	//this is weird because everyone who responded to this poll is under Kate
	quizCurrentData[1][1] += 1;
	quizCurrentData[2][1] += 9;
  //redraw the chart with the new data
  quizDrawChart(quizCurrentData);
	} else {
	quizCurrentData[1][1] -= 1;
	quizCurrentData[2][1] -= 9;
  quizDrawChart(quizCurrentData);
	}
  });
  
  $("#quizManager4").click(function(){
    if($("#quizManager4").is(":checked")) {
	//make some new data
	//this is weird because everyone who responded to this poll is under Matt
	quizCurrentData[1][1] += 1;
	quizCurrentData[2][1] += 9;
  //redraw the chart with the new data
  quizDrawChart(quizCurrentData);
	} else {
	quizCurrentData[1][1] -= 1;
	quizCurrentData[2][1] -= 9;
  quizDrawChart(quizCurrentData);
	}
  });
  
  $("#quizShift1").click(function(){
    if($("#quizShift1").is(":checked")) {
	//make some new data
	quizCurrentData[2][1] += 1;
  //redraw the chart with the new data
  quizDrawChart(quizCurrentData);
	} else {
	quizCurrentData[2][1] -= 1;
  quizDrawChart(quizCurrentData);
	}
  });
  
  $("#quizShift2").click(function(){
    if($("#quizShift2").is(":checked")) {
	//make some new data
	quizCurrentData[1][1] += 1;
  //redraw the chart with the new data
  quizDrawChart(quizCurrentData);
	} else {
	quizCurrentData[1][1] -= 1;
  quizDrawChart(quizCurrentData);
	}
  });
  
  $("#quizShift3").click(function(){
    if($("#quizShift3").is(":checked")) {
	//make some new data
	quizCurrentData[2][1] += 1;
  //redraw the chart with the new data
  quizDrawChart(quizCurrentData);
	} else {
	quizCurrentData[2][1] -= 1;
  quizDrawChart(quizCurrentData);
	}
  });
  
  $("#quizShift4").click(function(){
    if($("#quizShift4").is(":checked")) {
	//make some new data
	quizCurrentData[2][1] += 1;
  //redraw the chart with the new data
  quizDrawChart(quizCurrentData);
	} else {
	quizCurrentData[2][1] -= 1;
  quizDrawChart(quizCurrentData);
	}
  });
  
  $("#quizShift5").click(function(){
    if($("#quizShift5").is(":checked")) {
	//make some new data
	quizCurrentData[2][1] += 2;
  //redraw the chart with the new data
  quizDrawChart(quizCurrentData);
	} else {
	quizCurrentData[2][1] -= 2;
  quizDrawChart(quizCurrentData);
	}
  });
  
  $("#quizShift6").click(function(){
    if($("#quizShift6").is(":checked")) {
	//make some new data
	quizCurrentData[2][1] += 2;
  //redraw the chart with the new data
  quizDrawChart(quizCurrentData);
	} else {
	quizCurrentData[2][1] -= 2;
  quizDrawChart(quizCurrentData);
	}
  });
  
  $("#quizShift7").click(function(){
    if($("#quizShift7").is(":checked")) {
	//make some new data
	quizCurrentData[2][1] += 1;
  //redraw the chart with the new data
  quizDrawChart(quizCurrentData);
	} else {
	quizCurrentData[2][1] -= 1;
  quizDrawChart(quizCurrentData);
	}
  });
  
  $("#quizShift8").click(function(){
    if($("#quizShift8").is(":checked")) {
	//make some new data
	quizCurrentData[2][1] += 1;
  //redraw the chart with the new data
  quizDrawChart(quizCurrentData);
	} else {
	quizCurrentData[2][1] -= 1;
  quizDrawChart(quizCurrentData);
	}
  });
  
  $("#quizTraining1").click(function(){
    if($("#quizTraining").is(":checked")) {
	//make some new data
	quizCurrentData[1][1] += 1;
	quizCurrentData[2][1] += 9;
  //redraw the chart with the new data
  quizDrawChart(quizCurrentData);
	} else {
	quizCurrentData[1][1] -= 1;
	quizCurrentData[2][1] -= 9;
  quizDrawChart(quizCurrentData);
	}
  });
  
});
