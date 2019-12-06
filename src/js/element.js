class Element {

	constructor(ligne,colonne,theme) {
		this.image = new Image(4*ligne+colonne,theme);
		this.voisins = new Array();
		if (ligne > 0) this.voisins.push(this.image.indice - 4);
		if (ligne < 3) this.voisins.push(this.image.indice + 4);
		if (colonne > 0) this.voisins.push(this.image.indice - 1);
		if (colonne < 3) this.voisins.push(this.image.indice + 1);
	}

	setTheme(th) {
		this.image.setTheme(th);
	}

	setI(i) {
		this.image.setI(i);
	}

}