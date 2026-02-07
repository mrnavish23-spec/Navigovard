const text = `
Govardhini ❤️,
From the moment you entered my life,
everything became more beautiful.
You are my smile, my peace,
and my favorite part of every day 💖
— Navish
`;

let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}
typeEffect();

function showProposal() {
    document.getElementById("proposal").classList.remove("hidden");
}

function yesLove() {
    document.getElementById("proposal").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");
}

function moveNo() {
    const btn = document.querySelector(".no");
    const x = Math.random() * 60;
    const y = Math.random() * 60;
    btn.style.position = "absolute";
    btn.style.left = x + "%";
    btn.style.top = y + "%";
}
