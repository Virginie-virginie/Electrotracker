export interface Offre {
    id_Offre: number;
    nom_offre: string;
}

// tslint:disable-next-line: class-name
export interface Client_F {
    id_Client: number;
    adresse: string;
    nom_Client: string;
    prenom_Client: string;
    consoElectrique: number;
}

export class Fournisseur {
    // tslint:disable-next-line: variable-name
    public id_Fournisseur: number;
    // tslint:disable-next-line: variable-name
    public nom_fournisseur: string;
    // tslint:disable-next-line: variable-name
    public mail_fournisseur: string;
    public identifiant: string;
    public password: string;
    public offre: Offre[];
    public client: Client_F[];

    constructor(id: number, n: string, m: string, i: string, p: string, o: Offre[], c: Client_F[]) {
        this.id_Fournisseur = id;
        this.nom_fournisseur = n;
        this.mail_fournisseur = m;
        this.identifiant = i;
        this.password = p;
        this.offre = o;
        this.client = c;
    }

    public static recipeFromJSON(obj: any): Fournisseur {
        return new Fournisseur(obj.id_Fournisseur, obj.nom_fournisseur, obj.mail_fournisseur, obj.identifiant,
             obj.password, obj.offre, obj.client);
    }

    public static createBlank(): Fournisseur {
        return new Fournisseur(-1, '', '', '', '', [], []);
    }

}
