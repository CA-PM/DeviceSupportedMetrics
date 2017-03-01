	// Function to parse attributes from the source URL
	//
	function getQueryVariable(variable) {
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i=0;i<vars.length;i++) {
			var pair = vars[i].split("=");
			if(pair[0] == variable){return pair[1];}
		}
		return(false);
	}
	// Function to mean component data to parent while preserving timestamps
	function getMeanValues(interfaceList, metricListName, metricName) {
	// convert the interfacelist to a 3d array of samples and then flatten it to a 2d array
	var utilInSamples = interfaceList.map(function(interface) {
		return interface[metricListName];
	}).reduce(function(a, b) {
		return a.concat(b);
	});
	
	return d3.nest()
	.key(function(d) {return d.date;})
	.sortKeys(d3.ascending)
	.rollup(function(d){return d3.mean(d, function(g) {return g[metricName];});})
	.entries(utilInSamples)
	.map(function(entry) {return [new Date(entry.key), entry.values]});
}
// Function to aggregate component data to parent while preserving timestamps
function getSumValues(interfaceList, metricListName, metricName) {
	// convert the interfacelist to a 3d array of samples and then flatten it to a 2d array
	var utilInSamples = interfaceList.map(function(interface) {
		return interface[metricListName];
	}).reduce(function(a, b) {
		return a.concat(b);
	});
	
	return d3.nest()
	.key(function(d) {return d.date;})
	.sortKeys(d3.ascending)
	.rollup(function(d){return d3.sum(d, function(g) {return g[metricName];});})
	.entries(utilInSamples)
	.map(function(entry) {return [new Date(entry.key), entry.values]})
	.map(function(entry) {return entry.values});
}
// Function to load JSON data from target data source
function loadJSON(dataSource)  {

	var http_request = new XMLHttpRequest();
	try {
		// Opera 8.0+, Firefox, Chrome, Safari
		http_request = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			http_request = new ActiveXObject("Msxml2.XMLHTTP");
		}catch (e) {
			try{
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			}catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	http_request.onreadystatechange  = function() {
		if (http_request.readyState != 4  ) return;
		// Javascript function JSON.parse to parse JSON data
		jsonObj = JSON.parse(http_request.responseText);
 	}
 	var start = (new Date).getTime();
 	//console.log("Started:" + start);
 	http_request.open("GET", dataSource, false);
 	http_request.send();
 	var end = (new Date).getTime();
 	var runTime = (end - start) / 1000;
 	//console.log ("Completed:" + end);
 	console.log ("Total tx time:" + runTime + " seconds");
 	return jsonObj;
} 
function basicD3Table(thisData,thisDiv,theseColumns,parentDiv,interact,title) {

       
        // create table
        var table = d3.select(parentDiv)
            .append('table')
            .text(title)
            .attr('id',thisDiv)
            .classed('table table-hover table-condensed table striped','true')
            .style('width','100%')

  		


        // create table header
        table.append('thead').append('tr')
            .selectAll('th')
            .data(theseColumns).enter()
            .append('th')
            .text(ƒ('head'));

        // create table body
        table.append('tbody')
            .selectAll('tr')
            .data(thisData).enter()
            .append('tr')
            .selectAll('td')
            .data(function(row, i) {
                return theseColumns.map(function(c) {
                    // compute cell values for this specific row
                    var cell = {};
                    d3.keys(c).forEach(function(k) {
                        cell[k] = typeof c[k] == 'function' ? c[k](row,i) : c[k];
                        });
                    return cell;
                    });
                })
            .enter()
            .append('td')
            .html(ƒ('html'))
            .attr('class', ƒ('cl'));
        if (interact) {
            var tr = table.selectAll("tr") 
                .on("click", function() { 
                  // Remove "highlight" class from all rows. 
                  tr.classed("info", false); 
                  // Add highlight class to this row. 
                  d3.select(this).classed("info", true); 
                  // Simulate user click on map for same ID
                  var thisID=arguments[0].id;
                  console.log("Select row ID: " + thisID)
                  simulateDomClick(arguments[0].id);

                }); 
        }


    }