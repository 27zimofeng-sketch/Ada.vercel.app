// 1. Dynamic Lab Inventory
const labItems = [
    { name: "Titration Tool", icon: "🧪", color: "#FFB7B2" },
    { name: "FCIS Map UI", icon: "🏫", color: "#B2E2F2" },
    { name: "Particle Sim", icon: "⚛️", color: "#B2F2BB" }
];

const grid = document.getElementById('project-grid');
labItems.forEach(item => {
    const el = document.createElement('div');
    el.className = 'project-card glass';
    el.innerHTML = `
        <div style="font-size: 2rem;">${item.icon}</div>
        <h3>${item.name}</h3>
        <p>A specialized digital solution for modern chemistry students.</p>
    `;
    grid.appendChild(el);
});

// 2. Resource Management
function uploadFile() {
    const input = document.getElementById('fileInput');
    const container = document.getElementById('fileList');
    if(input.files[0]) {
        const tag = document.createElement('span');
        tag.className = 'file-tag';
        tag.style.cssText = "background: #eef; padding: 5px 15px; border-radius: 20px; margin: 5px; display: inline-block;";
        tag.textContent = `📎 ${input.files[0].name}`;
        container.appendChild(tag);
    }
}

// 3. Mini-Game Logic
let score = 0;
let best = localStorage.getItem('adaBest') || 0;
document.getElementById('best-score').textContent = best;

function hit() {
    score++;
    document.getElementById('current-score').textContent = score;
    
    if(score > best) {
        best = score;
        localStorage.setItem('adaBest', best);
        document.getElementById('best-score').textContent = best;
    }

    const target = document.getElementById('target');
    const board = document.getElementById('board');
    
    // Calculate safe boundaries
    const maxX = board.clientWidth - 50;
    const maxY = board.clientHeight - 50;
    
    target.style.left = Math.random() * maxX + 'px';
    target.style.top = Math.random() * maxY + 'px';
    
    // Add a little pop effect
    target.style.transform = "scale(1.5)";
    setTimeout(() => target.style.transform = "scale(1)", 100);
}
