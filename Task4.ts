class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}
let Car1 = new Car("Audi", "Q4", 2017);
let Car2 = new Car("Kia", "Seltos", 2020);
Car1.displayInfo();
Car2.displayInfo();
