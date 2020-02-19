export class Users {
    
    constructor(
       public _id: String,
       public name: String,
       public surname: String,
       public dni: String,
       public role: String,
       public password: String,
       public email: String,
       public tlf: Number,
       public transport: String,
       public image: String,
       public discharge_date: String
    ) {}
  
}
