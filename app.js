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
        this.boredom = 0;
        this.age = 0;
    }
    feedTama() {
        this.hunger -= 2;
        this.sleepiness += 1;
    }
    boredTama() {
        this.boredom -= 2;
        this.sleepiness += 1;
        this.hunger += 1;
    }
    sleepTama() {
        this.sleepiness -= 2;
    }

}

const tama = new Tamagotchi("", 0, 0, 0, 0)

const hungerLevel = document.querySelector('#hunger')
const boredomLevel = document.querySelector('#boredom')
const sleepyLevel = document.querySelector('#sleepiness')
const startButton = document.querySelector('#start')
const feedButton = document.querySelector('#feed')
const playButton = document.querySelector('#play')
const lightButton = document.querySelector('#lights')

const gameObject = {
    createName() {
        tama.name = prompt("Give your Tamagotchi a name!")
        const nameID = document.querySelector('#tamaName')
        nameID.innerText = `Name: ${tama.name}`
        alert("The game has started! Keep " + tama.name + " alive for as long as possbile to watch them evolve!")
    },

    tamaAge() {
        const intervalID = setInterval(() => {
            const tamaAge = document.querySelector('#agecounter')
            tamaAge.innerHTML = `Age: ${tama.age}`
            tama.age++

            if (tama.age == 1) {
                alert(tama.name + " is fixing to hatch!")
                document.querySelector('#tamaImg').src = "https://img.itch.zone/aW1hZ2UvODE2MTk0LzQ1OTgzNDMuZ2lm/original/KV3fcg.gif"
                alert(tama.name + " is now born!")
            }
            if (tama.age == 2) {
                alert(tama.name + " is fixing to evolve!")
                document.querySelector('#tamaImg').src = "https://www.icegif.com/wp-content/uploads/2022/02/icegif-942.gif"
            }

        }, 30000)
    },
    // tamaAge()    

    tamaHunger() {
        const intervalID = setInterval(() => {
            const hungryTamaID = document.querySelector('#hunger')
            // console.log(hungryTamaID)
            tama.hunger = parseInt(tama.hunger) + 1
            hungryTamaID.value = tama.hunger
            // console.log(tama.hunger)

            if (tama.hunger > 10) {
                alert("Oh no! " + tama.name + " died from starvation :( !")
                clearInterval(intervalID)
                return
            }
        }, 10000)
        feedButton.addEventListener("click", () =>{
            tama.feedTama()
            document.body.src ="https://spencer2124.files.wordpress.com/2014/06/background.png"
        })
    },
    // tamaHunger()

    tamaBoredom() {
        const intervalID = setInterval(() => {
            const boredTamaID = document.querySelector('#boredom')
            tama.boredom = parseInt(tama.boredom) + 1
            boredTamaID.value = tama.boredom

            if (tama.boredom > 10) {
                alert("Oh no! " + tama.name + " died from lack of attention :( !")
                clearInterval(intervalID)
                return
            }
        }, 8000)
        playButton.addEventListener("click", () =>{
            tama.boredTama()
        })
    },
    // tamaBoredom()

    tamaSleepiness() {
        const intervalID = setInterval(() => {
            const sleepyTamaID = document.querySelector('#sleepiness')
            tama.sleepiness = parseInt(tama.sleepiness) + 2
            sleepyTamaID.value = tama.sleepiness

            if (tama.sleepiness > 10) {
                alert("Oh no! " + tama.name + " died from lack of sleep :( !")
                clearInterval(intervalID)
                return
            }
        }, 12000)
        lightButton.addEventListener("click", () => {
            tama.sleepTama()
        })
    },
    // tamaSleepiness()

    playGame() {
        gameObject.createName()
        gameObject.tamaAge()
        gameObject.tamaHunger()
        gameObject.tamaBoredom()
        gameObject.tamaSleepiness()
    }
}

startButton.addEventListener('click', (event) => {
    event.target.disabled = true
    gameObject.playGame()
})

