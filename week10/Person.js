export class Person {
    name;

    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Hi! I'm ${this.name}`);
    }
}