from flask import Blueprint
from app.controllers.book_controller import create_book, get_books, remove_book, get_recommendation

book_bp = Blueprint('book', __name__)

book_bp.route('/', methods=['POST'])(create_book)
book_bp.route('/', methods=['GET'])(get_books)
book_bp.route('/<int:book_id>/', methods=['DELETE'])(remove_book)
book_bp.route('/recommend/', methods=['GET'])(get_recommendation)
