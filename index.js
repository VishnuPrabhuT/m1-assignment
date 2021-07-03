(function () {
    let animals = window.base;

    let petsContainer = document.querySelector(".pets-container");
    animals = animals.filter(animal => Boolean(animal["primary_photo_cropped"]));
    animals.splice(10, 30);

    animals.forEach(animal => {
        let cardDiv = document.createElement("div");
        let keys = ["id", "name", "gender", "coat", "age", "type", "status"];

        let imgDiv = document.createElement("div");
        let detailsDiv = document.createElement("div");
        let img = document.createElement("img");
        let ul = document.createElement("ul");

        cardDiv.classList.add("card");
        imgDiv.classList.add("pet-image");
        detailsDiv.classList.add("pet-details");

        for (let i = 0; i < keys.length; i++) {
            let li = document.createElement("li");
            li.innerText = animal[keys[i]];
            ul.appendChild(li);
        }

        if (animal["primary_photo_cropped"]) {
            // img.src = animal["primary_photo_cropped"].small;
            img.src = `images\\${animal["id"]}.jpeg`;
            img.height = "100";
            img.alt = animal["name"];
        }
        else {
            img.alt = "* Image not available *"
        }

        imgDiv.appendChild(img)
        detailsDiv.appendChild(ul);
        cardDiv.appendChild(imgDiv);
        cardDiv.appendChild(detailsDiv);
        petsContainer.appendChild(cardDiv)

    });
})();