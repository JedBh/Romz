class person {
    constructor(name, age, height, mass) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.mass = mass;
    }

    // getter
    get bmi() {
        return this.calcBmi();
    }

    // method
    calcBmi() {
        this.height /= 100;
        return this.mass / Math.pow(this.height, 2);
    }
    
}

let people = [];

people.push(new person("Jed", 20, 184, 73));
people.push(new person("Rotem", 21, 162, 52));
people.push(new person("Burger King", 19, 169, 84));
people.push(new person("Romy", 20, 169, 65));

for (let i = 0; i < people.length; i++) {
    console.log(`${people[i].name} : ${people[i].bmi}`);
}