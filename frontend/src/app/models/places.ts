export class Places {
    _id: String;
    name: String;
    type: String;
    stop: String;
    number: Number;
    distance: String;

constructor(_id='',name='',type='' ,stop='', number=0,distance='') {
    this._id = _id;
    this.name = name;
    this.type = type;
    this.stop = stop;
    this.number = number;
    this.distance = distance;
}
}
