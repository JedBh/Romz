class person {
    constructor(name, age, height, mass) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.mass = mass;
        this.BMI = parseFloat(this.bmi.toFixed(2));
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
people.push(new person("Burger King", 19, 169, 84));
people.push(new person("Romy", 20, 169, 65));

button.addEventListener("click", function() {
    if (validInp()) {
        people.push(new person(inputName.value, parseInt(inputAge.value), parseInt(inputHeight.value), parseInt(inputMass.value)));
        addSquare(people);
        console.table(people);
    } else {
        console.log("You didn't fill all inputs.");
    }
    resetInp();
});

function resetInp() {
    for (let i= 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

function validInp() {
    for (let i= 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            return false;
        }
    }
    return true;
}

function initSquares(list) {
    for (let i = 0; i < list.length; i++) {
        let div = document.createElement("div");
        div.textContent = `name : ${list[i].name}, age : ${list[i].age}, height : ${list[i].height}m, weight : ${list[i].mass}kg`;
        div.classList.add("display-div");
        document.querySelector("body").appendChild(div);
    }
}

function addSquare(list) {
    let i = list.length - 1;
    let div = document.createElement("div");
    div.textContent = `name : ${list[i].name}, age : ${list[i].age}, height : ${list[i].height}m, weight : ${list[i].mass}kg`;
    div.classList.add("display-div");
    document.querySelector("body").appendChild(div);
}

initSquares(people);
console.table(people);