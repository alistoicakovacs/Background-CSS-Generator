const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("body");
const color1Text = document.querySelector(".color1Text");
const color2Text = document.querySelector(".color2Text");

function setFunction() {
	body.style.background =
		"linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	color1Text.value = color1.value;
	color2Text.value = color2.value;
}

color1.addEventListener("input", setFunction);
color2.addEventListener("input", setFunction);
