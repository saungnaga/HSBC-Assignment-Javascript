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
    // Generate a random index within the range of the array length
    const random = Math.floor(Math.random() * animals.length);
    // Get the item at the random index
    const randomAnimals = animals[random];
    // Show the random item in an alert
    Swal.fire("Your Lucky Animal is " + randomAnimals);
    // get animal details
    let animalDetailsDiv = document.getElementById("animalDetails");
    animalDetailsDiv.textContent = animalDetails[randomAnimals]
    //animal counter
    animalFound++;
    let animalCounter = document.getElementById("animalCounter")
    
    if (firstClick) {
        animalCounter.textContent = "okay, your animal is " + randomAnimals + ", you should take it for the rest of your life!";
        firstClick = false;
    } else {
        animalCounter.textContent = "seems you don't like your first soulmate 😔 you've change your soul animal for " + (animalFound-1) + " time(s)"
    }
}