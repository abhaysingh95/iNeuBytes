const btn1El = document.getElementById("btn1");
const btn2El = document.getElementById("btn2");
const btn3El = document.getElementById("btn3");
const btn4El = document.getElementById("btn4");
const btn5El = document.getElementById("btn5");
const jokeEl = document.getElementById("joke")
const apiKey = "YhgHDPwgcVkt7o0wTyM+rA==gYSWyxw91fYnQAtS";
const options = {
    method: "GET",
    headers: {
        "X-Api-key": apiKey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";
async function getJoke(){ 
    const response = await fetch(apiURL, options);
    const data =await response.json();
    btn1El.disabled = false;
    btn1El.innerText = "Anecdotal"
    jokeEl.innerText = data[0].joke;
}
btn1El.addEventListener("click", getJoke);
async function getJoke(){  
    const response = await fetch(apiURL, options);
    const data =await response.json();
    btn2El.disabled = false;
    btn2El.innerText = "One-liner"
    jokeEl.innerText = data[0].joke;
}
btn2El.addEventListener("click", getJoke);
async function getJoke(){
    const response = await fetch(apiURL, options);
    const data =await response.json();
    btn3El.disabled = false;
    btn3El.innerText = "Deadpan"
    jokeEl.innerText = data[0].joke;
}
btn3El.addEventListener("click", getJoke);
async function getJoke(){ 
    const response = await fetch(apiURL, options);
    const data =await response.json();
    btn4El.disabled = false;
    btn4El.innerText = "Farcical"
    jokeEl.innerText = data[0].joke;
}
btn4El.addEventListener("click", getJoke);
async function getJoke(){
    jokeEl.innerText = "Searching..."
    const response = await fetch(apiURL, options);
    const data =await response.json();
    btn5El.disabled = false;
    btn5El.innerText = "Slapstick"
    jokeEl.innerText = data[0].joke;
}
btn5El.addEventListener("click", getJoke);
