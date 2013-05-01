var fruity_slides = new Array;
fruity_slides[0] = "fruity-landing-header";
fruity_slides[1] = "fruity-landing-slice";
fruity_slides[2] = "fruity-landing-twored";
fruity_slides[3] = "fruity-landing-drink";

var family_slides = new Array;
family_slides[0] = "family-header";
family_slides[1] = "family-landing-flowers";
family_slides[2] = "family-landing-wedding";
family_slides[3] = "family-landing-mag";

var beauty_slides = new Array;
beauty_slides[0] = "beauty-landing-header";
beauty_slides[1] = "beauty-landing-makeup";
beauty_slides[2] = "beauty-landing-mask";
beauty_slides[3] = "beauty-landing-wings";

var house_slides = new Array;
house_slides[0] = "house-landing-header";
house_slides[1] = "family-landing-mag";
house_slides[2] = "fruity-landing-slice";
house_slides[3] = "family-landing-flowers";

var beyond_slides = new Array;
beyond_slides[0] = "beyond-landing-dragonfly";
beyond_slides[1] = "beauty-landing-wings";
beyond_slides[2] = "family-landing-wedding";
beyond_slides[3] = "family-landing-flowers";

var i = 1;

var slideshow = function(section) {


setTimeout(function() {

$('.feature_landing').hide();

if(section == "fruity") {
$('.feature_landing').css('background-image','url(imgs/' + fruity_slides[i] + '.jpg)');	
}

if(section == "family") {
$('.feature_landing').css('background-image','url(imgs/' + family_slides[i] + '.jpg)');	
}

if(section == "beauty") {
$('.feature_landing').css('background-image','url(imgs/' + beauty_slides[i] + '.jpg)');	
}

if(section == "house") {
$('.feature_landing').css('background-image','url(imgs/' + house_slides[i] + '.jpg)');	
}

if(section == "beyond") {
$('.feature_landing').css('background-image','url(imgs/' + beyond_slides[i] + '.jpg)');	
}

$('.feature_landing').fadeIn();

i++;

if(i == 4) {
	i = 0;
}

if(i < 4) {
	slideshow(section);
	
}

}, 3500);

}










	





