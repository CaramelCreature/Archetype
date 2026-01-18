import sys
import os
import argparse
from src.parser import parse_whatsapp_chat, get_user_stats
from src.engine import ArchetypeEngine

def main():
    parser = argparse.ArgumentParser(description="IITD Archetype Classification Backend")
    parser.add_argument("--file", help="Path to _chat.txt file", required=True)
    parser.add_argument("--user", help="Name of the user to analyze")
    
    args = parser.parse_args()
    
    chat_path = args.file
    target_user = args.user
    
    print(f"Loading chat from: {chat_path}")
    
    # 1. Parse
    try:
        df = parse_whatsapp_chat(chat_path)
    except FileNotFoundError:
        print("Error: File not found.")
        return
    except Exception as e:
        print(f"Error parsing chat: {e}")
        return
        
    print(f"Chat loaded. Found {len(df)} messages from {df['user'].nunique()} users.")
    
    # 2. Select User
    if not target_user:
        print("\nAvailable Users (Top 10 Activity):")
        top_users = df['user'].value_counts().head(10)
        for u, count in top_users.items():
            print(f"- {u}: {count} msgs")
            
        target_user = input("\nEnter exact username to analyze: ").strip()
        
    # 3. Get Stats
    print(f"\nAnalyzing user: {target_user}...")
    user_stats = get_user_stats(df, target_user)
    
    if not user_stats:
        print("User not found in chat archive!")
        return
        
    # 4. Run Classification Engine
    engine = ArchetypeEngine()
    result = engine.analyze_user(user_stats)
    
    # 5. Output
    print("\n" + "="*40)
    print(f"ARCHETYPE DETECTED: {result['primary']['title']}")
    print("="*40)
    print(f"Confidence Score: {result['primary']['score']}")
    print(f"Statblock: {result['primary']['stats']}")
    print("-" * 20)
    print(f"Secondary Influence: {result['secondary']['title']}")
    print("="*40)

if __name__ == "__main__":
    main()
