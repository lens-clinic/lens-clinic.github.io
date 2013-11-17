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

    function main() {
	setBackground();
	initMaps();
    }
    
    main();
})();
