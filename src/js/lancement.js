let P = new Puzzle("nombres");
let jeu = document.getElementById("jeu");
let modele = document.getElementById("modele");
let themes = document.getElementById("themes");
let melanger = document.getElementById("melanger");
let solution = document.getElementById("solution");

for(let i = 0; i < 16; i++) {
	P.plateau[i].image.balise.addEventListener("click",function f1() {
		P.bouger(i,!P.resolu());
	});
}

themes.addEventListener("change",function() {
	P.setTheme(themes.value);
});

melanger.addEventListener("click",function() {
	P.melanger(200);
});

solution.addEventListener("click",function() {
	if (jeu.style.display == "none") {
		jeu.style.display = "flex";
		modele.style.display = "none";
		solution.value = "solution";
		melanger.disabled = false;
	} else {
		jeu.style.display = "none";
		modele.style.display = "flex";
		solution.value = "puzzle";
		melanger.disabled = true;
	}
});

P.melanger(200);