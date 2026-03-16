// 1. Chemistry Facts Array
const facts = [
    "Water expands when it freezes, unlike most substances! ❄️",
    "A teaspoonful of a neutron star would weigh 6 billion tons! 🌌",
    "The human body contains enough carbon to provide lead for 9,000 pencils! ✏️",
    "Helium is the only element that cannot be solidified by sufficient cooling at normal atmospheric pressure! 🎈"
];

function generateFact() {
    const factDisplay = document.getElementById('fact-display');
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factDisplay.textContent = randomFact;
}

// 2. Project Log Data
const myWork = [
    { title: "Acid-Base Sim", desc: "A colorful pH scale calculator." },
    { title: "Periodic Pop", desc: "A game to memorize elements." },
    { title: "FCIS Map", desc: "Finding the best snacks at school." }
];

const grid = document.getElementById('project-grid');
myWork.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
    grid.appendChild(card);
});

// 3. File Upload (Cute version)
function uploadFile() {
    const input = document.getElementById('fileInput');
    const list = document.getElementById('fileList');
    if(input.files[0]) {
        const li = document.createElement('li');
        li.textContent = `🫧 Added to Lab: ${input.files[0].name}`;
        list.appendChild(li);
        input.value = "";
    }
}

// 4. Element Catcher Game
let score = 0;
function scorePoint() {
    score++;
    document.getElementById('score-val').textContent = score;
    const target = document.getElementById('game-target');
    
    // Jump randomly within the container
    const x = (Math.random() - 0.5) * 250;
    const y = (Math.random() - 0.5) * 250;
    target.style.transform = `translate(${x}px, ${y}px) scale(${1 + Math.random()})`;
}
