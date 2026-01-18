const JUNIORS = [
    {
        id: "A", title: "Acad-Centered / DepC Fanatics", emoji: "📚",
        desc: "Library-LHC-room triangle. DepC or bust.",
        tokens: ["grade", "cg", "depc", "cutoff", "fakka", "satti", "bsw", "pyq", "quiz", "rank", "sir", "mam", "submission", "deadline", "gpa", "score", "assignment", "tutorial", "lab", "viva"],
        stats: { Focus: 9, Social: 3, Sleep: 4, Ambition: 10, Flexibility: 2 },
        pair: "Machau MOFOs",
        habits: "Asks 'Is this evaluated?' for everything.",
        defect: "Thinks 9.0 is a 'bad' CG."
    },
    {
        id: "B", title: "Relaxed 'Ho Jayega' Types", emoji: "😎",
        desc: "Chill hai, ho jayega. JEE fatigue victims.",
        tokens: ["chill", "ho jayega", "easy", "scene", "load", "mat le", "sone de", "badme", "dekhenge", "pass", "light", "max", "sleep"],
        stats: { Focus: 3, Social: 8, Sleep: 10, Ambition: 4, Flexibility: 9 },
        pair: "Jugaadu Jokers",
        habits: "Starts studying 2 hours before the minor.",
        defect: "Sometimes it does NOT 'ho jayega'."
    },
    {
        id: "C", title: "Bluffmasters / Politicians", emoji: "🤥",
        desc: "Sab ho gaya even when nothing started.",
        tokens: ["done", "ho gaya", "easy pizy", "sorted", "lite", "trust me", "handled", "brother", "bhai", "setting", "manage"],
        stats: { Focus: 5, Social: 9, Sleep: 7, Ambition: 8, Flexibility: 8 },
        pair: "PORstars",
        habits: "Claims to know every prof personally.",
        defect: "Source: 'Trust me bro'."
    },
    {
        id: "D", title: "Couples", emoji: "👩‍❤️‍👨",
        desc: "Campus as relationship RPG map. They exist in a parallel dimension.",
        tokens: ["baby", "love", "meet", "wind t", "lhc top", "walk", "dinner", "cute", "<3", "miss u", "call", "babe", "darling"],
        stats: { Focus: 4, Social: 2, Sleep: 6, Ambition: 5, Flexibility: 5 },
        pair: "Hopeful Romantics",
        habits: "Uses plural 'We' for individual decisions.",
        defect: "Disappears from the group for months."
    },
    {
        id: "E", title: "Boastful Bustards", emoji: "🗣️",
        desc: "JEE Peaked. Still narrating test series meta. AIR is Aadhaar.",
        tokens: ["jee", "air", "rank", "adv", "mains", "fiitjee", "allen", "coaching", "iitb", "percentile", "physics", "maths"],
        stats: { Focus: 6, Social: 4, Sleep: 6, Ambition: 7, Flexibility: 3 },
        pair: "Acad-Centered",
        habits: "Introduces themselves with their AIR.",
        defect: "Thumb stuck in 2024."
    },
    {
        id: "F", title: "Doing-Nothing DIVAs", emoji: "💅",
        desc: "Kuch bhi karenge, bas acads nahi. Aesthetic > Assignment.",
        tokens: ["boring", "paka mat", "photo", "insta", "reel", "vibe", "aesthetic", "dress", "party", "club", "ootd", "pose"],
        stats: { Focus: 2, Social: 9, Sleep: 8, Ambition: 6, Flexibility: 7 },
        pair: "The Traveler",
        habits: "Has 10k followers but 0 assignments submitted.",
        defect: "Allergic to PDFs."
    },
    {
        id: "G", title: "Jugaadu Jokers", emoji: "🃏",
        desc: "Shortcut engine + chaos comedian. Finds the weirdest solutions.",
        tokens: ["hack", "trick", "jugaad", "bypass", "loophole", "funny", "lol", "lmao", "ded", "meme", "sticker", "xd", "rofl"],
        stats: { Focus: 5, Social: 10, Sleep: 5, Ambition: 7, Flexibility: 10 },
        pair: "Weirdness Dumpers",
        habits: "Solves problems by creating bigger problems.",
        defect: "Cannot be serious for more than 5 seconds."
    },
    {
        id: "H", title: "Machau MOFOs", emoji: "💼",
        desc: "Walking LinkedIn offline. High CG + clubs + comps. They do it all.",
        tokens: ["intern", "cv", "resume", "project", "comp", "hackathon", "win", "selected", "team", "lead", "prof", "research", "gs"],
        stats: { Focus: 10, Social: 8, Sleep: 2, Ambition: 10, Flexibility: 8 },
        pair: "Inventors & Innovators",
        habits: "Schedules 'fun' in their Google Calendar.",
        defect: "Has forgotten what sleep feels like."
    },
    {
        id: "I", title: "Isolated Introverts", emoji: "😶",
        desc: "Quiet, observant, selectively social. The silent observer.",
        tokens: ["...", "nvm", "busy", "offline", "leave it", "silent", "lurking"],
        stats: { Focus: 8, Social: 2, Sleep: 7, Ambition: 6, Flexibility: 4 },
        pair: "Tea Pot",
        habits: "Left the group but reads every message.",
        defect: "Invisible until the group project is due."
    },
    {
        id: "J", title: "Ghar Paglus", emoji: "🏠",
        desc: "One foot in home, one in hostel. Need mom's food ASAP.",
        tokens: ["ghar", "home", "mom", "dad", "mummy", "papa", "call", "ticket", "vacation", "miss", "food", "train", "flight", "booking"],
        stats: { Focus: 6, Social: 4, Sleep: 8, Ambition: 5, Flexibility: 3 },
        pair: "Safe Haven Samaritans",
        habits: "Video calls parents in the common room.",
        defect: "Counts days until the next long weekend."
    },
    {
        id: "K", title: "Weirdness Dumpers", emoji: "🤪",
        desc: "Meme incarnate. Chaos runs deep. Sends things no one understands.",
        tokens: ["cursed", "random", "shitpost", "bruh", "skull", "sus", "amogus", "uwu", "context??", "wtf", "cringe"],
        stats: { Focus: 3, Social: 7, Sleep: 4, Ambition: 4, Flexibility: 10 },
        pair: "Jugaadu Jokers",
        habits: "Communication is 90% stickers.",
        defect: "Scares the freshers."
    },
    {
        id: "L", title: "Tea Pot", emoji: "☕",
        desc: "Mobile Chaayos. Community hub. Solves life problems over chai.",
        tokens: ["chai", "sutta", "nesci", "dhaba", "chalo", "baithte", "discuss", "life", "talk", "night canteen", "tapri"],
        stats: { Focus: 5, Social: 10, Sleep: 6, Ambition: 5, Flexibility: 8 },
        pair: "Sant Mahashay",
        habits: "Knows everyone's secrets except their own.",
        defect: "Caffeine addiction is a personality trait."
    },
    {
        id: "M", title: "Overly Optimistic", emoji: "✨",
        desc: "Every week is 'new arc' week. Unbreakable spirit.",
        tokens: ["yay", "great", "awesome", "fun", "excited", "happy", "best", "let's go", "woo", "positivity", "amazing"],
        stats: { Focus: 7, Social: 9, Sleep: 7, Ambition: 8, Flexibility: 9 },
        pair: "Dandelion Deities",
        habits: "Uses too many exclamation marks!!!!",
        defect: "Refuses to acknowledge impending doom."
    },
    {
        id: "N", title: "Mujhe Ghar Jaana Hai", emoji: "😭",
        desc: "Homesick main character. The tragedy is real.",
        tokens: ["hate", "bekar", "ganda", "sick", "home", "wapas", "why", "cry", "sad", "udhaas", "mood off"],
        stats: { Focus: 4, Social: 3, Sleep: 5, Ambition: 3, Flexibility: 2 },
        pair: "Safe Haven Samaritans",
        habits: "Crying is a hobby.",
        defect: "Brings the vibe down instantly."
    },
    {
        id: "O", title: "The Traveler", emoji: "🌏",
        desc: "Campus + Delhi + NCR as exploration game. Never in room.",
        tokens: ["trip", "plan", "goa", "manali", "trek", "ride", "metro", "cp", "hauz khas", "mall", "explore", " পাহাড়"],
        stats: { Focus: 4, Social: 9, Sleep: 6, Ambition: 6, Flexibility: 9 },
        pair: "Doing-Nothing DIVAs",
        habits: "More photos of CP than lectures.",
        defect: "Is never actually on campus."
    },
    {
        id: "P", title: "Premature Senior", emoji: "👴",
        desc: "3rd-year soul in freshie body. 'Back in my day' vibe.",
        tokens: ["kids", "freshies", "grow up", "mature", "logic", "immature", "experience", "advice", "listen", "bachche"],
        stats: { Focus: 8, Social: 5, Sleep: 6, Ambition: 9, Flexibility: 4 },
        pair: "PORstars",
        habits: "Calls batchmates 'kids'.",
        defect: "Forgot to have a childhood."
    },
    {
        id: "Q", title: "Dandelion Deities", emoji: "🌬️",
        desc: "Carried by winds of friends. No directionality. Just vibing.",
        tokens: ["ok", "sure", "jis", "anything", "whatever", "jaisa", "tum", "bolo", "waise", "hmm"],
        stats: { Focus: 3, Social: 10, Sleep: 8, Ambition: 2, Flexibility: 10 },
        pair: "Overly Optimistic",
        habits: "Has no opinion on where to eat.",
        defect: "Accidentally ends up in a cult."
    },
    {
        id: "R", title: "Hopeful Romantics", emoji: "💌",
        desc: "Rom-com narrator of own IITD story. Looking for 'The One'.",
        tokens: ["crush", "date", "rose", "val", "partner", "single", "mingle", "romantic", "dream", "propose"],
        stats: { Focus: 5, Social: 7, Sleep: 6, Ambition: 5, Flexibility: 7 },
        pair: "Couples",
        habits: "Writes poetry in the back of notebooks.",
        defect: "Projects fantasies onto strangers."
    }
];

const SENIORS = [
    {
        id: "S-A", title: "Gyaan Deliverers", emoji: "🎓",
        desc: "Walking TED Talks. OGPA 8+ but advice scores perfect 10.",
        tokens: ["funda", "advice", "career", "path", "guide", "tip", "future", "scope", "focus", "roadmap", "strategy"],
        stats: { Focus: 10, Social: 6, Sleep: 6, Ambition: 9, Flexibility: 5 },
        pair: "Acad-Centered",
        habits: "Starts sentences with 'Dekho, simple hai...'",
        defect: "Unsolicited advice generator."
    },
    {
        id: "S-B", title: "Hostel Homies", emoji: "🏘️",
        desc: "Hostel ? thing, it IS the thing. Representing the block.",
        tokens: ["wing", "block", "hostel", "inter-hostel", "gc", "trophy", "cheer", "team", "fight", "represent", "jersey"],
        stats: { Focus: 6, Social: 10, Sleep: 5, Ambition: 7, Flexibility: 7 },
        pair: "Tea Pot",
        habits: "Bleeds their hostel color.",
        defect: "Hostel rivalry is their personality."
    },
    {
        id: "S-C", title: "Safe Haven Samaritans", emoji: "🫂",
        desc: "Campus parents. OGPA 1.63 but yours will be 9 thanks to them.",
        tokens: ["help", "tum", "main", "kar", "dunga", "don't worry", "pass", "notes", "lelo", "share", "problem", "solution"],
        stats: { Focus: 4, Social: 10, Sleep: 7, Ambition: 5, Flexibility: 9 },
        pair: "Ghar Paglus",
        habits: "Adopts lost freshers.",
        defect: "Forgets to save themselves."
    },
    {
        id: "S-G", title: "PORstars / Poltu Gods", emoji: "🏛️",
        desc: "PORs > CG always. Running the campus from behind the scenes.",
        tokens: ["meeting", "agenda", "budget", "mail", "official", "permission", "dean", "admin", "sac", "caic", "minutes"],
        stats: { Focus: 9, Social: 9, Sleep: 3, Ambition: 10, Flexibility: 6 },
        pair: "Bluffmasters",
        habits: "Checks email more than WhatsApp.",
        defect: "Power hungry."
    },
    {
        id: "S-L", title: "Inventors & Innovators", emoji: "🚀",
        desc: "We do this MY way. DevClub/Robotics core. Building the future.",
        tokens: ["code", "build", "make", "robot", "dev", "tech", "create", "launch", "startup", "idea", "bug", "feature"],
        stats: { Focus: 10, Social: 4, Sleep: 3, Ambition: 10, Flexibility: 8 },
        pair: "Machau MOFOs",
        habits: "Talks in Github commits.",
        defect: "Thinks Python solves human relationships."
    },
    {
        id: "S-O", title: "Sant Mahashay", emoji: "🧘",
        desc: "What are we in this cosmos? BREEATHE. Spiritual leaders.",
        tokens: ["life", "universe", "destiny", "karma", "peace", "calm", "relax", "moh", "maya", "sadhguru", "energy"],
        stats: { Focus: 8, Social: 8, Sleep: 9, Ambition: 3, Flexibility: 10 },
        pair: "Relaxed Types",
        habits: "Meditates during exams.",
        defect: "Too detached from reality."
    }
];

const FULL_ROSTER = [...JUNIORS, ...SENIORS];

let chatData = {};
const localPageCheck = window.location.pathname.includes('archetypes.html');

window.onload = function () {
    initGallery();
    initHandlers();
};

function initGallery() {
    const juniorGrid = document.getElementById('facche-gallery');
    const seniorGrid = document.getElementById('senior-gallery');
    if (!juniorGrid || !seniorGrid) return;

    juniorGrid.innerHTML = '';
    seniorGrid.innerHTML = '';

    const buildCard = (profile) => {
        const wrap = document.createElement('div');
        wrap.className = 'gallery-card';

        wrap.innerHTML = `
            <div class="card-front">
                <span class="gallery-emoji">${profile.emoji}</span>
                <h3>${profile.title}</h3>
                <p class="one-liner">${profile.desc}</p>
            </div>
            <div class="card-details">
                <p><strong>⚡ Habit:</strong> ${profile.habits}</p>
                <p><strong>💀 Flaw:</strong> ${profile.defect}</p>
                <p><strong>❤️ Match:</strong> ${profile.pair}</p>
                <div class="mini-stats">
                    <small>Focus: ${profile.stats.Focus} | Social: ${profile.stats.Social}</small>
                </div>
            </div>
        `;

        wrap.addEventListener('click', () => {
            wrap.classList.add('expanded');
        });

        wrap.addEventListener('mouseleave', () => {
            wrap.classList.remove('expanded');
        });

        return wrap;
    };

    JUNIORS.forEach(j => juniorGrid.appendChild(buildCard(j)));
    SENIORS.forEach(s => seniorGrid.appendChild(buildCard(s)));
}

function initHandlers() {
    const dZone = document.getElementById('drop-zone');
    const fInp = document.getElementById('fileInput');
    const actBtn = document.getElementById('analyze-btn');
    const searchBox = document.getElementById('user-search');

    if (dZone) {
        dZone.addEventListener('dragover', (e) => { e.preventDefault(); dZone.style.transform = 'scale(1.02)'; });
        dZone.addEventListener('dragleave', () => { dZone.style.transform = 'scale(1)'; });
        dZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dZone.style.transform = 'scale(1)';
            if (e.dataTransfer.files.length) processUpload(e.dataTransfer.files[0]);
        });
    }

    if (fInp) {
        fInp.addEventListener('change', () => { if (fInp.files.length) processUpload(fInp.files[0]); });
    }

    if (actBtn) {
        actBtn.addEventListener('click', executeAnalysis);
    }

    if (searchBox) {
        searchBox.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const selEl = document.getElementById('user-select');
            const items = Array.from(selEl.options);

            items.forEach(opt => {
                if (opt.value === "") return;
                const txt = opt.innerText.toLowerCase();
                if (txt.includes(term)) {
                    opt.style.display = '';
                } else {
                    opt.style.display = 'none';
                }
            });
        });
    }
}

function processUpload(fObj) {
    if (!fObj.name.endsWith('.txt')) { alert("Please upload a .txt file (Export from WhatsApp)"); return; }

    const rdr = new FileReader();
    rdr.onload = (e) => parseRawText(e.target.result);
    rdr.readAsText(fObj);
}

function parseRawText(rawTxt) {
    chatData = {};
    const textLines = rawTxt.split('\n');
    const patIOS = /^\[(\d{1,2}\/\d{1,2}\/\d{2,4}),? (.*?)\] (.*?): (.*)/;
    const patDroid = /^(\d{1,2}\/\d{1,2}\/\d{2,4}),? (.*?) - (.*?): (.*)/;

    textLines.forEach(ln => {
        let hit = ln.match(patIOS) || ln.match(patDroid);
        if (hit) {
            const sender = hit[3].trim();
            const content = hit[4].trim();

            if (content.includes("omitted") || content.includes("security code changed") || content.includes("added")) return;

            if (!chatData[sender]) chatData[sender] = { total: 0, corpus: " " };
            chatData[sender].total++;
            chatData[sender].corpus += content.toLowerCase() + " ";
        }
    });

    fillDropdown();
}

function fillDropdown() {
    const pickList = document.getElementById('user-select');
    const container = document.getElementById('user-selection-container');

    if (!pickList) return;

    pickList.innerHTML = '<option value="" disabled selected>Select user...</option>';

    const participants = Object.keys(chatData)
        .filter(u => u.length > 0 && !u.includes("WhatsApp"))
        .sort((a, b) => chatData[b].total - chatData[a].total);

    if (participants.length === 0) {
        alert("No valid users found in chat!");
        return;
    }

    participants.forEach(p => {
        const option = document.createElement('option');
        option.value = p;
        option.innerText = `${p} (${chatData[p].total})`;
        pickList.appendChild(option);
    });

    container.classList.remove('hidden');
}

function executeAnalysis() {
    const selected = document.getElementById('user-select').value;
    if (!selected) { alert("Please select a user!"); return; }

    const userRec = chatData[selected];
    const ranking = FULL_ROSTER.map(t => ({ ...t, points: 0 }));

    ranking.forEach(archetype => {
        archetype.tokens.forEach(tk => {
            const rgx = new RegExp(`\\b${tk}\\b`, 'gi');
            const hits = (userRec.corpus.match(rgx) || []).length;
            archetype.points += hits * 5;
        });

        if (archetype.id === "I" && userRec.total < 30) archetype.points += 50;
        if (archetype.id === "S-G" && userRec.corpus.includes("meeting")) archetype.points += 20;
    });

    ranking.forEach(x => x.points += Math.random());

    ranking.sort((a, b) => b.points - a.points);

    const topPick = ranking[0];
    const runnerUp = ranking[1];

    renderOutcomes(topPick, runnerUp);
}

function renderOutcomes(primary, secondary) {
    const resSec = document.getElementById('results');
    resSec.classList.remove('hidden');
    resSec.scrollIntoView({ behavior: 'smooth' });

    const themeMap = {
        'A': '#34495e', 'B': '#27ae60', 'C': '#f39c12', 'D': '#c0392b',
        'E': '#8e44ad', 'F': '#e84393', 'G': '#d35400', 'H': '#2c3e50',
        'I': '#7f8c8d', 'J': '#e67e22', 'K': '#16a085', 'L': '#c0392b',
        'M': '#f1c40f', 'N': '#2980b9', 'O': '#3498db', 'P': '#8e44ad',
        'Q': '#bdc3c7', 'R': '#ff7979'
    };
    const activeColor = themeMap[primary.id[0]] || '#2c3e50';

    document.body.style.backgroundColor = activeColor;
    document.body.style.backgroundImage = 'none';
    document.body.classList.remove('dark-theme');

    document.getElementById('archetype-name').innerText = primary.title;
    document.getElementById('archetype-art').innerText = primary.emoji;
    document.getElementById('card-title').innerText = primary.title;
    document.getElementById('archetype-desc').innerText = primary.desc;

    document.getElementById('quirks-list').innerHTML = `<li>${primary.habits}</li>`;
    document.getElementById('flaw-text').innerText = primary.defect;
    document.getElementById('compatible-text').innerText = primary.pair;
    document.getElementById('secondary-text').innerText = `${secondary.title}`;

    const statBox = document.querySelector('.card-stats');
    if (statBox) {
        statBox.innerHTML = '';
        Object.entries(primary.stats).forEach(([k, v]) => {
            statBox.innerHTML += `
                <div class="stat-row">
                    <span style="width: 80px; text-align:right;">${k}</span>
                    <div class="stat-bar"><div class="stat-fill" style="width: ${v * 10}%"></div></div>
                </div>
            `;
        });
    }

    if (window.confetti) {
        confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#ffffff', activeColor]
        });
    }
}
