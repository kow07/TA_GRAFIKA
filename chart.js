var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Edo (jam)",
    data: [30, 59, 40, 20, 75, 65, 70],
    lineTension: 0,
    fill: false,
    borderColor: 'green',
  };

var dataSecond = {
    label: "Alam (jam)",
    data: [10, 55, 40, 60, 70, 40, 20],
    lineTension: 0,
    fill: false,
  borderColor: 'orange',
  };

var speedData = {
  labels: ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"],
  datasets: [dataFirst, dataSecond],
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black',
    },
  },
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions,
},
);