export interface Adresse {
    rue: string;
    ville: string;
    code_postal: number;
    pays: string;
}

export class User {
    // tslint:disable-next-line: variable-name
    public id_User: number;
    public mail: string;
    public pseudo: string;
    public adresse: Adresse;


    constructor(id: number, m: string, p: string, a: Adresse) {
        this.id_User = id;
        this.mail = m;
        this.pseudo = p;
        this.adresse = a;
    }

    public static recipeFromJSON(obj: any): User {
        return new User(obj.id_user, obj.mail, obj.pseudo, obj.adresse);
    }

    public static createBlank(): User {
        return new User(-1, '', '', null);
    }

}
