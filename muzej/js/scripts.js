$(function () {
    $('#stacked').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ["Predšolski otroci", "Osnovnošolci", "Srednješolci",
            "Študentje", "Odrasli (M)", "Odrasli (Ž)", "Upokojenci (M)", "Upokojenci (Ž)"]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Število obiskov'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            "data": [
            0.0,
            0.0,
            0.0,
            10.0,
            15.0,
            15.0,
            3.0,
            4.0],
                "name": "Ponedeljek"
        }, {
            "data": [
            3.0,
            23.0,
            51.0,
            229.0,
            253.0,
            270.0,
            131.0,
            121.0],
                "name": "Torek"
        }, {
            "data": [
            2.0,
            13.0,
            40.0,
            146.0,
            232.0,
            206.0,
            70.0,
            97.0],
                "name": "Sreda"
        }, {
            "data": [
            8.0,
            25.0,
            38.0,
            201.0,
            254.0,
            244.0,
            56.0,
            78.0],
                "name": "Četrtek"
        }, {
            "data": [
            6.0,
            59.0,
            19.0,
            328.0,
            419.0,
            404.0,
            146.0,
            171.0],
                "name": "Petek"
        }, {
            "data": [
            6.0,
            37.0,
            37.0,
            203.0,
            370.0,
            319.0,
            113.0,
            113.0],
                "name": "Sobota"
        }, {
            "data": [
            7.0,
            30.0,
            27.0,
            263.0,
            322.0,
            310.0,
            109.0,
            96.0],
                "name": "Nedelja"
        }]
    });
});
