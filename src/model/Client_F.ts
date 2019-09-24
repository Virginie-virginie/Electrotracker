export interface Adresse {
    rue: string;
    ville: string;
    code_postal: string;
    pays: string;
}

export interface Offre {
    id: number;
    nom_Offre: string;
}

export class Client_F {
    public id_Client: number;
    public nom_Client: string;
    public prenom_Client: string;
    public consoElectrique: number;
    public adresse: Adresse;
    public offre: Offre;

    constructor(id: number, n: string, p: string,  c: number, a: Adresse, o: Offre) {
        this.id_Client = id;
        this.nom_Client = n;
        this.prenom_Client = p;
        this.consoElectrique = c;
        this.adresse = a;
        this.offre = o;
    }

    public static recipeFromJSON(obj: any): Client_F {
        return new Client_F(obj.id_Client, obj.nom_Client, obj.prenom_Client, obj.consoElectrique, obj.adresse, obj.offre);
    }

    public static createBlank(): Client_F {
        return new Client_F(-1, '', '', 1, {rue: null, ville: null, code_postal: null, pays: null}, null);
    }
}

