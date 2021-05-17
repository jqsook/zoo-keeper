# Welcome to your zoo, where you're the zoo keeper!

### Part of being the zoo keeper is knowing all of the animals in your zoo. You will, first, create a new class for each animal in your zoo, then, second, create an at least one instance of each animal, and, finally, create collections of like animals.

#### Objective:

Students will use javascript in order to create classes and instances of those classes. Students will also practice with array methods.

### Part 1: Creating Classes

Create a new class for each animal in your zoo. Create an animal class for every letter of the alphabet. Don't forget to declare your classes in their own unique files.

```js
class Alligator {
  constructor(
    name = "",
    color = "",
    gender = "",
    weight = 0,
    tailLengthInch = 0,
    teethSize = ""
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.teethSize = teethSize;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`);
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`);
  }
}

export default Alligator;
```

_Note: You need not have every property or member in this class in your classes, and likewise, you may include additional properties not shown above._

### Part 2: Creating Instances

Create at least one instance of every animal class

```js
let ally = new Alligator("Ally", "Green", "F", 200, 60, "big");
```

### Part 3: Creating Collections of Like Animals

Group like animals in collections. Utilize array methods, e.g., _.push()_

_Hint: how could you utilize a new class, Pen, or Cage, to accomplish Part 3?_
