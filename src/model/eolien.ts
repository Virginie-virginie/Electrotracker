export class Eolien {
    public id_eolien: number;
    public latitude: number;
    public longitude: number;
    public nom: string;

    constructor(id: number, lat: number, lng: number, nom: string) {
        this.id_eolien = id;
        this.latitude = lat;
        this.longitude = lng;
        this.nom = nom;

    }

    public static eolienFromJSON(obj: any): Eolien {
        return new Eolien(obj.id, obj.lat, obj.lng, obj.nom);
    }

    public static createBlank(): Eolien {
    return new Eolien(-1, 1, 1, '');
    }
}
