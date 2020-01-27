export class Users {
    _id: String;
    name: String;
    surname: String;
    dni: String;
    email: String;
    tlf: Number;
    transport: Array;
    discharge_date: String;

    constructor(_id='', name='', surname='', dni='', email='', tlf=0, transport='', discharge_date='') {
        this._id = _id;
        this.name = name;
        this.surname = surname;
        this.dni = dni;
        this.email = email;
        this.tlf = tlf;
        this.transport = transport;
        this.discharge_date  =discharge_date;
    }

}
