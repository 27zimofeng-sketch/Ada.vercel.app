// 1. Chemistry Facts Generator
const facts = [
    "A teaspoon of a neutron star would weigh 6 billion tons! 🌌",
    "Gallium is a metal that melts in your hand! 🫠",
    "Dynamic Equilibrium: When reactions go both ways at once! ⚖️",
    "Ada's Code + Chemistry = Maximum Energy! 🔥"
];

function newFact() {
    const display = document.getElementById('fact-display');
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    display.textContent = randomFact;
}

// 2. Project List
const myWork = [
    { name: "pH Calculator", icon: "🧪" },
    { name: "Molecule Builder", icon: "💎" },
    { name: "Forest City Portal", icon: "🏫" }
];

const projectGrid = document.getElementById('project-list');
myWork.forEach(work => {
    const item = document.createElement('div');
    item.className = 'glass-card';
    item.style.textAlign = 'center';
    item.innerHTML = `<h1>${work.icon}</h1><h3>${work.name}</h3>`;
    projectGrid.appendChild(item);
});

// 3. The Bubble Game
let score = 0;
let high = localStorage.getItem('adaBest') || 0;
document.getElementById('high-score').textContent = high;

function scorePoint() {
    score++;
    document.getElementById('current-score').textContent = score;
    
    if(score > high) {
        high = score;
        localStorage.setItem('adaBest', high);
        document.getElementById('high-score').textContent = high;
    }

    const target = document.getElementById('game-target');
    const x = (Math.random() - 0.5) * 250;
    const y = (Math.random() - 0.5) * 250;
    target.style.transform = `translate(${x}px, ${y}px) scale(${1 - score*0.01})`;
    
    // Changing emojis as you get higher score!
    if(score > 10) target.textContent = "🧪";
    if(score > 20) target.textContent = "💥";
}

// 4. Simple Upload Message
function uploadFile() {
    const input = document.getElementById('fileInput');
    if(input.files[0]) {
        const li = document.createElement('li');
        li.textContent = `📎 ${input.files[0].name} synthesized!`;
        document.getElementById('fileList').appendChild(li);
    }
}
