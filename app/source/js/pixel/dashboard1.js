// Dashboard 1 Morris-chart

Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010',
            iphone: 0,
            ipad: 0,
            itouch: 0
        }, {
            period: '2011',
            iphone: 130,
            ipad: 100,
            itouch: 80
        }, {
            period: '2012',
            iphone: 80,
            ipad: 60,
            itouch: 70
        }, {
            period: '2013',
            iphone: 70,
            ipad: 200,
            itouch: 160
        }, {
            period: '2014',
            iphone: 180,
            ipad: 150,
            itouch: 120
        }, {
            period: '2015',
            iphone: 105,
            ipad: 100,
            itouch: 90
        },
         {
            period: '2016',
            iphone: 250,
            ipad: 150,
            itouch: 200
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 0,
        fillOpacity: 0.6,
        pointStrokeColors:['#f75b36', '#00b5c2 ', '#008efa'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth:0,
        hideHover: 'auto',
        lineColors: ['#f75b36', '#00b5c2 ', '#008efa'],
        resize: true
        
    });
/*
Morris.Area({
        element: 'morris-area-chart2',
        data: [{
            period: '2010',
            SiteA: 0,
            SiteB: 0,
            
        }, {
            period: '2011',
            SiteA: 130,
            SiteB: 100,
            
        }, {
            period: '2012',
            SiteA: 80,
            SiteB: 60,
            
        }, {
            period: '2013',
            SiteA: 70,
            SiteB: 200,
            
        }, {
            period: '2014',
            SiteA: 180,
            SiteB: 150,
            
        }, {
            period: '2015',
            SiteA: 105,
            SiteB: 90,
            
        },
         {
            period: '2016',
            SiteA: 250,
            SiteB: 150,
           
        }],
        xkey: 'period',
        ykeys: ['SiteA', 'SiteB'],
        labels: ['Sales A', 'Sales B'],
        pointSize: 0,
        gridTextColor:'#2b2b2b',
        fillOpacity: 0,
        pointStrokeColors:['#b4becb', '#008efa'],
        behaveLikeLine: true,
        gridLineColor: 'rgba(0, 0, 0, 0.05)',
        lineWidth: 2,
        smooth: true,
        hideHover: 'auto',
        lineColors: ['#b4becb', '#008efa'],
        resize: true
        
    });

*/
 $('.vcarousel').carousel({
            interval: 3000
         })
$(".counter").counterUp({
        delay: 100,
        time: 1200
    });

$(document).ready(function() {
    
   var sparklineLogin = function() { 
        $('#sales1').sparkline([20, 40, 30], {
            type: 'pie',
            height: '120',
            resize: true,
            sliceColors: ['#00b5c2', '#183f7c', '#f6f6f6']
        });
        $('#sparkline2dash').sparkline([6, 10, 9, 11, 9, 10, 12], {
            type: 'bar',
            height: '154',
            barWidth: '4',
            resize: true,
            barSpacing: '10',
            barColor: '#25a6f7'
        });
       
        $('#sparkline2dash2').sparkline([6, 10, 9, 11, 9, 10, 12], {
            type: 'bar',
            height: '154',
            barWidth: '4',
            resize: true,
            barSpacing: '10',
            barColor: '#fb9678'
        });
       $('#sales12').sparkline([6, 10, 9, 11, 9, 10, 12], {
            type: 'bar',
            height: '154',
            barWidth: '4',
            resize: true,
            barSpacing: '10',
            barColor: '#2b2b2b'
        });
        
   }
    var sparkResize;
 
        $(window).resize(function(e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(sparklineLogin, 500);
        });
        sparklineLogin();

});