//* -- CODE DEVELOPED BY WEBFULLSET TEAM  -- //*
//* -- OUR CONTACTS -- //*
//* -- https://webfullset.com/  -- //*
//* -- info@webfullset.com -- //*
//* -- Skype: hjvf_07 -- //*
//* -- https://www.freelancer.com/u/markupcoders --//*

// page init
$(document).ready(function(){
	$('.slide1').gallery();
	$('.slide2').gallery({
		autoRotation: 7000,
		duration: 1000,
		slideElement: 2,
		infinite: true,
		onChange: function () {
			console.log(this.wrapHolderW);
		}
	});
	$('.slide3').gallery({
		infinite: true,
		switcher: "div.switcher > span"
	});
	$('.slide4').gallery({
        oneSlide: true,
        circle: false,
		disableBtn: 'disabled',
		switcher: "div.switcher > span"
	});
	$('.slide5').gallery({
        flexible: true
	});

	$('.fade1').gallery();
});
