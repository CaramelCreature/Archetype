import random
from src.archetypes import ARCHETYPES

class ArchetypeEngine:
    def __init__(self):
        self.archetypes = ARCHETYPES
        
    def analyze_user(self, user_stats):
        """
        Takes user_stats (from parser) and returns the Best Fit Archetype + Statblock.
        """
        if not user_stats:
            return None
            
        text = user_stats['text'].lower()
        scores = {}
        
        # 1. Scoring (Heuristic Keyword Matching)
        for code, arch in self.archetypes.items():
            score = 0
            for kw in arch['keywords']:
                # Basic count of keyword occurrence
                # Uses regex word boundaries for accuracy
                count = text.count(kw)
                score += count * 5  # Weighting factor
            
            # Heuristic Bonuses (Logic transfer from JS)
            # The Ghost
            if code == "I" and user_stats['msg_count'] < 30:
                score += 50
            # S-G (POR)
            if code == "S-G" and "meeting" in text:
                score += 20
                
            scores[code] = score
            
        # 2. Ranking
        # Sort by score descending
        ranked = sorted(scores.items(), key=lambda x: x[1], reverse=True)
        
        winner_code = ranked[0][0]
        secondary_code = ranked[1][0]
        
        winner_data = self.archetypes[winner_code]
        secondary_data = self.archetypes[secondary_code]
        
        return {
            "primary": {
                "id": winner_code,
                "title": winner_data['title'],
                "score": ranked[0][1],
                "stats": winner_data['stats']
            },
            "secondary": {
                "id": secondary_code,
                "title": secondary_data['title'],
                "score": ranked[1][1]
            }
        }
