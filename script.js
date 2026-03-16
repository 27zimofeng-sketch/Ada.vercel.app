// 1. Ada's Projects
const projects = [
    { title: "Molecule Viewer", desc: "A 3D visualization of chemical bonds." },
    { title: "Lab Timer", desc: "A countdown tool for chemistry experiments." },
    { title: "Forest City Guide", desc: "An interactive map of our school campus." }
];

const list = document.getElementById('project-list');
projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
    list.appendChild(card);
});

// 2. Upload Logic
function uploadFile() {
    const input = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    if (input.files.length > 0) {
        const li = document.createElement('li');
        li.textContent = `✨ Stored: ${input.files[0].name}`;
        fileList.appendChild(li);
        input.value = "";
    }
}

// 3. Mini Game with High Score
let score = 0;
let highScore = localStorage.getItem('adaScore') || 0;
document.getElementById('high-score').textContent = highScore;

function scorePoint() {
    score++;
    const target = document.getElementById('game-target');
    target.textContent = score;
    
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('adaScore', highScore);
        document.getElementById('high-score').textContent = highScore;
    }
    
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 300;
    target.style.transform = `translate(${x}px, ${y}px)`;
}
