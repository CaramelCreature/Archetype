from flask import Flask, request, jsonify, send_from_directory
import os
from src.parser import parse_whatsapp_chat, get_user_stats
from src.engine import ArchetypeEngine

# Initialize Flask App
# We set the template/static folder to the parent directory (ArchetypeFrontend)
# so it can serve the existing index.html and style.css
app = Flask(__name__, static_folder='../', static_url_path='')

@app.route('/')
def home():
    """Serve the main frontend file"""
    return send_from_directory('../', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    """Serve other static files (css, js, images)"""
    return send_from_directory('../', path)

@app.route('/api/analyze', methods=['POST'])
def analyze_chat():
    """
    API Endpoint to process chat files using the Python Engine.
    Expects a file upload in 'chat_file' and a 'user' form field.
    """
    if 'chat_file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    
    file = request.files['chat_file']
    user = request.form.get('user')
    
    if not file or file.filename == '':
        return jsonify({"error": "No file selected"}), 400

    # Save temp file for parsing
    temp_path = os.path.join("temp_upload.txt")
    file.save(temp_path)

    try:
        # 1. Parse using Python Logic
        df = parse_whatsapp_chat(temp_path)
        
        # 2. Get Users List (if no user selected yet)
        if not user:
            users = df['user'].value_counts().head(50).index.tolist()
            return jsonify({"status": "users_found", "users": users})

        # 3. Analyze Specific User
        stats = get_user_stats(df, user)
        if not stats:
            return jsonify({"error": "User not found"}), 404
            
        engine = ArchetypeEngine()
        result = engine.analyze_user(stats)
        
        return jsonify({"status": "success", "result": result})

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        # Cleanup
        if os.path.exists(temp_path):
            os.remove(temp_path)

if __name__ == '__main__':
    print("Starting Archetype Server...")
    print("Go to http://localhost:5000 in your browser")
    app.run(debug=True, port=5000)
