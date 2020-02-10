export class Transport {
       number: Number;
        brand: String;
        model: String;
        enrollment: String;
        start_date: String;
        end_date: String;
        price: String;

    constructor(number=0 ,brand='',model='' ,enrollment='', start_date='',end_date='',price='') {
        this.number = number;
        this.brand = brand;
        this.model = model;
        this.enrollment = enrollment;
        this.start_date = start_date;
        this.end_date = end_date;
        this.price = price;
    }
    

}
