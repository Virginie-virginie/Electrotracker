export class Mail {
public subject: string;
public content: string;
public address: string;
public attachement: string;

constructor(sbj: string, cnt: string, adrs: string, att: string) {
    this.address = adrs;
    this.attachement = att;
    this.content = cnt;
    this.subject = sbj;
}

public static serviceFromJSON(obj: any): Mail {
    return new Mail(obj.subject, obj.content, obj.address, obj.attachement);
}

public static createBlank(): Mail {
    return new Mail('', '', '', '');
}
}
