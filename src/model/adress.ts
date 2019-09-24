

export class Adress {
    public num: string;
    public rue: string;
    public code_postal: string;
    public ville: string;
    public pays: string;
    lat: number;
    lng: number;

    constructor(num: string, rue: string, cd: string, v: string, p: string){
        this.num = num;
        this.rue = rue;
        this.code_postal = cd;
        this.ville = v;
        this.pays = p;
    }

    public static adressFromJSON(obj: any): Adress {
        return new Adress(obj.num, obj.rue, obj.cd, obj.v, obj.p );
    }

    public static createBlank(): Adress {
        return new Adress('', '', '', '', '');
    }
}