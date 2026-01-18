# Archetype Definitions and Keywords
# This acts as our "Knowledge Base" (similar to the training data in movie_character)

ARCHETYPES = {
    # FACCHE (Juniors)
    "A": {
        "title": "Acad-Centered", 
        "keywords": ["grade", "cg", "depc", "cutoff", "fakka", "satti", "bsw", "pyq", "quiz", "rank", "deadline", "submission"],
        "stats": {"Focus": 9, "Social": 3, "Sleep": 4, "Ambition": 10, "Flexibility": 2}
    },
    "B": {
        "title": "Relaxed Types", 
        "keywords": ["chill", "ho jayega", "easy", "scene", "load", "mat le", "sone de", "badme", "pass"],
        "stats": {"Focus": 3, "Social": 8, "Sleep": 10, "Ambition": 4, "Flexibility": 9}
    },
    "C": {
        "title": "Bluffmasters", 
        "keywords": ["done", "ho gaya", "easy pizy", "sorted", "lite", "trust me", "handled", "setting"],
        "stats": {"Focus": 5, "Social": 9, "Sleep": 7, "Ambition": 8, "Flexibility": 8}
    },
    "D": {
        "title": "Couples", 
        "keywords": ["baby", "love", "meet", "wind t", "lhc top", "walk", "dinner", "cute", "<3", "miss u"],
        "stats": {"Focus": 4, "Social": 2, "Sleep": 6, "Ambition": 5, "Flexibility": 5}
    },
    "E": {
        "title": "Boastful Bustards", 
        "keywords": ["jee", "air", "rank", "adv", "mains", "fiitjee", "allen", "coaching", "iitb", "percentile"],
        "stats": {"Focus": 6, "Social": 4, "Sleep": 6, "Ambition": 7, "Flexibility": 3}
    },
    "F": {
        "title": "Doing-Nothing DIVAs", 
        "keywords": ["boring", "paka mat", "photo", "insta", "reel", "vibe", "aesthetic", "dress", "party"],
        "stats": {"Focus": 2, "Social": 9, "Sleep": 8, "Ambition": 6, "Flexibility": 7}
    },
    "G": {
        "title": "Jugaadu Jokers", 
        "keywords": ["hack", "trick", "jugaad", "bypass", "loophole", "funny", "meme"],
        "stats": {"Focus": 5, "Social": 10, "Sleep": 5, "Ambition": 7, "Flexibility": 10}
    },
    "H": {
        "title": "Machau MOFOs", 
        "keywords": ["intern", "cv", "resume", "project", "comp", "hackathon", "win", "selected", "team", "lead"],
        "stats": {"Focus": 10, "Social": 8, "Sleep": 2, "Ambition": 10, "Flexibility": 8}
    },
    "I": {
        "title": "Isolated Introverts", 
        "keywords": ["...", "nvm", "busy", "offline", "leave it", "silent"],
        "stats": {"Focus": 8, "Social": 2, "Sleep": 7, "Ambition": 6, "Flexibility": 4}
    },
    "J": {
        "title": "Ghar Paglus", 
        "keywords": ["ghar", "home", "mom", "dad", "call", "ticket", "vacation", "miss", "food"],
        "stats": {"Focus": 6, "Social": 4, "Sleep": 8, "Ambition": 5, "Flexibility": 3}
    },
    "K": {
        "title": "Weirdness Dumpers", 
        "keywords": ["cursed", "random", "shitpost", "bruh", "skull", "sus", "amogus", "uwu"],
        "stats": {"Focus": 3, "Social": 7, "Sleep": 4, "Ambition": 4, "Flexibility": 10}
    },
    "L": {
        "title": "Tea Pot", 
        "keywords": ["chai", "sutta", "nesci", "dhaba", "chalo", "baithte", "discuss", "life", "night canteen"],
        "stats": {"Focus": 5, "Social": 10, "Sleep": 6, "Ambition": 5, "Flexibility": 8}
    },
    "M": {
        "title": "Overly Optimistic", 
        "keywords": ["yay", "great", "awesome", "fun", "excited", "happy", "best", "let's go"],
        "stats": {"Focus": 7, "Social": 9, "Sleep": 7, "Ambition": 8, "Flexibility": 9}
    },
    "N": {
        "title": "Mujhe Ghar Jaana Hai", 
        "keywords": ["hate", "bekar", "ganda", "sick", "home", "wapas", "why", "cry", "sad"],
        "stats": {"Focus": 4, "Social": 3, "Sleep": 5, "Ambition": 3, "Flexibility": 2}
    },
    "O": {
        "title": "The Traveler", 
        "keywords": ["trip", "plan", "goa", "manali", "trek", "ride", "metro", "cp", "hauz khas", "explore"],
        "stats": {"Focus": 4, "Social": 9, "Sleep": 6, "Ambition": 6, "Flexibility": 9}
    },
    "P": {
        "title": "Premature Senior", 
        "keywords": ["kids", "freshies", "grow up", "mature", "logic", "immature", "experience", "advice"],
        "stats": {"Focus": 8, "Social": 5, "Sleep": 6, "Ambition": 9, "Flexibility": 4}
    },
    "Q": {
        "title": "Dandelion Deities", 
        "keywords": ["ok", "sure", "jis", "anything", "whatever", "jaisa", "tum", "bolo"],
        "stats": {"Focus": 3, "Social": 10, "Sleep": 8, "Ambition": 2, "Flexibility": 10}
    },
    "R": {
        "title": "Hopeful Romantics", 
        "keywords": ["crush", "date", "rose", "val", "partner", "single", "mingle"],
        "stats": {"Focus": 5, "Social": 7, "Sleep": 6, "Ambition": 5, "Flexibility": 7}
    },
    
    # SENIORS
    "S-A": {
        "title": "Gyaan Deliverers", 
        "keywords": ["funda", "advice", "career", "path", "guide", "tip", "future", "roadmap"],
        "stats": {"Focus": 10, "Social": 6, "Sleep": 6, "Ambition": 9, "Flexibility": 5}
    },
    "S-B": {
        "title": "Hostel Homies", 
        "keywords": ["wing", "block", "hostel", "inter-hostel", "gc", "trophy", "cheer", "jersey"],
        "stats": {"Focus": 6, "Social": 10, "Sleep": 5, "Ambition": 7, "Flexibility": 7}
    },
    "S-C": {
        "title": "Safe Haven Samaritans", 
        "keywords": ["help", "tum", "main", "kar", "dunga", "don't worry", "pass", "notes", "lelo"],
        "stats": {"Focus": 4, "Social": 10, "Sleep": 7, "Ambition": 5, "Flexibility": 9}
    },
    "S-G": {
        "title": "PORstars", 
        "keywords": ["meeting", "agenda", "budget", "mail", "official", "permission", "dean", "admin"],
        "stats": {"Focus": 9, "Social": 9, "Sleep": 3, "Ambition": 10, "Flexibility": 6}
    },
    "S-L": {
        "title": "Inventors & Innovators", 
        "keywords": ["code", "build", "make", "robot", "dev", "tech", "create", "launch", "startup"],
        "stats": {"Focus": 10, "Social": 4, "Sleep": 3, "Ambition": 10, "Flexibility": 8}
    },
    "S-O": {
        "title": "Sant Mahashay", 
        "keywords": ["life", "universe", "destiny", "karma", "peace", "calm", "relax", "moh", "maya"],
        "stats": {"Focus": 8, "Social": 8, "Sleep": 9, "Ambition": 3, "Flexibility": 10}
    }
}
