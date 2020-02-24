// Models
export class Transport {
        _id: String;
        number: Number;
        brand: String;
        model: String;
        enrollment: String;
        start_date: String;
        end_date: String;
        price: String;

    constructor(_id='',number=0 ,brand='',model='' ,enrollment='', start_date='',end_date='',price='') {
        this._id = _id;
        this.number = number;
        this.brand = brand;
        this.model = model;
        this.enrollment = enrollment;
        this.start_date = start_date;
        this.end_date = end_date;
        this.price = price;
    }
    

}
