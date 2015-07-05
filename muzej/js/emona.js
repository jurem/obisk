$(function () {
    $('#opisi').highcharts({
        title: {
            text: ''
        },
        tooltip: {
            formatter: function () {
                return 'Extra data: <b>' + this.point.opis + '</b>';
            }
        },
        xAxis: {
            categories: ['30. 05. 2014', '31. 05. 2014', '01. 06. 2014', '03. 06. 2014', '04. 06. 2014', '05. 06. 2014', '06. 06. 2014', '07. 06. 2014', '08. 06. 2014', '10. 06. 2014', '11. 06. 2014', '12. 06. 2014', '13. 06. 2014', '14. 06. 2014', '15. 06. 2014', '16. 06. 2014', '17. 06. 2014', '18. 06. 2014', '19. 06. 2014', '20. 06. 2014', '22. 06. 2014', '24. 06. 2014', '25. 06. 2014', '26. 06. 2014', '27. 06. 2014', '28. 06. 2014', '29. 06. 2014', '01. 07. 2014', '02. 07. 2014', '03. 07. 2014', '04. 07. 2014', '05. 07. 2014', '06. 07. 2014', '08. 07. 2014', '09. 07. 2014', '10. 07. 2014', '11. 07. 2014', '12. 07. 2014', '13. 07. 2014', '15. 07. 2014', '16. 07. 2014', '17. 07. 2014', '18. 07. 2014', '19. 07. 2014', '20. 07. 2014', '22. 07. 2014', '23. 07. 2014', '24. 07. 2014', '25. 07. 2014', '26. 07. 2014', '27. 07. 2014', '29. 07. 2014', '30. 07. 2014', '31. 07. 2014', '01. 08. 2014', '02. 08. 2014', '03. 08. 2014', '05. 08. 2014', '06. 08. 2014', '07. 08. 2014', '08. 08. 2014', '09. 08. 2014', '10. 08. 2014', '12. 08. 2014', '13. 08. 2014', '14. 08. 2014', '15. 08. 2014', '16. 08. 2014', '17. 08. 2014', '19. 08. 2014', '20. 08. 2014', '21. 08. 2014', '22. 08. 2014', '23. 08. 2014', '24. 08. 2014', '26. 08. 2014', '27. 08. 2014', '28. 08. 2014', '29. 08. 2014', '30. 08. 2014', '31. 08. 2014', '02. 09. 2014', '03. 09. 2014', '04. 09. 2014', '05. 09. 2014', '06. 09. 2014', '07. 09. 2014', '09. 09. 2014', '10. 09. 2014', '11. 09. 2014', '12. 09. 2014', '13. 09. 2014', '14. 09. 2014', '16. 09. 2014', '17. 09. 2014', '18. 09. 2014', '19. 09. 2014', '20. 09. 2014', '21. 09. 2014', '23. 09. 2014', '24. 09. 2014', '25. 09. 2014', '26. 09. 2014', ' 27.9.2014', '28. 09. 2014', '30. 09. 2014', '01. 10. 2014', '02. 10. 2014', '03. 10. 2014', '04. 10. 2014', '05. 10. 2014', '07. 10. 2014', '08. 10. 2014', '09. 10. 2014', '10. 10. 2014', '11. 10. 2014', '12. 10. 2014', '14. 10. 2014', '15. 10. 2014', '16. 10. 2014', '17. 10. 2014', '18. 10. 2014', '19. 10. 2014', '21. 10. 2014', '22. 10. 2014', '23. 10. 2014', '24. 10. 2014', '25. 10. 2014', '26. 10. 2014', '28. 10. 2014', '29. 10. 2014', '30. 10. 2014', '31. 10. 2014', '02. 11. 2014', '04. 11. 2014', '05. 11. 2014', '06. 11. 2014', '07. 11. 2014', '08. 11. 2014', '09. 11. 2014', '11. 11. 2014', '12. 11. 2014', '13. 11. 2014', '14. 11. 2014', '15. 11. 2014', '16. 11. 2014', '18. 11. 2014']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Število obiskov'
            }
        },
        series: [{
            "data": [
                {
                    "opis": "2xICOM2xkarte parki",
                    "y": 30.0
                },
                {
                    "opis": "1xICOM, 3xSMD",
                    "y": 63.0
                },
                {
                    "opis": "na vodstvu 37 ljudi, 2xSMD",
                    "y": 95.0
                },
                {
                    "opis": "od tega 2xurbana",
                    "y": 34.0
                },
                {
                    "opis": "2xICOM, 2xPress",
                    "y": 25.0
                },
                {
                    "opis": "2xsmd, 2xpress",
                    "y": 47.0
                },
                {
                    "opis": "Skupina \ufffdent (18)2xkarte parki, 1xurbana",
                    "y": 22.0
                },
                {
                    "opis": "2xgratis, 2x icom3xurbana",
                    "y": 41.0
                },
                {
                    "opis": "na vodstvu 8 ljudi, 1xSMD",
                    "y": 37.0
                },
                {
                    "opis": "",
                    "y": 45.0
                },
                {
                    "opis": "",
                    "y": 24.0
                },
                {
                    "opis": "",
                    "y": 29.0
                },
                {
                    "opis": "",
                    "y": 29.0
                },
                {
                    "opis": "2xSMD, 2x s parka1xurbana",
                    "y": 37.0
                },
                {
                    "opis": "1xSMD, 2xkarta parki, 1xgratis (naro\ufffdilnica)",
                    "y": 38.0
                },
                {
                    "opis": "",
                    "y": 23.0
                },
                {
                    "opis": "3xurbana",
                    "y": 27.0
                },
                {
                    "opis": "1xICOM",
                    "y": 21.0
                },
                {
                    "opis": "Na vodtsvu je bilo 5 obiskovalcev3x urbana, 1xdru\ufffdina - vstopnica kupljena na parku",
                    "y": 39.0
                },
                {
                    "opis": "2xgratisBernarda vodstvo: 5 niso v\ufffdteti v statistiko",
                    "y": 33.0
                },
                {
                    "opis": "",
                    "y": 46.0
                },
                {
                    "opis": "1xSMD, 2xAdijo tovarna6xurbana, 1xkarta s parka",
                    "y": 42.0
                },
                {
                    "opis": "1xkarta s parka, 1x press3x SMD",
                    "y": 80.0
                },
                {
                    "opis": "4x ICOM1x odrasli - karta kupljena na parku",
                    "y": 43.0
                },
                {
                    "opis": "2x ICOM3x urbana",
                    "y": 21.0
                },
                {
                    "opis": "1xhotelirji7x vodstvo Marina Satler",
                    "y": 22.0
                },
                {
                    "opis": "3x -30%",
                    "y": 48.0
                },
                {
                    "opis": "javno vodstvo Obrazi LJ SLO: 31xSMD, 1xICOM, 1xPRESS",
                    "y": 27.0
                },
                {
                    "opis": "2xkarta na parku",
                    "y": 38.0
                },
                {
                    "opis": "1xpresse",
                    "y": 50.0
                },
                {
                    "opis": "",
                    "y": 37.0
                },
                {
                    "opis": "",
                    "y": 36.0
                },
                {
                    "opis": "4xurbana1xSMD",
                    "y": 61.0
                },
                {
                    "opis": "javno vodstvo: 18, 2xurbana, 3xtur.vodnik3xSMD, 1xpress",
                    "y": 42.0
                },
                {
                    "opis": "",
                    "y": 64.0
                },
                {
                    "opis": "Bernarda vodstvo: 17 niso v\ufffdteti v statistiko1xurbana, 1xSMD",
                    "y": 106.0
                },
                {
                    "opis": "skupina: 15 nem\ufffdkih \ufffdtudentov NMS+ 2 spremljevalca (niso v\ufffdteti v statistiko)skupina francoskih dijakov - 23",
                    "y": 35.0
                },
                {
                    "opis": "",
                    "y": 32.0
                },
                {
                    "opis": "4xurbana1xSMD",
                    "y": 89.0
                },
                {
                    "opis": "javno vodstvo 22, 3xSMD, 1xICOM3xurbana",
                    "y": 30.0
                },
                {
                    "opis": "1xSMD",
                    "y": 36.0
                },
                {
                    "opis": "1xICOM, 1xnama popust, 1xkarta parki, 1xPRESS3xurbana",
                    "y": 54.0
                },
                {
                    "opis": "3xurbana",
                    "y": 34.0
                },
                {
                    "opis": "",
                    "y": 23.0
                },
                {
                    "opis": "2xpopust",
                    "y": 28.0
                },
                {
                    "opis": "2xbon, 3xurbana, 2xkarta parki",
                    "y": 75.0
                },
                {
                    "opis": "17 \ufffdtudentov - brezpla\ufffdno (petra) , 2xkarta parki",
                    "y": 40.0
                },
                {
                    "opis": "1xICOM2xICOM, 2xurbana",
                    "y": 40.0
                },
                {
                    "opis": "1xICOM1xurbana",
                    "y": 54.0
                },
                {
                    "opis": "4xurbana",
                    "y": 50.0
                },
                {
                    "opis": "1xpresse4xurbana",
                    "y": 76.0
                },
                {
                    "opis": "3xSMD, 1xbon, 1xpresse2xurbana",
                    "y": 68.0
                },
                {
                    "opis": "1xSMD3xPRESS, 4xurbana",
                    "y": 53.0
                },
                {
                    "opis": "1xICOM. 2xurbana",
                    "y": 60.0
                },
                {
                    "opis": "1xSMD1xurbana",
                    "y": 42.0
                },
                {
                    "opis": "2xbon8xurbana, 1xkarta s parka",
                    "y": 24.0
                },
                {
                    "opis": "2xkarti iz parkov",
                    "y": 60.0
                },
                {
                    "opis": "2xkarti iz parkov",
                    "y": 76.0
                },
                {
                    "opis": "2xurbana",
                    "y": 43.0
                },
                {
                    "opis": "5xTIC vodstvo10x karte s parkov",
                    "y": 53.0
                },
                {
                    "opis": "1xICOM, +11xTIC3xurbana (dru\ufffdina)",
                    "y": 53.0
                },
                {
                    "opis": "6xurbana, 1x karta iz Jakopi\ufffda, +10xTIC vodstvo",
                    "y": 57.0
                },
                {
                    "opis": "8xurbana",
                    "y": 108.0
                },
                {
                    "opis": "8xurbana",
                    "y": 81.0
                },
                {
                    "opis": "",
                    "y": 63.0
                },
                {
                    "opis": "6xurbana",
                    "y": 80.0
                },
                {
                    "opis": "1x press1xkarta s parka, 2xurbana",
                    "y": 108.0
                },
                {
                    "opis": "4 dru\ufffdine so bile spu\ufffd\ufffdene brez vstopnine zaradi manjka elektrike1x SMD, 1xICOM",
                    "y": 59.0
                },
                {
                    "opis": "5x karta na parku",
                    "y": 93.0
                },
                {
                    "opis": "9x dru\ufffdine/vodstvo Nike D., 9 oseb je pri\ufffdlo na Adijo, tovarna, ki pa niso zapisane v statistiki2xurbana, 7xkarte s parkov",
                    "y": 49.0
                },
                {
                    "opis": "1x SMD  2x urbana",
                    "y": 63.0
                },
                {
                    "opis": "10x urbana2x ICOM",
                    "y": 70.0
                },
                {
                    "opis": "4x gostje iz Mestne galerije 6x Urbana2x SMD, 1xICOM2x Koudelka darilni bon1x brezposelna, 2x s karto s parka ",
                    "y": 65.0
                },
                {
                    "opis": "2x SMD, 2x karta s parka2x 30%, 1x ICOM 3x -30%7x karti s parkov",
                    "y": 144.0
                },
                {
                    "opis": "1x SMD, 8x Urbana, 1x ICOM, 1x karta NMS, 1x tur. Vodnik5x karta s parka, 15x skupina igralcev s Kongresnega, 30% popustBernarda - 10 ljudi na vodstvu2x urbana1x gratis za Janjo",
                    "y": 57.0
                },
                {
                    "opis": "8x NMS",
                    "y": 40.0
                },
                {
                    "opis": "7x NMS, 1x Urbana, 1xSMD2x karta s parkov, 1x PRESS",
                    "y": 44.0
                },
                {
                    "opis": "1xurbana",
                    "y": 37.0
                },
                {
                    "opis": "4xurbana, 2xpress, 4x NMS1XSMD, 1xicom ",
                    "y": 52.0
                },
                {
                    "opis": "4x NMS, 5x urbana2xkarta iz parkov",
                    "y": 55.0
                },
                {
                    "opis": "6XNMS2xurbana",
                    "y": 56.0
                },
                {
                    "opis": "1x bon dru\ufffdinska vstopnica 3x karte s parkov, 1x urbana",
                    "y": 56.0
                },
                {
                    "opis": "10xnarodni muzej",
                    "y": 22.0
                },
                {
                    "opis": "5x ICOM",
                    "y": 31.0
                },
                {
                    "opis": "3x NMS1x urbana",
                    "y": 19.0
                },
                {
                    "opis": "5xurbana",
                    "y": 42.0
                },
                {
                    "opis": "1xdru\ufffdinska karta NMS2xurbana",
                    "y": 47.0
                },
                {
                    "opis": "1xturisti\ufffdni vodi\ufffd, 1xkarta parki2xurbana",
                    "y": 35.0
                },
                {
                    "opis": "1x gratis ya Niko4x NMSVodstvo: 5 ljudi",
                    "y": 46.0
                },
                {
                    "opis": "1xturisti\ufffdni vodi\ufffd   8xkarta NM, 4xurbana",
                    "y": 41.0
                },
                {
                    "opis": "5xurbana, 7xNMZ",
                    "y": 19.0
                },
                {
                    "opis": "4xNMS, 3xurbana",
                    "y": 66.0
                },
                {
                    "opis": "2xSMD1xICOM, 8xNMS, 2xparki, 4xurbana",
                    "y": 62.0
                },
                {
                    "opis": "1x NMS, Vodstvo 17 ljudi2xNMS, 4x urbana",
                    "y": 34.0
                },
                {
                    "opis": "4xNMs, 1xurbana",
                    "y": 33.0
                },
                {
                    "opis": "4xSMD, 1xNMS3xNMS, 3xgratis, 1xurbana",
                    "y": 38.0
                },
                {
                    "opis": "4xNMS, 1xurbana, 1xpark",
                    "y": 33.0
                },
                {
                    "opis": "1xNMS, 2xurbana",
                    "y": 38.0
                },
                {
                    "opis": "1xNMS, 2xkarta parkim 1xgratis(Janja)   6xNMS",
                    "y": 26.0
                },
                {
                    "opis": "2xgratis3xNMS",
                    "y": 30.0
                },
                {
                    "opis": "4xurbana, 6xnarodni, 5xparki",
                    "y": 23.0
                },
                {
                    "opis": "1x 30%",
                    "y": 51.0
                },
                {
                    "opis": "2x NMS, 2x s parkov1x SMD, 4xurbana",
                    "y": 17.0
                },
                {
                    "opis": "2xparki",
                    "y": 55.0
                },
                {
                    "opis": "2xurbana, 3xNMSplus skupina 50 oseb (upokojenci)",
                    "y": 52.0
                },
                {
                    "opis": "12xDEKD vodstvo, 1xpress2xNMS, 2xurbana",
                    "y": 8.0
                },
                {
                    "opis": "",
                    "y": 28.0
                },
                {
                    "opis": "4xurbana, 1xkarta parki, 4xNMS",
                    "y": 18.0
                },
                {
                    "opis": "4xNMS",
                    "y": 18.0
                },
                {
                    "opis": "6xNMS",
                    "y": 62.0
                },
                {
                    "opis": "1xNMS1xICOM, 2XNMS",
                    "y": 33.0
                },
                {
                    "opis": "Vodstvo:3x, 1xSMD1xICOM",
                    "y": 33.0
                },
                {
                    "opis": "2xNMS",
                    "y": 34.0
                },
                {
                    "opis": "9x NMS,1xurbana ",
                    "y": 32.0
                },
                {
                    "opis": "2xNMS",
                    "y": 31.0
                },
                {
                    "opis": "3xparki",
                    "y": 88.0
                },
                {
                    "opis": "",
                    "y": 65.0
                },
                {
                    "opis": "1xkarta parki, vodstvox7, 1xSMD, 2xNMS1xnms",
                    "y": 15.0
                },
                {
                    "opis": "1xnms",
                    "y": 32.0
                },
                {
                    "opis": "5x NMS",
                    "y": 20.0
                },
                {
                    "opis": "2xNMS, 3xurbana",
                    "y": 44.0
                },
                {
                    "opis": "1xparki",
                    "y": 36.0
                },
                {
                    "opis": "1xNMS1xNMS",
                    "y": 24.0
                },
                {
                    "opis": "3xNMS",
                    "y": 19.0
                },
                {
                    "opis": "1xICOM, 2xNMS",
                    "y": 24.0
                },
                {
                    "opis": "1x NMS",
                    "y": 24.0
                },
                {
                    "opis": "4xUrbana",
                    "y": 16.0
                },
                {
                    "opis": "2xurbana, 1xNMS",
                    "y": 25.0
                },
                {
                    "opis": "3xparki, 2xNMS1xNMS1x Press, 1x NMS",
                    "y": 17.0
                },
                {
                    "opis": "1xICOM1xNMS",
                    "y": 56.0
                },
                {
                    "opis": "4xurbana, 5X NMS",
                    "y": 42.0
                },
                {
                    "opis": "2X ICOM2xparki, 2X NMS",
                    "y": 47.0
                },
                {
                    "opis": "1xdru\ufffdinska zastonj (Bo\ufffdena), 1xNMS dru\ufffdinska, 1xNMS2xparki, 2x NMS",
                    "y": 49.0
                },
                {
                    "opis": "45 \ufffdtudentov iz Italije1xNMS, 1xurbana",
                    "y": 44.0
                },
                {
                    "opis": "4xurbana; 1X Press",
                    "y": 20.0
                },
                {
                    "opis": "9 muzej v malem: Mesto v imperiju; konzervatorji in restavratorji - vodi Katarina Toman: 131xNMS, 2xurbana",
                    "y": 4.0
                },
                {
                    "opis": "",
                    "y": 31.0
                },
                {
                    "opis": "1xbon, 3xICOM, 1xgratis1xgratis, 4xurbana; 1X ICOM",
                    "y": 19.0
                },
                {
                    "opis": "2xNMS",
                    "y": 23.0
                },
                {
                    "opis": "",
                    "y": 35.0
                },
                {
                    "opis": "2x NMS",
                    "y": 16.0
                },
                {
                    "opis": "1xurbana",
                    "y": 4.0
                },
                {
                    "opis": "1xgratis (biv\ufffda \ufffdtudentka)2xNMS",
                    "y": 3.0
                },
                {
                    "opis": "1x ICOM",
                    "y": 11.0
                },
                {
                    "opis": "1xNMS",
                    "y": 63.0
                },
                {
                    "opis": "1xNMS,2xPRESS",
                    "y": 44.0
                },
                {
                    "opis": "1xPRESS, 3xNMS, 1xurbana",
                    "y": 17.0
                }
            ]
        }]
    });
});
