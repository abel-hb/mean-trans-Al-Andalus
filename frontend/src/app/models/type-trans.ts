// Models
export class TypeTrans {
    _id: String;
    number: Number;
    name: String;
    route: String;
    price: String;

    constructor(_id='',number=0 ,name='', route='', price='') {
        this._id = _id;
        this.number = number;
        this.name = name;
        this.route = route;
        this.price = price;
    }


}
