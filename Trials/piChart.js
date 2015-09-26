
window.onload = function () {

	

/*d3.csv.parse = function(data.country) {
  var header;
  return d3.csv.parseRows(text, function(row, i) {
    if (i) {
      var o = {}, j = -1, m = header.length;
      while (++j < m) o[header[j]] = row[j];
      return o;
    } else {
      header = row;
      return null;
    }*/
  

	
	//function makeChart(){
	d3.csv("database.csv", function(data) {
		
	data.forEach(function(d) {
    	d.val = +d.val;
    	
  	});
  	

	var scale = new Plottable.Scales.Linear(); 
	/*var nameScale = new Plottable.Scales.Category(); 
	nameScale.scale(["India","India","India","India","India"]);
	*/
	var colorScale = new Plottable.Scales.Color();
	colorScale.scale(["#BDCEF0", "#5279C7"]);


	function getXDataValue(d) {
    return d.val;
  	}
  	
	
	var plot = new Plottable.Plots.Pie()
	.addDataset(new Plottable.Dataset(data))
	//.labelFormatter(function(d){return "val"})
	.labelsEnabled(true)
	.sectorValue(getXDataValue, scale)
	.attr("fill",getXDataValue, colorScale)
	//.attr("country", getXDataValue, nameScale)
	
	

	var title = new Plottable.Components.TitleLabel("Pie-Chart");
  	var subtitle = new Plottable.Components.Label("Dataset Of Different Countries");
  	var titleTable = new Plottable.Components.Table([
                    [title],
                    [subtitle]
                  ]);
  	titleTable.xAlignment("center")
  	.yAlignment("top")
  	



  	/*var colorScale1 = new Plottable.Scales.Color();
  	colorScale1.scale(["#BDCEF0", "#5279C7"]);
	var legend = new Plottable.Components.Legend(colorScale1);
	colorScale1.domain(["India","China","Brazil", "Australia", "Mexico"]);
	legend.xAlignment("right");
	legend.yAlignment("top");
  legend.maxEntriesPerRow(3);
  legend.renderTo("#pi-hart");*/
  
	
  	
  	
  	var chart = new Plottable.Components.Table([
                    [titleTable],
                    [plot] 
                  ]);
  	chart.renderTo("#pi-hart");
  	});
  
//}



/*["India","China","Brazil", "Australia", "Mexico"]*/

  
  //function putLabel(){
  d3.csv("database.csv", function(data) {
    
  data.forEach(function(d) {
      d.val = +d.val;
      
    });

  var colorScale1 = new Plottable.Scales.Color();
    colorScale1.scale(["#BDCEF0", "#5279C7"]);
  var legend = new Plottable.Components.Legend(colorScale1);
  colorScale1.domain(["India","China","Brazil", "Australia", "Mexico"]);
  legend.maxEntriesPerRow(3);
  legend.renderTo("#pi-hart");
      });
    }
//}