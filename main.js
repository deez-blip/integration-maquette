let graph = document.getElementById('graph').getContext('2d')

var gradient = graph.createLinearGradient(0, 0, 600, 200);
            gradient.addColorStop(0, 'rgb(51, 10, 255)');
            gradient.addColorStop(1, 'rgb(10, 117, 255)');

var gradient2 = graph.createLinearGradient(0, 0, 600, 200);
        gradient2.addColorStop(0, 'rgb(234, 20, 241)');
        gradient2.addColorStop(1, 'rgb(205, 164, 241)');

new Chart(graph, {
    type: 'line',
    data: {
        labels: ['5Nov', '6Nov', '7Nov', '8Nov', '9Nov', '10Nov', '11Nov', '12Nov', '13Nov', '14Nov', '15Nov',],
        datasets: [
            {
                label: 'ETH', data: [120,600,250,270,120,400,200,400,700,500,300,150,420],
                borderWidth: 7,
                borderColor: gradient2,
                backgroundColor: 'transparent',
                pointRadius: 0,
            },
            {
                label: 'BTC', data: [,220,300,250,270,120,400,200,400,500],
                borderWidth: 7,
                borderColor: gradient,
                backgroundColor: 'transparent',
                pointRadius: 0,
            }
        ]
    },
    options: {
        scales: { 
            xAxes: [{ 
                gridLines: { display:false } 
            }], 
            yAxes: [{ 
                gridLines: { display:false } 
            }] 
        }
    }
})