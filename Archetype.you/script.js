// ---------------------------------------------------------
// DATA: 24 IITD ARCHETYPES (FROM PROBLEM STATEMENT)
// ---------------------------------------------------------
// REFINED KEYWORDS TO AVOID "ISOLATED INTROVERT" TRAP
const FACCHE = [
    {
        id: "A", title: "Acad-Centered / DepC Fanatics", emoji: "📚",
        desc: "Library-LHC-room triangle. DepC or bust.",
        keywords: ["grade", "cg", "depc", "cutoff", "fakka", "satti", "bsw", "pyq", "quiz", "rank", "sir", "mam", "submission", "deadline", "gpa", "score", "assignment", "tutorial", "lab", "viva"],
        statblock: { Focus: 9, Social: 3, Sleep: 4, Ambition: 10, Flexibility: 2 },
        matches: "Machau MOFOs",
        quirk: "Asks 'Is this evaluated?' for everything.",
        flaw: "Thinks 9.0 is a 'bad' CG."
    },
    {
        id: "B", title: "Relaxed 'Ho Jayega' Types", emoji: "😎",
        desc: "Chill hai, ho jayega. JEE fatigue victims.",
        keywords: ["chill", "ho jayega", "easy", "scene", "load", "mat le", "sone de", "badme", "dekhenge", "pass", "light", "max", "sleep"],
        statblock: { Focus: 3, Social: 8, Sleep: 10, Ambition: 4, Flexibility: 9 },
        matches: "Jugaadu Jokers",
        quirk: "Starts studying 2 hours before the minor.",
        flaw: "Sometimes it does NOT 'ho jayega'."
    },
    {
        id: "C", title: "Bluffmasters / Politicians", emoji: "🤥",
        desc: "Sab ho gaya even when nothing started.",
        keywords: ["done", "ho gaya", "easy pizy", "sorted", "lite", "trust me", "handled", "brother", "bhai", "setting", "manage"],
        statblock: { Focus: 5, Social: 9, Sleep: 7, Ambition: 8, Flexibility: 8 },
        matches: "PORstars",
        quirk: "Claims to know every prof personally.",
        flaw: "Source: 'Trust me bro'."
    },
    {
        id: "D", title: "Couples", emoji: "👩‍❤️‍👨",
        desc: "Campus as relationship RPG map. They exist in a parallel dimension.",
        keywords: ["baby", "love", "meet", "wind t", "lhc top", "walk", "dinner", "cute", "<3", "miss u", "call", "babe", "darling"],
        statblock: { Focus: 4, Social: 2, Sleep: 6, Ambition: 5, Flexibility: 5 },
        matches: "Hopeful Romantics",
        quirk: "Uses plural 'We' for individual decisions.",
        flaw: "Disappears from the group for months."
    },
    {
        id: "E", title: "Boastful Bustards", emoji: "🗣️",
        desc: "JEE Peaked. Still narrating test series meta. AIR is Aadhaar.",
        keywords: ["jee", "air", "rank", "adv", "mains", "fiitjee", "allen", "coaching", "iitb", "percentile", "physics", "maths"],
        statblock: { Focus: 6, Social: 4, Sleep: 6, Ambition: 7, Flexibility: 3 },
        matches: "Acad-Centered",
        quirk: "Introduces themselves with their AIR.",
        flaw: "Thumb stuck in 2024."
    },
    {
        id: "F", title: "Doing-Nothing DIVAs", emoji: "💅",
        desc: "Kuch bhi karenge, bas acads nahi. Aesthetic > Assignment.",
        keywords: ["boring", "paka mat", "photo", "insta", "reel", "vibe", "aesthetic", "dress", "party", "club", "ootd", "pose"],
        statblock: { Focus: 2, Social: 9, Sleep: 8, Ambition: 6, Flexibility: 7 },
        matches: "The Traveler",
        quirk: "Has 10k followers but 0 assignments submitted.",
        flaw: "Allergic to PDFs."
    },
    {
        id: "G", title: "Jugaadu Jokers", emoji: "🃏",
        desc: "Shortcut engine + chaos comedian. Finds the weirdest solutions.",
        keywords: ["hack", "trick", "jugaad", "bypass", "loophole", "funny", "lol", "lmao", "ded", "meme", "sticker", "xd", "rofl"],
        statblock: { Focus: 5, Social: 10, Sleep: 5, Ambition: 7, Flexibility: 10 },
        matches: "Weirdness Dumpers",
        quirk: "Solves problems by creating bigger problems.",
        flaw: "Cannot be serious for more than 5 seconds."
    },
    {
        id: "H", title: "Machau MOFOs", emoji: "💼",
        desc: "Walking LinkedIn offline. High CG + clubs + comps. They do it all.",
        keywords: ["intern", "cv", "resume", "project", "comp", "hackathon", "win", "selected", "team", "lead", "prof", "research", "gs"],
        statblock: { Focus: 10, Social: 8, Sleep: 2, Ambition: 10, Flexibility: 8 },
        matches: "Inventors & Innovators",
        quirk: "Schedules 'fun' in their Google Calendar.",
        flaw: "Has forgotten what sleep feels like."
    },
    {
        id: "I", title: "Isolated Introverts", emoji: "😶",
        desc: "Quiet, observant, selectively social. The silent observer.",
        // REMOVED "ok", "hm", "accha" and other common stop words to fix sticky bug
        keywords: ["...", "nvm", "busy", "offline", "leave it", "silent", "lurking"],
        statblock: { Focus: 8, Social: 2, Sleep: 7, Ambition: 6, Flexibility: 4 },
        matches: "Tea Pot",
        quirk: "Left the group but reads every message.",
        flaw: "Invisible until the group project is due."
    },
    {
        id: "J", title: "Ghar Paglus", emoji: "🏠",
        desc: "One foot in home, one in hostel. Need mom's food ASAP.",
        keywords: ["ghar", "home", "mom", "dad", "mummy", "papa", "call", "ticket", "vacation", "miss", "food", "train", "flight", "booking"],
        statblock: { Focus: 6, Social: 4, Sleep: 8, Ambition: 5, Flexibility: 3 },
        matches: "Safe Haven Samaritans",
        quirk: "Video calls parents in the common room.",
        flaw: "Counts days until the next long weekend."
    },
    {
        id: "K", title: "Weirdness Dumpers", emoji: "🤪",
        desc: "Meme incarnate. Chaos runs deep. Sends things no one understands.",
        keywords: ["cursed", "random", "shitpost", "bruh", "skull", "sus", "amogus", "uwu", "context??", "wtf", "cringe"],
        statblock: { Focus: 3, Social: 7, Sleep: 4, Ambition: 4, Flexibility: 10 },
        matches: "Jugaadu Jokers",
        quirk: "Communication is 90% stickers.",
        flaw: "Scares the freshers."
    },
    {
        id: "L", title: "Tea Pot", emoji: "☕",
        desc: "Mobile Chaayos. Community hub. Solves life problems over chai.",
        keywords: ["chai", "sutta", "nesci", "dhaba", "chalo", "baithte", "discuss", "life", "talk", "night canteen", "tapri"],
        statblock: { Focus: 5, Social: 10, Sleep: 6, Ambition: 5, Flexibility: 8 },
        matches: "Sant Mahashay",
        quirk: "Knows everyone's secrets except their own.",
        flaw: "Caffeine addiction is a personality trait."
    },
    {
        id: "M", title: "Overly Optimistic", emoji: "✨",
        desc: "Every week is 'new arc' week. Unbreakable spirit.",
        keywords: ["yay", "great", "awesome", "fun", "excited", "happy", "best", "let's go", "woo", "positivity", "amazing"],
        statblock: { Focus: 7, Social: 9, Sleep: 7, Ambition: 8, Flexibility: 9 },
        matches: "Dandelion Deities",
        quirk: "Uses too many exclamation marks!!!!",
        flaw: "Refuses to acknowledge impending doom."
    },
    {
        id: "N", title: "Mujhe Ghar Jaana Hai", emoji: "😭",
        desc: "Homesick main character. The tragedy is real.",
        keywords: ["hate", "bekar", "ganda", "sick", "home", "wapas", "why", "cry", "sad", "udhaas", "mood off"],
        statblock: { Focus: 4, Social: 3, Sleep: 5, Ambition: 3, Flexibility: 2 },
        matches: "Safe Haven Samaritans",
        quirk: "Crying is a hobby.",
        flaw: "Brings the vibe down instantly."
    },
    {
        id: "O", title: "The Traveler", emoji: "🌏",
        desc: "Campus + Delhi + NCR as exploration game. Never in room.",
        keywords: ["trip", "plan", "goa", "manali", "trek", "ride", "metro", "cp", "hauz khas", "mall", "explore", " পাহাড়"],
        statblock: { Focus: 4, Social: 9, Sleep: 6, Ambition: 6, Flexibility: 9 },
        matches: "Doing-Nothing DIVAs",
        quirk: "More photos of CP than lectures.",
        flaw: "Is never actually on campus."
    },
    {
        id: "P", title: "Premature Senior", emoji: "👴",
        desc: "3rd-year soul in freshie body. 'Back in my day' vibe.",
        keywords: ["kids", "freshies", "grow up", "mature", "logic", "immature", "experience", "advice", "listen", "bachche"],
        statblock: { Focus: 8, Social: 5, Sleep: 6, Ambition: 9, Flexibility: 4 },
        matches: "PORstars",
        quirk: "Calls batchmates 'kids'.",
        flaw: "Forgot to have a childhood."
    },
    {
        id: "Q", title: "Dandelion Deities", emoji: "🌬️",
        desc: "Carried by winds of friends. No directionality. Just vibing.",
        keywords: ["ok", "sure", "jis", "anything", "whatever", "jaisa", "tum", "bolo", "waise", "hmm"],
        statblock: { Focus: 3, Social: 10, Sleep: 8, Ambition: 2, Flexibility: 10 },
        matches: "Overly Optimistic",
        quirk: "Has no opinion on where to eat.",
        flaw: "Accidentally ends up in a cult."
    },
    {
        id: "R", title: "Hopeful Romantics", emoji: "💌",
        desc: "Rom-com narrator of own IITD story. Looking for 'The One'.",
        keywords: ["crush", "date", "rose", "val", "partner", "single", "mingle", "romantic", "dream", "propose"],
        statblock: { Focus: 5, Social: 7, Sleep: 6, Ambition: 5, Flexibility: 7 },
        matches: "Couples",
        quirk: "Writes poetry in the back of notebooks.",
        flaw: "Projects fantasies onto strangers."
    }
];

const SENIORS = [
    {
        id: "S-A", title: "Gyaan Deliverers", emoji: "🎓",
        desc: "Walking TED Talks. OGPA 8+ but advice scores perfect 10.",
        keywords: ["funda", "advice", "career", "path", "guide", "tip", "future", "scope", "focus", "roadmap", "strategy"],
        statblock: { Focus: 10, Social: 6, Sleep: 6, Ambition: 9, Flexibility: 5 },
        matches: "Acad-Centered",
        quirk: "Starts sentences with 'Dekho, simple hai...'",
        flaw: "Unsolicited advice generator."
    },
    {
        id: "S-B", title: "Hostel Homies", emoji: "🏘️",
        desc: "Hostel ? thing, it IS the thing. Representing the block.",
        keywords: ["wing", "block", "hostel", "inter-hostel", "gc", "trophy", "cheer", "team", "fight", "represent", "jersey"],
        statblock: { Focus: 6, Social: 10, Sleep: 5, Ambition: 7, Flexibility: 7 },
        matches: "Tea Pot",
        quirk: "Bleeds their hostel color.",
        flaw: "Hostel rivalry is their personality."
    },
    {
        id: "S-C", title: "Safe Haven Samaritans", emoji: "🫂",
        desc: "Campus parents. OGPA 1.63 but yours will be 9 thanks to them.",
        keywords: ["help", "tum", "main", "kar", "dunga", "don't worry", "pass", "notes", "lelo", "share", "problem", "solution"],
        statblock: { Focus: 4, Social: 10, Sleep: 7, Ambition: 5, Flexibility: 9 },
        matches: "Ghar Paglus",
        quirk: "Adopts lost freshers.",
        flaw: "Forgets to save themselves."
    },
    {
        id: "S-G", title: "PORstars / Poltu Gods", emoji: "🏛️",
        desc: "PORs > CG always. Running the campus from behind the scenes.",
        keywords: ["meeting", "agenda", "budget", "mail", "official", "permission", "dean", "admin", "sac", "caic", "minutes"],
        statblock: { Focus: 9, Social: 9, Sleep: 3, Ambition: 10, Flexibility: 6 },
        matches: "Bluffmasters",
        quirk: "Checks email more than WhatsApp.",
        flaw: "Power hungry."
    },
    {
        id: "S-L", title: "Inventors & Innovators", emoji: "🚀",
        desc: "We do this MY way. DevClub/Robotics core. Building the future.",
        keywords: ["code", "build", "make", "robot", "dev", "tech", "create", "launch", "startup", "idea", "bug", "feature"],
        statblock: { Focus: 10, Social: 4, Sleep: 3, Ambition: 10, Flexibility: 8 },
        matches: "Machau MOFOs",
        quirk: "Talks in Github commits.",
        flaw: "Thinks Python solves human relationships."
    },
    {
        id: "S-O", title: "Sant Mahashay", emoji: "🧘",
        desc: "What are we in this cosmos? BREEATHE. Spiritual leaders.",
        keywords: ["life", "universe", "destiny", "karma", "peace", "calm", "relax", "moh", "maya", "sadhguru", "energy"],
        statblock: { Focus: 8, Social: 8, Sleep: 9, Ambition: 3, Flexibility: 10 },
        matches: "Relaxed Types",
        quirk: "Meditates during exams.",
        flaw: "Too detached from reality."
    }
];

const ALL_TYPES = [...FACCHE, ...SENIORS];

// ---------------------------------------------------------
// STATE & DOM
// ---------------------------------------------------------
let parsedChat = {};
// Store parsed chat in SessionStorage to persist across page navigations if needed
// For now, simpler to just run on single page, but "Archetypes" link might be same page?
// User asked for "three different pages", so state will be lost on nav unless stored.
// However, the user flow is: Open Home -> Upload -> Show Results.
// If they click "Archetypes", they leave the results. That's standard behavior.
// We won't implement complex persistence unless requested.

// ---------------------------------------------------------
// INITIALIZATION
// ---------------------------------------------------------
window.onload = function () {
    renderFullGallery();
    setupHomeInteractions();
};

function renderFullGallery() {
    const fGrid = document.getElementById('facche-gallery');
    const sGrid = document.getElementById('senior-gallery');
    if (!fGrid || !sGrid) return; // Not on Archetypes page

    fGrid.innerHTML = '';
    sGrid.innerHTML = '';

    const createCard = (item) => {
        const div = document.createElement('div');
        div.className = 'gallery-card';
        div.innerHTML = `
            <div class="card-front">
                <span class="gallery-emoji">${item.emoji}</span>
                <h3>${item.title}</h3>
                <p class="one-liner">${item.desc}</p>
            </div>
            <div class="card-overlay">
                <p><strong>Quirk:</strong> ${item.quirk}</p>
                <p><strong>Match:</strong> ${item.matches}</p>
            </div>
        `;
        return div;
    };

    FACCHE.forEach(f => fGrid.appendChild(createCard(f)));
    SENIORS.forEach(s => sGrid.appendChild(createCard(s)));
}

function setupHomeInteractions() {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('fileInput');
    const analyzeBtn = document.getElementById('analyze-btn');
    const searchInput = document.getElementById('user-search');

    // Drag & Drop
    if (dropZone) {
        dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.style.transform = 'scale(1.02)'; });
        dropZone.addEventListener('dragleave', () => { dropZone.style.transform = 'scale(1)'; });
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.style.transform = 'scale(1)';
            if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
        });
    }

    if (fileInput) {
        fileInput.addEventListener('change', () => { if (fileInput.files.length) handleFile(fileInput.files[0]); });
    }

    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', runAnalysis);
    }

    // Search Filter
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            const select = document.getElementById('user-select');
            const options = Array.from(select.options);

            options.forEach(opt => {
                if (opt.value === "") return; // Skip default
                const txt = opt.innerText.toLowerCase();
                if (txt.includes(val)) {
                    opt.style.display = '';
                    // Auto-select first match if typing
                    // if (searchInput === document.activeElement) select.value = opt.value;
                } else {
                    opt.style.display = 'none';
                }
            });
        });
    }
}

function handleFile(file) {
    if (!file.name.endsWith('.txt')) { alert("Please upload a .txt file (Export from WhatsApp)"); return; }

    const reader = new FileReader();
    reader.onload = (e) => parseChat(e.target.result);
    // Encoding Latin-1 can help with some emojis/accents, but UTF-8 is standard
    reader.readAsText(file);
}

function parseChat(text) {
    parsedChat = {};
    const lines = text.split('\n');
    // Regex Logic
    const regexIOS = /^\[(\d{1,2}\/\d{1,2}\/\d{2,4}),? (.*?)\] (.*?): (.*)/;
    const regexAndroid = /^(\d{1,2}\/\d{1,2}\/\d{2,4}),? (.*?) - (.*?): (.*)/;

    lines.forEach(line => {
        let match = line.match(regexIOS) || line.match(regexAndroid);
        // Loose match for wrapped lines? For now strict.
        if (match) {
            const user = match[3].trim();
            const message = match[4].trim();

            // Ignore System Messages
            if (message.includes("omitted") || message.includes("security code changed") || message.includes("added")) return;

            if (!parsedChat[user]) parsedChat[user] = { count: 0, text: " " };
            parsedChat[user].count++;
            // Normalize spaces for simpler regex
            parsedChat[user].text += message.toLowerCase() + " ";
        }
    });

    populateUserSelect();
}

function populateUserSelect() {
    const list = document.getElementById('user-select');
    const container = document.getElementById('user-selection-container');
    const search = document.getElementById('user-search');

    if (!list) return;

    list.innerHTML = '<option value="" disabled selected>Select user...</option>';

    // Remove "System" or blank users
    const users = Object.keys(parsedChat)
        .filter(u => u.length > 0 && !u.includes("WhatsApp"))
        .sort((a, b) => parsedChat[b].count - parsedChat[a].count);

    if (users.length === 0) {
        alert("No valid users found in chat!");
        return;
    }

    users.forEach(user => {
        const opt = document.createElement('option');
        opt.value = user;
        opt.innerText = `${user} (${parsedChat[user].count})`;
        list.appendChild(opt);
    });

    container.classList.remove('hidden');
    // Keep Upload visible, just append this section
}

function runAnalysis() {
    const user = document.getElementById('user-select').value;
    if (!user) { alert("Please select a user!"); return; }

    const data = parsedChat[user];
    const scores = ALL_TYPES.map(t => ({ ...t, score: 0 }));

    // Scoring Logic
    scores.forEach(type => {
        type.keywords.forEach(kw => {
            // Whole word matching
            const regex = new RegExp(`\\b${kw}\\b`, 'gi');
            const matches = (data.text.match(regex) || []).length;
            // Weighted? Assuming flat weight for now, keywords are specific enough
            type.score += matches * 5;
        });

        // Bonus for length matching?
        // e.g. Maggu = long messages?
        // e.g. Ghost = short messages
        if (type.id === "I" && data.count < 30) type.score += 50; // Ghost boost
        if (type.id === "S-G" && data.text.includes("meeting")) type.score += 20;
    });

    // Add random jitter to break ties (0.1 - 0.9)
    scores.forEach(t => t.score += Math.random());

    // Sort Descending
    scores.sort((a, b) => b.score - a.score);

    const winner = scores[0];
    const secondary = scores[1];

    displayResults(winner, secondary);
}

function displayResults(primary, secondary) {
    const resSection = document.getElementById('results');
    resSection.classList.remove('hidden');
    resSection.scrollIntoView({ behavior: 'smooth' });

    // Theme Update
    const colors = {
        'A': '#34495e', 'B': '#27ae60', 'C': '#f39c12', 'D': '#c0392b',
        'E': '#8e44ad', 'F': '#e84393', 'G': '#d35400', 'H': '#2c3e50',
        'I': '#7f8c8d', 'J': '#e67e22', 'K': '#16a085', 'L': '#c0392b',
        'M': '#f1c40f', 'N': '#2980b9', 'O': '#3498db', 'P': '#8e44ad',
        'Q': '#bdc3c7', 'R': '#ff7979'
    };
    const bg = colors[primary.id[0]] || '#2c3e50';

    // Only change body if we want global effect, or just the result card?
    // User asked: "change the background colour to mould according to the archetype"
    document.body.style.backgroundColor = bg;
    document.body.style.backgroundImage = 'none'; // remove paper texture for drama
    document.body.classList.remove('dark-theme');

    // Text Content
    document.getElementById('archetype-name').innerText = primary.title;
    document.getElementById('archetype-art').innerText = primary.emoji;
    document.getElementById('card-title').innerText = primary.title;
    document.getElementById('archetype-desc').innerText = primary.desc;

    // Lists
    document.getElementById('quirks-list').innerHTML = `<li>${primary.quirk}</li>`;
    document.getElementById('flaw-text').innerText = primary.flaw;
    document.getElementById('compatible-text').innerText = primary.matches;
    document.getElementById('secondary-text').innerText = `${secondary.title}`;

    // Stats
    const statsDiv = document.querySelector('.card-stats');
    if (statsDiv) {
        statsDiv.innerHTML = '';
        Object.entries(primary.statblock).forEach(([key, val]) => {
            // val is 1-10
            statsDiv.innerHTML += `
                <div class="stat-row">
                    <span style="width: 80px; text-align:right;">${key}</span>
                    <div class="stat-bar"><div class="stat-fill" style="width: ${val * 10}%"></div></div>
                </div>
            `;
        });
    }

    // Confetti!
    if (window.confetti) {
        confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#ffffff', bg] // Match theme
        });
    }
}
