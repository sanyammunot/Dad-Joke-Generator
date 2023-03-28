const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "AKxYWJiE0Yi4g+q+7FiRDg==ztSwODRcB5hE8k56";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjoke() {
    try {
        jokeEl.innerHTML = "Updating...";
        btnEl.disabled = true;
        btnEl.innerHTML = "Loading...";
        const response = await fetch(apiURL,options);
        const data = await response.json();
        jokeEl.innerHTML = data[0].joke;

        btnEl.disabled = false;
        btnEl.innerHTML = "Tell me a joke";
    } catch (error) {
        jokeEl.innerHTML = "An Error happened. Try again later";
        btnEl.disabled = false;
        btnEl.innerHTML = "Tell me a joke";
        console.log(error);
    }
    
}

btnEl.addEventListener("click", getjoke);