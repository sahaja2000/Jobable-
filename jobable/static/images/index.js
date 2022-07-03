
var sliderInverse = document.getElementById("invert-color");
var slidergreyscale = document.getElementById("grayscale-mode");
var sliderbrightness = document.getElementById("brightness-level");
var sliderFont = document.getElementById("font-level");
var sliderInverseReset = document.getElementById("refresh-invert");
var sliderGreyscaleReset = document.getElementById("refresh-greyscale");
var sliderBrightnessReset = document.getElementById("refresh-brightness");
var sliderFontReset = document.getElementById("refresh-font");
var reset = document.getElementById("reset");


sliderInverse.oninput = function() {
  document.getElementById("slider-value-place-invert").innerHTML = this.value+"%";
  document.querySelector("body").style.filter = `invert(${this.value}%)`
}

slidergreyscale.oninput = function() {
  document.getElementById("slider-value-place-grayscale").innerHTML = this.value+"%";
  document.querySelector("body").style.filter = `grayscale(${this.value}%)`
}

sliderbrightness.oninput = function() {
  document.getElementById("slider-value-place-brightness").innerHTML = this.value+"%";
  document.querySelector("html").style.filter = `brightness(${this.value}%)`
}

sliderFont.oninput = function() {
  document.getElementById("slider-value-place-font").innerHTML = this.value+"%";
  document.querySelector("body").style.fontSize = `${this.value}%`
}


sliderInverseReset.onclick = function(){
    document.querySelector("body").style.filter = `invert(0%)`
    sliderInverse.value = 0;
    document.getElementById("slider-value-place-invert").innerHTML = 0+"%";
}
sliderGreyscaleReset.onclick = function(){
    document.querySelector("body").style.filter = `grayscale(0%)`
    slidergreyscale.value = 0;
    document.getElementById("slider-value-place-grayscale").innerHTML = 0+"%";
}

sliderBrightnessReset.onclick = function(){
    document.querySelector("html").style.filter = `brightness(100%)`
    sliderbrightness.value = 100;
    document.getElementById("slider-value-place-brightness").innerHTML = "100%"
}
sliderFontReset.onclick = function(){
    document.querySelector("body").style.fontSize = `100%`
    sliderFont.value = 100+"%";
    document.getElementById("slider-value-place-font").innerHTML = 100+"%";
}


function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

reset.onclick = function(){
    document.querySelector("body").style.filter = `invert(0%)`
    sliderInverse.value = 0;
    document.getElementById("slider-value-place-invert").innerHTML = 0+"%";

    document.querySelector("body").style.filter = `grayscale(0%)`
    slidergreyscale.value = 0;
    document.getElementById("slider-value-place-grayscale").innerHTML = 0+"%";

    document.querySelector("html").style.filter = `brightness(100%)`
    document.querySelector("slider-value-place-brightness").innerHTML = 50+`%`
    sliderbrightness.value = 50+"%";

    document.querySelector("body").style.fontSize = `100%`
    sliderFont.value = 100+"%";
    document.getElementById("slider-value-place-font").innerHTML = 100+"%";
}





var accessIcon = document.getElementById("accessibility-icon");
accessIcon.onclick = function(){
    var over = document.getElementById("overlay-accessibility")
    console.log("Hellp");
    if (over.className === "accessibility-overlay") {
        over.className += " acc";
      } else {
        over.className = "accessibility-overlay";
      }
}

