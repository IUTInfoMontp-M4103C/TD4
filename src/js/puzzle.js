class Puzzle {

    constructor(theme) {
        this.theme = theme;
        this.nb_coups = 0;
        this.plateau = new Array();
        for(let ligne = 0; ligne < 4; ligne++) {
            for(let colonne = 0; colonne < 4; colonne++) {
                this.plateau.push(new Element(ligne,colonne,theme));
            }
        }
        this.MAJ_pointeurs_souris();
        this.message = document.getElementById('message');
        this.setMessage("0 coup, " + this.nb_bien_places() + " bien placés");
        this.solution = new Element(4,0,theme);
    }

    emplacement_vide() {
        let i = 0;
        while(this.plateau[i].image.i != 15)
            i++;
        return i;
    }

    bouger(i1,bool) {
        if (bool) {
            let i2 = this.emplacement_vide();
            if (this.plateau[i1].voisins.indexOf(i2) != -1) {
                this.plateau[i1].image.permuterSrc(this.plateau[i2].image);
                this.nb_coups++;
                this.setMessage(this.nb_coups + " coups, " + this.nb_bien_places() + " bien placés");
                this.MAJ_pointeurs_souris();
                if (this.resolu()) {
                    this.setMessage("bravo, puzzle résolu en " + this.nb_coups + " coups.");
                    this.plateau[15].image.balise.src = "img/" + this.theme + "/" + this.theme + "_.jpg";
                    this.plateau[14].image.setCursor("not-allowed");
                    this.plateau[11].image.setCursor("not-allowed");
                }
            }
        }
        
    }

    mvt_aleat(bool) {
        let t = this.plateau[this.emplacement_vide()].voisins;
        let l = t.length;
        let i = Math.floor(Math.random() * l);
        this.bouger(t[i],bool);
    }

    melanger(n) {
        if (this.resolu()) {
            this.plateau[15].setI(15);
        }
        for(let i = 0; i < n; i++) this.mvt_aleat(true);
        this.reset_nb_coups();
        this.setMessage("0 coup, " + this.nb_bien_places() + " bien placés");
    }

    nb_bien_places() {
        let n = 0; 
        for(let i = 0; i < 15; i++) {
            if (this.plateau[i].image.imageCorrecte())
                n++;
        }
        return n;
    }

    resolu() {
        return this.nb_bien_places() == 15;
    }

    setTheme(th) {
        for(let i = 0; i < 16; i++) 
            this.plateau[i].setTheme(th);
        this.theme = th;
        this.solution.setTheme(th);
        if (this.resolu()) {
            this.plateau[15].setI("");
        }
    }

    setMessage(m) {
        this.message.innerHTML = "<p>" + m + "</p>";
    }

    reset_nb_coups() {
        this.nb_coups = 0;
    }

    MAJ_pointeurs_souris() {
        for(let ind = 0; ind < 16; ind++) {
            if (this.plateau[ind].voisins.indexOf(this.emplacement_vide()) == -1) {
                    this.plateau[ind].image.setCursor("not-allowed");
                } else {
                    this.plateau[ind].image.setCursor("pointer");
                }
        }
    }

}

