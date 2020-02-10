export class Places {

    name: String;
    type: String;
    stop: String;
    number: Number;
    distance: String;

constructor(name='',type='' ,stop='', number=0,distance='') {
    this.name = name;
    this.type = type;
    this.stop = stop;
    this.number = number;
    this.distance = distance;
}
}
