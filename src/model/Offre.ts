export interface Origine {

    // id_origine: number;
    /*typeOrigine: string;*/
    nucleaire: number;
    hydraulique: number;
    gaz: number;
    eolien: number;
    solaire: number;
    biomasse: number;
    charbon: number;
}

export interface Fournisseur {

    id_Fournisseur: number;
    mail_fournisseur: string;
    nom_fournisseur: string;
    identifiant: string;
    password: string;
}

// tslint:disable-next-line: class-name
export interface Client_F {
    id_Client: number;
    adresse: string;
    nom_Client: string;
    prenom_Client: string;
    consoElectrique: number;
}

export class Offre {
    // tslint:disable-next-line: variable-name
    public id: number;
    // tslint:disable-next-line: variable-name
    public nom_Offre: string;
    public origines: Origine[];
    public client: Client_F[];
    public fournisseur: Fournisseur;

    constructor(id: number, n: string, o: Origine[], c: Client_F[], f: Fournisseur) {
        this.id = id;
        this.nom_Offre = n;
        this.origines = o;
        this.client = c;
        this.fournisseur = f;
    }

    public static recipeFromJSON(obj: any): Offre {
        return new Offre(obj.id, obj.nom_Offre, obj.origines, obj.client, obj.fournisseur);
    }

    public static createBlank(): Offre {
        return new Offre(-1, '', [], [], null);
    }

}
