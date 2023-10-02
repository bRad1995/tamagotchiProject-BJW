class Tamagotchi {
    constructor(name, hunger, sleepiness, boredom, age) {
        this.name = name
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.age = age
    }
}

class NewPet extends Tamagotchi {
    constructor(name, hunger, sleepiness, boredom, age) {
        super(name, hunger, sleepiness, boredom, age)
        this.name = name;
        this.hunger = 0;
        this.sleepiness = 0;
        this. boredom = 0;
        this. age = 0;
    }
    feedTama(){

    }
    sleepTama(){

    }
    boredTama(){

    }
}
