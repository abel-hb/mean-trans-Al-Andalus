export class Aplication {
    _id: String;
    name: String;
    route: String;
    transport: String;
    travel_time: String;
    start_date: String;
    end_date: String;
    price: String;

    constructor(_id='',name='', route='', transport='', travel_time='', start_date='', end_date='', price='') {
        this._id = _id;
        this.name = name;
        this.route = route;
        this.transport = transport;
        this.travel_time = travel_time;
        this.start_date = start_date;
        this.end_date = end_date;
        this.price = price;
    }

}
