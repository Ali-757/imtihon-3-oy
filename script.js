let inputOshpaz = document.querySelector("#input-oshpaz");
let inputNomi = document.querySelector("#input-nomi");
let inputNarxi = document.querySelector("#input-narxi");
let inputLink = document.querySelector("#input-link");
let restoran = document.querySelector("#restoran");
let forma = document.querySelector("#forma");
let site = document.querySelector("#jstext-box");

forma.addEventListener("submit", (e) => {
    e.preventDefault();
    let boxJs = document.createElement("div");
    boxJs.classList.add("boxs");
    site.appendChild (boxJs);
    let boxses = document.createElement("div");
    boxses.classList.add("boxses");
    let btnn = document.createElement("div");
    btnn.classList.add("btn-btn")
    let boxsesLeft = document.createElement("div");
    let imgImg = document.createElement("img");
    imgImg.classList.add("img");
    let nomi = document.createElement("p");
    let narxi = document.createElement("p");
    let oshpaz = document.createElement("p");
    let res = document.createElement("p");
    let link = inputLink.value;
    imgImg.src = link;
    let oqatNomi = inputNomi.value;
    let oqatNarxi = inputNarxi.value;
    let oqatOshpaz = inputOshpaz.value;
    let oqatRes = restoran.value;
    nomi.textContent = 'Taom nomi:' + "  " + oqatNomi; 
    narxi.innerHTML = 'Taom narxi:' + "  " + oqatNarxi;
    oshpaz.innerHTML = 'Taom oshpazi:' + "  " + oqatOshpaz;
    res.innerHTML = 'Taom restorani:' + "  " + oqatRes;

    let btnDe = document.createElement("button");
    let btnDate = document.createElement("button");
    let btnDone = document.createElement("button");
    btnDe.classList.add ("de")
    btnDate.classList.add ("da")
    btnDone.classList.add ("dn")

    let soat = new Date().getHours();
    let min = new Date().getMinutes();
    
    btnDe.textContent = "Delet"
    btnDate.textContent = soat + ":" + min;
    btnDone.textContent = "Done"

    btnDe.addEventListener("click", () => {
        boxJs.style.display = "none"
    })
    
    btnDone.addEventListener("click", () => {
        boxJs.style.backgroundColor = "greenyellow";
    })
    btnn.appendChild(btnDate)
    btnn.appendChild(btnDe)
    btnn.appendChild(btnDone)
    boxJs.appendChild(btnn)
    boxJs.appendChild(imgImg)
    boxJs.appendChild(boxses);
    boxJs.appendChild(boxsesLeft);
    boxses.appendChild(nomi)
    boxses.appendChild(narxi)
    boxses.appendChild(oshpaz)
    boxses.appendChild(res)
    boxJs.appendChild(btnDe)
    boxJs.appendChild(btnDate)
    boxJs.appendChild(btnDone)
})
