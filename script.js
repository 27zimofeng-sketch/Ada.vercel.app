// 1. Profile Photo Update
function updatePhoto() {
    const file = document.getElementById('p-upload').files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('displayPic').src = e.target.result;
    }
    if(file) reader.readAsDataURL(file);
}

// 2. Project Data
const projects = [
    { name: "Portfolio Hub", type: "Web Design" },
    { name: "App Interface", type: "UI/UX" },
    { name: "Script Master", type: "JS Logic" }
];

const grid = document.getElementById('project-grid');
projects.forEach(p => {
    const item = document.createElement('div');
    item.className = 'card';
    item.innerHTML = `<h3>${p.name}</h3><p class="tag">${p.type}</p>`;
    grid.appendChild(item);
});

// 3. Mood Selector
function changeMood() {
    const mood = document.getElementById('moodSelect').value;
    console.log("Ada is currently feeling: " + mood);
}

// 4. Personal Vault Upload
function addToVault() {
    const input = document.getElementById('vaultInput');
    const list = document.getElementById('vaultList');
    if(input.files[0]) {
        const li = document.createElement('li');
        li.textContent = `📁 ${input.files[0].name}`;
        li.style.listStyle = "none";
        li.style.margin = "10px 0";
        list.appendChild(li);
    }
}

// 5. Arcade Game
let score = 0;
let best = localStorage.getItem('adaBest') || 0;
document.getElementById('best').textContent = best;

function catchMe() {
    score++;
    document.getElementById('score').textContent = score;
    
    if(score > best) {
        best = score;
        localStorage.setItem('adaBest', best);
        document.getElementById('best').textContent = best;
    }

    const player = document.getElementById('player');
    const stage = document.getElementById('stage');
    
    const x = Math.random() * (stage.clientWidth - 50);
    const y = Math.random() * (stage.clientHeight - 50);
    
    player.style.left = x + 'px';
    player.style.top = y + 'px';
}
