class Parent{
    constructor(){
        this.fathername = "Swazwerneger";
    }
}

class child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
       return this.name + " " + this.fathername;
    }
}
const name1 = new child("Arnold");
console.log(name1.getFullName());