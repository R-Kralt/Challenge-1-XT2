var ctx = document.getElementById('myChart1').getContext('2d');
var ctr = document.getElementById('myChart2').getContext('2d');
var ctd = document.getElementById('myChart3').getContext('2d');
var ctm = document.getElementById('myChart5').getContext('2d');
var ctw = document.getElementById('myChart6').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
     labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
            label: 'Speed',
            data: [0, 25, 75, 125, 175, 225, 235, 220, 200, 200],
            backgroundColor: [
                'rgba(0, 82, 136, 0)',
                'rgba(0, 82, 136, 1)',
                'rgba(0, 82, 136, 1)',
                'rgba(0, 82, 136, 1)',
                'rgba(0, 82, 136, 1)',
                'rgba(0, 82, 136, 1)',
                'rgba(0, 82, 136, 1)',
                'rgba(0, 82, 136, 1)',
                'rgba(0, 82, 136, 1)',
                'rgba(255, 0, 0, 1)',
            ],
            borderColor: [
                'rgba(0, 82, 136, 1)',
                'rgba(0, 82, 136, 1)',
                'rgba(0, 82, 136, 1)',
                'rgba(0, 82, 136, 1)',
                'rgba(0, 82, 136, 1)',
                'rgba(0, 82, 136, 1)',
                'rgba(0, 82, 136, 1)',
                'rgba(0, 82, 136, 1)',
                'rgba(0, 82, 136, 1)',
                'rgba(255, 0, 0, 1)'           ],
            borderWidth: 3
        }]
    },   
    options: {

        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var myBarChart = new Chart(ctr, {
    type: 'horizontalBar',
    data: {
     labels: ['Food', 'Water', 'Oxygen'],
        datasets: [{
            label: 'Days',
            data: [407, 495, 383, 0],
            backgroundColor: [
                'rgb(205,133,63, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(112,128,144, 0.2)'
            ],
            borderColor: [
                'rgb(205,133,63, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(112,128,144, 1)'            ],
            borderWidth: 7

        }]
    },

    options: {
        legend: {
            display: false,
        },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var myDoughnutChart = new Chart(ctd, {
    type: 'doughnut',
    data: {
     labels: ['Fuel', 'Used'],
        datasets: [{
            label: 'Fuel',
            data: [75, 25],
            backgroundColor: [
                'rgba(0, 82, 136, 0.2)',
                'rgba(0, 82, 136, 0)',
            ],
            borderColor: [
                'rgba(0, 82, 136, 1)',
                'rgba(0, 82, 136, 0.1)',
            ],
            borderWidth: 6
        }]
    },

    scales: {
           xAxes: [{
              gridLines: {
                 display: false
              }
           }],
           yAxes: [{
              gridLines: {
                 display: false
              }
           }]
        }
});

var myBarChart = new Chart(ctm, {
    type: 'bar',
    data: {
     labels: ['G-Force',],
        datasets: [{
            label: 'Fuel',
            data: [3.7, 0, 8],
            backgroundColor: [
                'rgba(178,34,34, 0.2)',
                'rgba(178,34,34, 0)',
            ],
            borderColor: [
                'rgba(178,34,34, 1)',
                'rgba(178,34,34, 0.1)',
            ],
            borderWidth: 5
        }]
    },

    scales: {
           xAxes: [{
              gridLines: {
                 display: false
              }
           }],
           yAxes: [{
              gridLines: {
                 display: false
              }
           }]
    },

    options: {
        legend: {
            display: false,
        },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var myBarChart = new Chart(ctw, {
    type: 'horizontalBar',
    data: {
     labels: [''],
        datasets: [{
            label: 'Distance',
            data: [36.4, 54.6, 0],
            backgroundColor: [
                'rgb(0, 82, 136, 0.2)'
            ],
            borderColor: [
                'rgba(0, 82, 136, 1)'            
                ],
            borderWidth: 7

        }]
    },

    options: {
        legend: {
            display: false,
        },
        title: {
                display: false
            },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});