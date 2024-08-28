from flask import request, jsonify

def validate_book_data(func):
    def wrapper(*args, **kwargs):
        data = request.get_json()
        if not data.get('title') or not data.get('author') or not data.get('genre'):
            return jsonify({"error": "Missing data"}), 400
        return func(*args, **kwargs)
    return wrapper
