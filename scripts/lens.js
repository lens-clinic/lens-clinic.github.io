var _gaq = _gaq || []; // for Google Analytics;

(function () {

    function rootPath() {
	if ($("body").attr("data-page") == "root") {
	    return "";
	} else {
	    return "../";
	}
    }

    function setBackground() {
	var k = 1 + Math.floor(Math.random()*4);
	$.backstretch(rootPath() + "images/bg" + String(k) + ".jpg");
    }

    function initMaps() {
	var gm = google.maps;
        var opts =
	    {
		center: new gm.LatLng(51.502298, 31.285175),
		zoom: 18,
		mapTypeId: gm.MapTypeId.ROADMAP
            };
	$(function () {
	    $(".gmap").each(function () {
		console.log("GMAP AT", this);
		var dom = this;	    
		var map = new gm.Map(dom, opts)
	    });
	});
    }

    function initGoogleAnalytics() {
	_gaq.push(['_setAccount', 'UA-45979541-1']);
	_gaq.push(['_trackPageview']);
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ?
		  'https://ssl' :
		  'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
    }

    function main() {
	setBackground();
	initMaps();
	initGoogleAnalytics();
    }
    
    main();
})();
