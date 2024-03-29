const animals = ["Frog","Flamingo","Rabbit","Cricket","Tiger"]

let animalDetails = {
    "Frog": "LAME!!! frog is so lame and disgusting 🤮 :(",
    "Flamingo": "your soul is beautiful just like a Flamingo 😍",
    "Rabbit": "Clever, rabbit is very clever and fast! ⚡",
    "Cricket": "you're annoying, just like a noisy cricket 😒", "Tiger": "Brave! but tiger is kind of psychopath 🐯 haha"
}

let animalFound = 0;

let firstClick = true;

function getAnimals() {
    // bikin random index
    const random = Math.floor(Math.random() * animals.length);
    // ambil item dari random index
    const randomAnimals = animals[random];
    // alert random animal
    Swal.fire("Your Spirit Animal is " + randomAnimals);
    // animal details di html
    let animalDetailsDiv = document.getElementById("animalDetails");
    animalDetailsDiv.textContent = animalDetails[randomAnimals]
    // animal counter
    animalFound++;
    let animalCounter = document.getElementById("animalCounter")
    // penjelasan animal counter di html
    if (firstClick) {
        animalCounter.textContent = "okay, your animal is " + randomAnimals + ", you should take it for the rest of your life!";
        firstClick = false;
    } else {
        animalCounter.textContent = "seems you don't like your first soulmate 😔 you've change your spirit animal for " + (animalFound-1) + " time(s)"
    }
}