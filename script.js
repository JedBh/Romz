function init_lines(amount) {
    for (let i = 0; i < amount; i++) {
        let div = document.createElement("div");
        let body = document.querySelector("body");
        div.classList.add("box");

        div.style.backgroundColor = genRandomColor();
        
        
        body.appendChild(div);
    }
}

function gradeGermany(hue) {
    if (hue <= 255) {
        return `rgb(${hue}, 0, 0)`;
    }
    else {
        return `rgb(255, ${hue - 255}, 0)`;
    }
}

function genRandomColor() {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

// init_lines(510);