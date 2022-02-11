const Employee = require("../lib/Employee");

class Manager extends Employee {

    constructor(name, officeNumber){
       super(name)
       this.officeNumber = officeNumber;

    }
    getRole(){
        return 'Manager';
    }
}




module.exports = Manager;