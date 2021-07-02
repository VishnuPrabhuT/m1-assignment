(async function () {
    // const API_KEY = "mVFRYV9P45fk99Kel4vRiLlsAweHBBd648Z9Z48TsIfsdmq59S";
    // const SECRET_KEY = "xUCJ0nTGcwhDbAta37l2ObtZCblUdc0YuthVdHgC";
    // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtVkZSWVY5UDQ1Zms5OUtlbDR2UmlMbHNBd2VIQkJkNjQ4WjlaNDhUc0lmc2RtcTU5UyIsImp0aSI6IjJmMGVhNmMxMzdjOGQ0ZDk5ODQ1MzYzYmQwMDc5MmJkNTNiMjJmOTVmMzZiNTcyZTVlYmFlZTY2MjQzZWE5ZTUxY2I0MWM1ZDc2MDkyZDQ3IiwiaWF0IjoxNjI1MjQ1NzAzLCJuYmYiOjE2MjUyNDU3MDMsImV4cCI6MTYyNTI0OTMwMywic3ViIjoiIiwic2NvcGVzIjpbXX0.Nh4v8eKHMMMOZJcAsPRHovRPOn5eMWeW9RNNuTTC2R06kcO_5HHlYjbgOQcvvMvCitZQ-QTOGwQLpudEsW_fzh21nrVqWKkynw3_SH9kcc8KxQOOwI790iBb9ZGYKoHSZyY10TF-L-8i185VJsLDA_ZjWiF1Q4eQtPNgfE7n8rv9hjoseYpeMoorX_4tJ3f8Vnwzn3FSq_Hf3WRMF-8hw7g5ivbdU6uYOfSXTLRF_JnoYVTNqLPH_J_cK9NayGGemJYjSYgWvtg6y2H7UFBX4n91NdZvsnx33wkAwt1XvkqZQLh-I2C0OZs9NOJucugXc5zHZ0zMqA840FfX2n3Tqg";


    // let authURL = `https://api.petfinder.com/v2/oauth2/token?grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET_KEY}`
    // let animalsURL = "https://api.petfinder.com/v2/animals?limit=100";

    // let res = await fetch(animalsURL, {
    //     'headers': {
    //         'Authorization': `Bearer ${token}`
    //     }
    // });
    // let animals = [];
    // let data = await res.json();
    // animals = data.animals;
    let animals = window.base;
    //console.log(animals);


    let tbody = document.querySelector('tbody');
    animals = animals.filter(animal => Boolean(animal["primary_photo_cropped"]));
    animals.splice(10, 30);

    animals.forEach(animal => {
        let tr = document.createElement("tr");
        let keys = ["id", "name", "gender", "coat", "age", "type", "status"];

        for (let i = 0; i < keys.length; i++) {
            let td = document.createElement("td");
            td.innerText = animal[keys[i]];
            tr.appendChild(td);
        }
        let td = document.createElement("td");
        let img = document.createElement("img");
        if (animal["primary_photo_cropped"]) {
            img.src = animal["primary_photo_cropped"].small;
            img.height = "100";
            img.alt = animal["name"];
        }
        else {
            img.alt = "* Image not available *"
        }
        td.appendChild(img);
        tr.appendChild(td);

        td = document.createElement("td");
        let a = document.createElement("a")
        a.href = animal["url"];
        a.innerText = "View Profile";
        td.appendChild(a);
        tr.appendChild(td);

        tbody.appendChild(tr)
    });
})();

