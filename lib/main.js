$(document).ready(function(){

	
var ancients = [
    {
        title: 'Woman III',
        pictureSrc: './vrouw.jpg',
        text: "Woman III is een schilderij van Willem de Kooning. Het schilderij is een van een serie van zes schilderijen van de Kooning gemaakt tussen 1951 en 1953 rondom het thema 'vrouw'. De afmetingen zijn 1,7×1,2 m en is gemaakt in 1953."

    },
    {
        title: 'Op de drempel van de eeuwigheid',
        pictureSrc: './man.jpg',
        text:"Zittende man (het hoofd steunend op de vuisten) op de drempel van de eeuwigheid, ook genoemd Oude man met smart, is een olieverfschilderij van Vincent van Gogh, gebaseerd op een gelijknamige lithografie uit 1882 en voltooid in Saint-Rémy-de-Provence begin mei 1890, twee maanden voor zijn dood. Het doek is in het bezit van het Kröller-Müller Museum in Otterlo."
    },
    {
        title: 'No. 5, 1948',
        pictureSrc: './no.jpg',
        text:"No. 5, 1948 is een schilderij gemaakt door Jackson Pollock.Het schilderij werd in november 2006 voor 140 miljoen dollar geveild en staat daarmee in de top 10 van de lijst van duurst geveilde schilderijen. Het doek werd gekocht door de Mexicaanse zakenman David Martinez."
    },
    {
        title: 'De tuin van Daubigny',
        pictureSrc: './tuin.jpg',
        text:"De tuin van Daubigny is een schilderij van Vincent van Gogh. Het is een van de laatste, en misschien wel het laatste, schilderij dat hij maakte (in juli 1890). Het werk toont de tuin van Charles-François Daubigny, een schilder die Van Gogh zeer bewonderde. Er bestaan twee versies van het werk:"
     }
];
    var test = document.getElementById('test');

    var test2 = document.getElementById('test2');
     


$('#reader').html5_qrcode(function (data) {

        var qrscan = ancients[data];
        test.innerHTML = qrscan.title;
        test2.innerHTML = qrscan.text;
         $("#image").attr("src", qrscan.pictureSrc);

      



    },
    function (error) {
        //show read errors
    }, function (videoError) {
        //the video stream could be opened
    }
);

});
