$(function () {
	Papa.parse("./data.csv", {download: true, header: true, complete: function(data){
		console.log(data)

		data.data.sort(function(a,b){
			av=parseInt(a["REALIZACIJA"]);
			bv=parseInt(b["REALIZACIJA"]);
			return av-bv;
		});

		cat=[]
		cols=[]
		colsr=[]

		domacituji=[[],[]]

		data.data.forEach(function(d,i){
			if(d["REALIZACIJA"]==undefined) return;
			//console.log(d["REALIZACIJA"]);
			cat.push(d["NASLOV"]);
			cols.push(parseInt(d["REALIZACIJA"]));
			colsr.push(parseInt(d["REALIZACIJA"])-parseInt(d["PLAN"]));

			// Domaci tuji
			dom=parseInt(d["DOMACI"]);
			tuj=parseInt(d["TUJI"]);
			sum=dom+tuj;
			domacituji[0].push(dom/sum*-100);
			domacituji[1].push(tuj/sum*100);
		});

		
		console.log(domacituji);
	

		$('#container').highcharts({
	        chart: {
	            type: 'bar'
	        },
	        title: {
	            text: 'Razlika realizacije od plana'
	        },
	        xAxis: {
	            categories: cat
	        },
	        credits: {
	            enabled: false
	        },
	        series: [{
	            name: 'Razlika',
	            data: colsr,
	            negativeColor:"red"
	        }]
	    });

		 $('#container1').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Domači/Tuji'
            },
            xAxis: [{
                categories: cat,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: cat,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value) + '%';
                    }
                }
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
                        '' + Highcharts.numberFormat(Math.abs(this.point.y), 0)+ '%';
                }
            },

            series: [{
                name: 'Domači',
                data: domacituji[0]
            }, {
                name: 'Tuji',
                data: domacituji[1]
            }]
        });





	}});
});