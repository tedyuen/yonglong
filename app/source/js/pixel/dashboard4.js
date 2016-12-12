$(".counter").counterUp({
        delay: 100,
        time: 1200
    });

 $('.vcarousel').carousel({
            interval: 3000
         })
 $(document).ready(function() {
    
   var sparklineLogin = function() { 
        $('#sparklinedash').sparkline([ 0, 5, 6, 10, 9, 12, 4, 9], {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#00c292'
        });
         $('#sparklinedash2').sparkline([ 0, 5, 6, 10, 9, 12, 4, 9], {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#2c5ca9'
        });
          $('#sparklinedash3').sparkline([ 0, 5, 6, 10, 9, 12, 4, 9], {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#00b5c2'
        });
           $('#sparklinedash4').sparkline([ 0, 5, 6, 10, 9, 12, 4, 9], {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#f75b36'
        });
        
   }
    var sparkResize;
 
        $(window).resize(function(e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(sparklineLogin, 500);
        });
        sparklineLogin();

});
 Morris.Area({
        element: 'morris-area-chart',
        data: [{
                    period: '2010',
                    iphone: 10
                    
                }, {
                    period: '2011',
                    iphone: 1667
                }, {
                    period: '2012',
                    iphone: 4912
                }, {
                    period: '2013',
                    iphone: 3767
                }, {
                    period: '2014',
                    iphone: 6810
                }, {
                    period: '2015',
                    iphone: 5670
                }, {
                    period: '2016',
                    iphone: 4820
                }, {
                    period: '2017',
                    iphone: 15073
                }, {
                    period: '2018',
                    iphone: 8087
                }, {
                    period: '2019',
                    iphone: 10
                }


                ],
                lineColors: ['#008efa'],
                xkey: 'period',
                ykeys: ['iphone'],
                labels: ['Site A'],
                pointSize: 0,
                lineWidth: 0,
                fillOpacity: 1,
                resize: true,
                behaveLikeLine: true,
                gridLineColor: '#e0e0e0',
                hideHover: 'auto'
        
    });

$(document).ready(function() {
    
   var sparklineLogin = function() { 
        $('#sales1').sparkline([20, 40, 30], {
            type: 'pie',
            height: '130',
            resize: true,
            sliceColors: ['#808f8f', '#fecd36', '#f1f2f7']
        });
        $('#sales2').sparkline([6, 10, 9, 11, 9, 10, 12], {
            type: 'bar',
            height: '154',
            barWidth: '4',
            resize: true,
            barSpacing: '10',
            barColor: '#25a6f7'
        });
        
   }
    var sparkResize;
 
        $(window).resize(function(e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(sparklineLogin, 500);
        });
        sparklineLogin();

});
var icons = new Skycons({"color": "#ff6849"}),
          list  = [
            "clear-day", "clear-night", "partly-cloudy-day",
            "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
            "fog"
          ],
          i;
for(i = list.length; i--; ) {
    var weatherType = list[i],
        elements = document.getElementsByClassName( weatherType );
    for (e = elements.length; e--;){
        icons.set( elements[e], weatherType );
    }
} 
     
      icons.play();

//sparkline charts
$(document).ready(function() {
   var sparklineLogin = function() { 
       
  
        $("#sparkline8").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#00c292',
            fillColor: '#00c292',
            maxSpotColor: '#00c292',
            highlightLineColor: 'rgba(0, 0, 0, 0.2)',
            highlightSpotColor: '#00c292'
        });
        $("#sparkline9").sparkline([0,2,8,6,8,5,6,4,8,6,6,2 ], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#00b5c2',
            fillColor: '#00b5c2',
            minSpotColor:'#00b5c2',
            maxSpotColor: '#00b5c2',
            highlightLineColor: 'rgba(0, 0, 0, 0.2)',
            highlightSpotColor: '#00b5c2'
        });
        $("#sparkline10").sparkline([2,4,4,6,8,5,6,4,8,6,6,2], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#f75b36',
            fillColor: '#f75b36',
            maxSpotColor: '#f75b36',
            highlightLineColor: 'rgba(0, 0, 0, 0.2)',
            highlightSpotColor: '#f75b36'
        });
       
   }
    var sparkResize;
 
        $(window).resize(function(e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(sparklineLogin, 500);
        });
        sparklineLogin();

});

    