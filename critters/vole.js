class Vole {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}

export default Vole;

let vole = new Vole("Violet", "Black", "F", 20, 1, "small");