
window.onload =function() {
	
	d3.csv("database.csv", function(data) {
	data.forEach(function(d) {
    	d.val = +d.val;
  	});
	


	var scale = new Plottable.Scales.Linear(); 
	var nameScale = new Plottable.Scales.Category(); 
	nameScale.scale(["India","India","India","India","India"]);
	
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
  	



  	var colorScale1 = new Plottable.Scales.Color();
  	colorScale1.scale(["#BDCEF0", "#5279C7"]);
	var legend = new Plottable.Components.Legend(colorScale1);
	colorScale1.domain(["India","China","Brazil", "Australia", "Mexico"]);
	legend.xAlignment("right");
	legend.yAlignment("top");
	


  	/*var labelTable= new Plottable.Components.Table([legend]); 
  	labelTable.xAlignment("right")
  	.yAlignment("top")*/
  	
  	
  	var chart = new Plottable.Components.Table([
                    [titleTable],
                    [legend],
                    [plot]
                  ]);
  	chart.renderTo("#piChart");
  	});
  }

  	window.addEventListener("resize", function() {
  	plot.redraw();


	});