class Person {
    name

    constructor(name) {
        this.name = name
    }

    introduce() {
        console.log(`Hi! I'm ${ this.name }`)
    }
}

class Teacher extends Person {
    // Properties
    teaches
    howManyYears

    // Constructor
    constructor(namee, teaches, howManyYears) {
        super(namee)
        this.teaches = teaches
        this.howManyYears = howManyYears
    }

    // Functions
    introduceSelf() {
        console.log(`Hello ${ this.name }! You teach the course ${ this.teaches }`)
    }

    experience() {
        console.log(`${ this.name } has ${ this.howManyYears } years of experience teaching at Durham College`)
    }
}
