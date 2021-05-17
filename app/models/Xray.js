class Xray {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}

export default Xray;

let xray = new Xray("Xena", "Gray", "F", 100, 6);