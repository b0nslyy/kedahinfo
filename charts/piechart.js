     //doughnut
     var ctxD = document.getElementById("doughnutChart").getContext('2d');
     var myLineChart = new Chart(ctxD, {
     type: 'doughnut',
     data: {
       labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
     datasets: [{
       data: [300, 50, 100, 40, 120],
       backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
       hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
     }]
     },
       options: {
        responsive: true
     }
     });

     //doughnut2
           var ctxD = document.getElementById("doughnutChart2").getContext('2d');
     var myLineChart = new Chart(ctxD, {
     type: 'doughnut',
     data: {
       labels: ["Red", "Green", "Yellow"],
     datasets: [{
       data: [300, 50, 100],
       backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
       hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
     }]
     },
       options: {
        responsive: true
     }
     });

     //doughnut2
           var ctxD = document.getElementById("doughnutChart3").getContext('2d');
     var myLineChart = new Chart(ctxD, {
     type: 'doughnut',
     data: {
       labels: ["Red", "Green", "Yellow"],
     datasets: [{
       data: [300, 50, 10],
       backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
       hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
     }]
     },
       options: {
        responsive: true
     }
     });