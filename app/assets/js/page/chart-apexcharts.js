'use strict';
$(function () {
    chart1();
    chart2();
    chart3();
    chart4();
    chart5();
    chart6();
    chart7();
    chart8();
    chartHoursJobTech();
    chartAverageHoursTopJob();
    chartAverageScoreTimeJob();
    chartAverageScoreTimeJob_Tech();
    chart3AverageScoreTimeJob();
    chart3AverageScoreTimeJob_Tech();
    chart5_custom();
    chart5_custom_Tech();
    chart5_PointsTimeJob();
    chart5_PointsTimeJob_Tech();
});

function chart1() {
    var options = {
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '55%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1

        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#chart1"),
        options
    );

    chart.render();


}

function chart2() {

    var options = {
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "";
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },
        series: [{
            name: 'Jobs',
            data: [127, 108, 100, 110, 105, 80]
        }],
        xaxis: {
            categories: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
            position: 'top',
            labels: {
                offsetY: -18,

            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                }
            },
            tooltip: {
                enabled: true,
                offsetY: -35,

            }
        },
        fill: {
            gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100]
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val + "";
                }
            }

        },
        title: {
            text: '',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#chart2"),
        options
    );

    chart.render();

}
function chart3() {
    var options = {
        chart: {
            height: 350,
            type: 'line',
            shadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 1
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        series: [{
            name: "Score",
            data: [2344, 2245, 987, 1476, 2401, 2021, 1420, 2000, 1500, 400, 750, 1900, 1300, 2500]
        },
        {
            name: "Hours in Minutes Jobs",
            data: [2366, 2487, 1125, 1600, 2901, 2348, 1953, 2366, 1626, 786, 1125, 2349, 1594, 2901]
        }
        ],
        title: {
            text: 'Average High & Low Temperature',
            align: 'left'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {

            size: 6
        },
        xaxis: {
            categories: ["Justin", "Ian", "Ryan", "Roger", "Blait", "Robert", "Mike", "Daniel", "Jhosh", "Ben", "Wes", "Joshua", "Eddy", "James"],
            title: {
                text: 'Technician'
            }
        },
        yaxis: {
            title: {
                text: 'Score/Minute'
            },
            min: 0,
            max: 3500
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#chart3"),
        options
    );

    chart.render();
}
function chart4() {
    var options = {
        chart: {
            height: 350,
            type: 'line',
            shadow: {
                enabled: false,
                color: '#bbb',
                top: 3,
                left: 2,
                blur: 3,
                opacity: 1
            },
        },
        stroke: {
            width: 7,
            curve: 'smooth'
        },
        series: [{
            name: 'Likes',
            data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        }],
        xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
        },
        title: {
            text: 'Social Media',
            align: 'left',
            style: {
                fontSize: "16px",
                color: '#666'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        markers: {
            size: 4,
            opacity: 0.9,
            colors: ["#FFA41B"],
            strokeColor: "#fff",
            strokeWidth: 2,

            hover: {
                size: 7,
            }
        },
        yaxis: {
            min: -10,
            max: 40,
            title: {
                text: 'Engagement',
            },
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#chart4"),
        options
    );

    chart.render();
}
function chart5() {
    var options = {
        chart: {
            height: 350,
            type: 'line',
        },
        series: [{
            name: 'Website Blog',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
            name: 'Social Media',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
        stroke: {
            width: [0, 4]
        },
        title: {
            text: 'Traffic Sources'
        },
        // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
            type: 'datetime'
        },
        yaxis: [{
            title: {
                text: 'Website Blog',
            },

        }, {
            opposite: true,
            title: {
                text: 'Social Media'
            }
        }]

    }

    var chart = new ApexCharts(
        document.querySelector("#chart5"),
        options
    );

    chart.render();
}
function chart6() {
    var options = {
        chart: {
            height: 350,
            type: 'area',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],

        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#chart6"),
        options
    );

    chart.render();
}
function chart7() {
    var options = {
        chart: {
            width: 360,
            type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        series: [44, 55, 13, 43, 22],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }

    var chart = new ApexCharts(
        document.querySelector("#chart7"),
        options
    );

    chart.render();
}
function chart8() {

    var options = {
        chart: {
            height: 350,
            type: 'radar',
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
            }
        },
        series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
        }, {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80],
        }, {
            name: 'Series 3',
            data: [44, 76, 78, 13, 43, 10],
        }],
        title: {
            text: 'Radar Chart - Multi Series'
        },
        stroke: {
            width: 0
        },
        fill: {
            opacity: 0.4
        },
        markers: {
            size: 0
        },
        labels: ['2011', '2012', '2013', '2014', '2015', '2016']
    }

    var chart = new ApexCharts(
        document.querySelector("#chart8"),
        options
    );

    chart.render();

    function update() {

        function randomSeries() {
            var arr = []
            for (var i = 0; i < 6; i++) {
                arr.push(Math.floor(Math.random() * 100))
            }

            return arr
        }


        chart.updateSeries([{
            name: 'Series 1',
            data: randomSeries(),
        }, {
            name: 'Series 2',
            data: randomSeries(),
        }, {
            name: 'Series 3',
            data: randomSeries(),
        }])
    }


}

/*
-----------------------> Custom
*/

function chartHoursJobTech() {

    var options = {
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "";
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },
        series: [{
            name: 'Jobs',
            data: [127, 108, 100, 110, 105, 80, 90, 20, 95, 170, 60, 55, 87, 144]
        }],
        xaxis: {
            categories: ["Justin", "Ian", "Ryan", "Roger", "Blait", "Robert", "Mike", "Daniel", "Jhosh", "Ben", "Wes", "Joshua", "Eddy", "James"],
            position: 'top',
            labels: {
                offsetY: -18,

            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                }
            },
            tooltip: {
                enabled: true,
                offsetY: -35,

            }
        },
        fill: {
            gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100]
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val + "";
                }
            }

        },
        title: {
            text: '',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#chartHoursJobTech"),
        options
    );

    chart.render();

}

function chartAverageHoursTopJob() {
    var options = {
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '55%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        series: [{
            name: 'Internet',
            data: [4, 5, 7, 6, 1, 8, 3, 6, 6, 7, 5, 9, 4, 9]
        }, {
            name: 'Video',
            data: [7, 8, 1, 8, 7, 5, 9, 4, 4, 5, 7, 6, 6, 5]
        }, {
            name: 'Telephone',
            data: [3, 4, 6, 2, 4, 8, 5, 5, 1, 6, 5, 6, 6, 7]
        }],
        xaxis: {
            categories: ["Justin", "Ian", "Ryan", "Roger", "Blait", "Robert", "Mike", "Daniel", "Jhosh", "Ben", "Wes", "Joshua", "Eddy", "James"],
        },
        yaxis: {
            title: {
                text: ' (Hours)'
            }
        },
        fill: {
            opacity: 1

        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#chartAverageHoursTopJob"),
        options
    );

    chart.render();


}

function chart5_custom_222() {
    var options = {
        chart: {
            height: 350,
            type: 'line',
        },
        series: [{
            name: 'Payment',
            type: 'column',
            data: [2268, 1800, 2295, 1485, 2025, 1080, 2268, 1800, 2295, 1485, 2025, 1080]
        }, {
            name: 'Job Reports',
            type: 'line',
            data: [168, 133, 170, 110, 150, 80, 168, 133, 170, 110, 150, 80]
        }],
        stroke: {
            width: [0, 4]
        },
        title: {
            text: ''
        },
        // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: ['Justin', 'Ian', 'Ryan', 'Roger', 'Blait', 'Robert', 'Mike', 'Daniel', 'Jhosh', 'Ben', 'Wes', 'Joshua'],
        xaxis: {
            type: 'category'
        },
        yaxis: [{
            title: {
                text: 'Payment($)',
            },
            labels: {
                formatter: function (val) {
                    // console.log(val)
                    return "$ " + val + ",00"
                }
            }

        }, {
            opposite: true,
            title: {
                text: 'Job Reports'
            }
        }],
        

    }
    var chart = new ApexCharts(
        document.querySelector("#chart5_custom"),
        options
    );
    chart.render();
}

function chart5_custom() {
    var options = {
        chart: {
            height: 350,
            type: 'line',
        },
        series: [{
            name: 'Payment',
            type: 'column',
            data: [2268, 1800, 2295, 1485, 2025, 1080, 2268, 1800, 2295, 1485, 2025, 1080]
        }, {
            name: 'Job Reports',
            type: 'line',
            data: [168, 133, 170, 110, 150, 80, 168, 133, 170, 110, 150, 80]
        }],
        stroke: {
            width: [0, 4]
        },
        title: {
            text: ''
        },
        // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: ['Justin', 'Ian', 'Ryan', 'Roger', 'Blait', 'Robert', 'Mike', 'Daniel', 'Jhosh', 'Ben', 'Wes', 'Joshua'],
        xaxis: {
            type: 'category'
        },
        yaxis: [{
            title: {
                text: 'Payment($)',
            },
            labels: {
                formatter: function (val) {
                    //console.log(val)
                    return "$ " + val + ",00"
                }
            }

        }, {
            opposite: true,
            title: {
                text: 'Job Reports'
            }
        }],
        

    }
    var chart = new ApexCharts(
        document.querySelector("#chart5_custom"),
        options
    );
    chart.render();
}

function chart5_custom_Tech() {
    var options = {
        chart: {
            height: 350,
            type: 'line',
        },
        series: [{
            name: 'Payment',
            type: 'column',
            data: [2268, 1800, 2295, 1485, 2025, 1080]
        }, {
            name: 'Job Reports',
            type: 'line',
            data: [168, 133, 170, 110, 150, 80]
        }],
        stroke: {
            width: [0, 4]
        },
        title: {
            text: ''
        },
        // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        xaxis: {
            type: 'category'
        },
        yaxis: [{
            title: {
                text: 'Payment($)',
            },
            labels: {
                formatter: function (val) {
                    //console.log(val)
                    return "$ " + val + ",00"
                }
            }

        }, {
            opposite: true,
            title: {
                text: 'Job Reports'
            }
        }],
        

    }
    var chart = new ApexCharts(
        document.querySelector("#chart5_custom_Tech"),
        options
    );
    chart.render();
}

function chart5_PointsTimeJob_Tech() {
    var options = {
        chart: {
            height: 350,
            type: 'line',
        },
        colors: ['#AF1B3F', '#457b9d'],
        series: [{
            name: 'Points',
            type: 'column',
            data: [344, 245, 387, 476, 401, 110, 0]
        }, {
            name: 'Time Jobs',
            type: 'line',
            data: [6.1, 8.11, 7.08, 9, 4.85, 2.46, 0]
        }],
        stroke: {
            width: [0, 4]
        },
        title: {
            text: ''
        },
        // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        xaxis: {
            type: 'category'
        },
        yaxis: [{
            title: {
                text: 'Points',
            },
            labels: {
                // formatter: function (val) {
                //     //console.log(val)
                //     return "$ " + val + ",00"
                // }
            }

        }, {
            opposite: true,
            title: {
                text: 'Job Reports'
            }
        }],
        

    }
    var chart = new ApexCharts(
        document.querySelector("#chart5_PointsTimeJob_Tech"),
        options
    );
    chart.render();
}

function chart5_PointsTimeJob() {
    var options = {
        chart: {
            height: 350,
            type: 'line',
        },
        colors: ['#AF1B3F', '#457b9d'],
        series: [{
            name: 'Points',
            type: 'column',
            data: [2344, 2245, 987, 1476, 2401, 2021, 1420, 2000, 1500, 400, 750, 1900, 1300, 2880]
        }, {
            name: 'Time Jobs',
            type: 'line',
            data: [39.43, 41.45, 18.75, 26.66, 48.35, 39.13, 32.55, 39.43, 27.10, 13.10, 18.75, 39.15, 26.56, 48]
        }],
        stroke: {
            width: [0, 4]
        },
        title: {
            text: ''
        },
        // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: ["Justin", "Ian", "Ryan", "Roger", "Blait", "Robert", "Mike", "Daniel", "Jhosh", "Ben", "Wes", "Joshua", "Eddy", "James"],
        xaxis: {
            type: 'category'
        },
        yaxis: [{
            title: {
                text: 'Points',
            },
            labels: {
                // formatter: function (val) {
                //     //console.log(val)
                //     return "$ " + val + ",00"
                // }
            }

        }, {
            opposite: true,
            title: {
                text: 'Job Reports'
            }
        }],
        

    }
    var chart = new ApexCharts(
        document.querySelector("#chart5_PointsTimeJob"),
        options
    );
    chart.render();
}

function chartAverageScoreTimeJob() {
    var options = {
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '55%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        series: [{
            name: 'Score',
            data: [2344, 2245, 987, 1476, 2401, 2021, 1420, 2000, 1500, 400, 750, 1900, 1300, 2500]
        }, {
            name: 'Time Jobs(Minuntes)',
            data: [2366, 2487, 1125, 1600, 2901, 2348, 1953, 2366, 1626, 786, 1125, 2349, 1594, 48]
        }],
        xaxis: {
            categories: ["Justin", "Ian", "Ryan", "Roger", "Blait", "Robert", "Mike", "Daniel", "Jhosh", "Ben", "Wes", "Joshua", "Eddy", "James"],
        },
        yaxis: {
            title: {
                text: ' (Score e Minutes)'
            }
        },
        fill: {
            opacity: 1

        },
        // tooltip: {
        //     y: {
        //         formatter: function (val) {
        //             return "$ " + val + " thousands"
        //         }
        //     }
        // }
    }

    var chart = new ApexCharts(
        document.querySelector("#chartAverageScoreTimeJob"),
        options
    );

    chart.render();


}

function chartAverageScoreTimeJob_Tech() {
    var options = {
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '55%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        series: [{
            name: 'Score',
            data: [344, 245, 387, 476, 401, 110, 120]
        }, {
            name: 'Time Jobs(Minuntes)',
            data: [366, 487, 425, 540, 291, 148, 153]
        }],
        xaxis: {
            categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        },
        yaxis: {
            title: {
                text: ' (Score e Minutes)'
            }
        },
        fill: {
            opacity: 1

        },
        // tooltip: {
        //     y: {
        //         formatter: function (val) {
        //             return "$ " + val + " thousands"
        //         }
        //     }
        // }
    }

    var chart = new ApexCharts(
        document.querySelector("#chartAverageScoreTimeJob_Tech"),
        options
    );

    chart.render();


}


function chart3AverageScoreTimeJob() {
    var options = {
        chart: {
            height: 350,
            type: 'line',
            shadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 1
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        series: [{
            name: "Score",
            data: [2344, 2245, 987, 1476, 2401, 2021, 1420, 2000, 1500, 400, 750, 1900, 1300, 2500]
        },
        {
            name: "Hours in Minutes Total Job",
            data: [2366, 2487, 1125, 1600, 2901, 2348, 1953, 2366, 1626, 786, 1125, 2349, 1594, 2901]
        }
        ],
        title: {
            text: 'Chart',
            align: 'left'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {

            size: 6
        },
        xaxis: {
            categories: ["Justin", "Ian", "Ryan", "Roger", "Blait", "Robert", "Mike", "Daniel", "Jhosh", "Ben", "Wes", "Joshua", "Eddy", "James"],
            title: {
                text: 'Technician'
            }
        },
        yaxis: {
            title: {
                text: 'Score/Minute'
            },
            min: 0,
            max: 3000
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#chart3AverageScoreTimeJob"),
        options
    );

    chart.render();
}

function chart3AverageScoreTimeJob_Tech() {
    var options = {
        chart: {
            height: 350,
            type: 'line',
            shadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 1
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        series: [{
            name: "Score",
            data: [344, 245, 387, 476, 401, 210, 420]
            // data: [344, 245, 387, 476, 401, 210, 420, 200, 300, 400, 350, 190, 300, 250]
        },
        {
            name: "Total Job",
            data: [366, 687, 425, 540, 291, 348, 503]
            // data: [366, 487, 425, 540, 291, 348, 503, 366, 426, 486, 415, 239, 540, 290]
        }
        ],
        title: {
            text: 'Chart',
            align: 'left'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {

            size: 6
        },
        xaxis: {
            categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            title: {
                text: 'Days Of The Week'
            }
        },
        yaxis: {
            title: {
                text: 'Score/Minute'
            },
            min: 0,
            max: 3000
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#chart3AverageScoreTimeJob_Tech"),
        options
    );

    chart.render();
}