console.log("Tamagotchi")

class Newpet {
    constructor(name, hunger, sleepiness, boredom, age) {
        this.name = name
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.age = age
    }
}

class Tamagotchi extends Newpet {
    constructor(name, hunger, sleepiness, boredom, age) {
        super(name, hunger, sleepiness, boredom, age)
        this.name = name;
        this.hunger = 0;
        this.sleepiness = 0;
        this. boredom = 0;
        this. age = 0;
    }
    feedTama(){
        this.hunger -= 1;
        this.sleepiness += 1;
    }
    boredTama(){
        this.boredom -=2;
        this.sleepiness +=2;
        this.hunger++;
    }
    sleepTama(){
        this.sleepiness--;
        this.boredom++;
    }

}

const tama = new Tamagotchi("", 0, 0, 0, 0)

const hungerLevel = document.querySelector('#hunger')
const boredomLevel = document.querySelector('#boredom')
const sleepyLevel = document.querySelector('#sleepiness')
const startButton = document.querySelector('#Start')
const feedButton = document.querySelector('#Feed')
const playButton = document.querySelector('#Play')
const lightButton = document.querySelector('#Lights')

tamaAge=() => {
    const intervalID = setInterval(() => {
    const tamaAge = document.querySelector('#agecounter')
    tamaAge.innerHTML = `Age: ${tama.age}`
    tama.age++

    if(tama.age == 1){
        alert(tama.name + " is fixing to hatch!")
        document.querySelector('#tamaImg').src="https://img.itch.zone/aW1hZ2UvODE2MTk0LzQ1OTgzNDMuZ2lm/original/KV3fcg.gif"
        alert(tama.name + " is now a child!")
    }
    if(tama.age == 3){
        alert(tama.name + " is fixing to evolve!")
        document.querySelector('#tamaImg').src="https://www.icegif.com/wp-content/uploads/2022/02/icegif-942.gif"
    }

}, 10000)
    }
tamaAge()    

tamaHunger=() => {
const intervalID = setInterval(() => {
    const hungryTamaID = document.querySelector('#hunger')
    // console.log(hungryTamaID)
    tama.hunger= parseInt(tama.hunger) + 1
    hungryTamaID.value = tama.hunger
    // console.log(tama.hunger)

    if(tama.hunger > 10){
        alert("Oh no! " + tama.name + " died from starvation :( !")
        clearInterval(intervalID)
        return
    }
}, 3000)
}
tamaHunger()

tamaBoredom=() => {
    const intervalID = setInterval(() => {
        const boredTamaID = document.querySelector('#boredom')
        tama.boredom= parseInt(tama.boredom) + 1
        boredTamaID.value = tama.boredom
    
        if(tama.boredom > 10){
            alert("Oh no! " + tama.name + " died from lack of attention :( !")
            clearInterval(intervalID)
            return
        }
    }, 8000)
    }
    tamaBoredom()

    tamaSleepiness=() => {
        const intervalID = setInterval(() => {
            const sleepyTamaID = document.querySelector('#sleepiness')
            tama.sleepiness= parseInt(tama.sleepiness) + 2
            sleepyTamaID.value = tama.sleepiness
        
            if(tama.sleepiness > 10){
                alert("Oh no! " + tama.name + " died from lack of sleep :( !")
                clearInterval(intervalID)
                return
            }
        }, 6000)
        }
        tamaSleepiness()
    
