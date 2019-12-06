class Image {

	constructor(indice,theme) {
		this.indice = indice;
		this.theme = theme;
		this.i = this.indice;
		this.balise = document.getElementById('photo' + this.indice);
		this.setSrc();
	}

	setSrc() {
		this.balise.src = "img/" + this.theme + "/" + this.theme + "_" + this.i + ".jpg";
	}

	setI(i) {
		this.i = i;
		this.setSrc();
	}

	setTheme(th) {
		this.theme = th;
		this.setSrc();
	}

	imageCorrecte() {
		return this.indice == this.i;
	}

	permuterSrc(other) {
		let i_other = other.i;
		let i_this = this.i;
		this.setI(i_other);
		other.setI(i_this);
		this.setSrc();
		other.setSrc();
	}

	setCursor(c) {
		this.balise.style.cursor = c;
	}
}