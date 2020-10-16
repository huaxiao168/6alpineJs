 
 
var ctx = document.getElementById("myZhuChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


var ctxPie = document.getElementById("myPieChart").getContext('2d');
// 饼形图
var myPieChart = new Chart(ctxPie, {
    type: "pie",
    data: {
        datasets: [
            {
                data: [10, 20, 30],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)' 
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'  
                ],
                borderWidth: 1
            }
        ],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ["Red", "Yellow", "Blue"]
    } ,
   // 配置选项
   options: {}
});


var ctxRadar = document.getElementById("myRadarChart").getContext('2d');
var myRadarChart = new Chart(ctxRadar, {
    type: "radar",
    data: {
        labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
        datasets: [{
            data: [20, 10, 4, 2] ,
            backgroundColor:'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)'
        },{
            data:[6,4,11,5],
            backgroundColor:'rgba(54, 162, 235, 0.2)',
            borderColor:   'rgba(54, 162, 235, 1)'
       }]
    },
    options: {  scale: {
        angleLines: {
            display: false
        },
        ticks: {
            suggestedMin: 1,
            suggestedMax: 30
        }
    }}
});
 

