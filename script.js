const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    let div = document.createElement("div");
    container.appendChild(div);
    for (let j = 0; j < 16; j++) {
        let div2 = document.createElement("div");
        div.appendChild(div2);
    }
}

