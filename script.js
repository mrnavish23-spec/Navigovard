const text = `
Govardini ❤️,
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
        setTimeout(typeEffect, 45);
    }
}
typeEffect();

function showProposal() {
    document.getElementById("proposal").style.display = "block";
}

function yesLove() {
    document.getElementById("proposal").style.display = "none";
    document.getElementById("final").style.display = "block";
}

function moveNo() {
    const btn = document.querySelector(".no");
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 70 + "%";
    btn.style.top = Math.random() * 70 + "%";
}
