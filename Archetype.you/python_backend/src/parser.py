import re
import pandas as pd

def parse_whatsapp_chat(filepath):
    """
    Parses a WhatsApp text export file into a pandas DataFrame.
    Handles standard Android/iOS formats.
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    data = []
    # Regex for "Date, Time - User: Message" (Android)
    # Regex for "[Date, Time] User: Message" (iOS)
    
    # We use a flexible pattern
    # 0 = Date, 1 = Time, 2 = User, 3 = Message
    pattern = r'^\[?(\d{1,2}/\d{1,2}/\d{2,4}),?\s+(\d{1,2}:\d{2}(?::\d{2})?(?:\s?[APap][Mm])?)\]?\s+(?:- )?([^:]+):\s+(.*)$'
    
    current_entry = None
    
    for line in lines:
        match = re.match(pattern, line)
        if match:
            # If we were building a previous multiline message, save it
            if current_entry:
                data.append(current_entry)
            
            date, time, user, message = match.groups()
            
            # Filter system messages
            if "omitted" in message or "security code" in message:
                current_entry = None
                continue
                
            current_entry = {
                'date': date,
                'time': time,
                'user': user.strip(),
                'message': message.strip()
            }
        else:
            # Continuation of previous message
            if current_entry:
                current_entry['message'] += '\n' + line.strip()

    if current_entry:
        data.append(current_entry)

    df = pd.DataFrame(data)
    return df

def get_user_stats(df, user):
    """
    Returns text corpus and basic stats for a specific user.
    """
    user_df = df[df['user'] == user]
    if user_df.empty:
        return None
        
    full_text = " ".join(user_df['message'].astype(str).tolist())
    word_count = len(full_text.split())
    msg_count = len(user_df)
    avg_len = word_count / msg_count if msg_count > 0 else 0
    
    return {
        'text': full_text,
        'word_count': word_count,
        'msg_count': msg_count,
        'avg_len': avg_len
    }
