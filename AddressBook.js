//UC 1 Creating addressbook
class Contact{
    //properties
    FirstName;
    LastName;
    Address;
    City;
    State;
    Zip;
    PhoneNumber;
    Email;

    //constructor with undefiend number of parameters
    constructor(...params){
        this.FirstName = params[0];
        this.LastName = params[1];
        this.Address = params[2];
        this.City = params[3];
        this.State = params[4];
        this.Zip = params[5];
        this.PhoneNumber = params[6];
        this.Email = params[7];
    }
}