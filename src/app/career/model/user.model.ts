export class UserContact {
    id: number;
    name: string;
    mail: string;
    number: string;
    landline: string;
    website: string;
    address: string;

    constructor( user ){
        this.id = user.id;
        this.name = user.name;
        this.mail = user.mail;
        this.number = user.number;
        this.landline = user.landline;
        this.website = user.website;
        this.address = user.address;
    }
}
