from flask import jsonify, request
from app.services.book_service import add_book, get_all_books, delete_book, recommend_book

def create_book():
    data = request.get_json()
    book = add_book(data)
    return jsonify(book), 201

def get_books():
    books = get_all_books()
    return jsonify(books), 200

def remove_book(book_id):
    deleted_book = delete_book(book_id)
    if deleted_book:
        return '', 204
    else:
        return jsonify({"error": "Book not found"}), 404

def get_recommendation():
    recommendation = recommend_book()
    if not recommendation:
        return jsonify({'message': 'No books to recommend'}), 400
    return jsonify(recommendation), 200
