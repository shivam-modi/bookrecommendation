from app.models.book_model import Book
from app.utils.db import db
import random

# Function to add a new book
def add_book(data):
    new_book = Book(
        title=data['title'],
        author=data['author'],
        genre=data['genre']
    )
    db.session.add(new_book)
    db.session.commit()
    return new_book.to_dict()  # Serialize the book object before returning

# Function to retrieve all books
def get_all_books():
    books = Book.query.all()
    
    if not books:
        return []  # Return an empty list if no books are found
    
    book_list = [book.to_dict() for book in books if isinstance(book, Book)]
    
    return book_list  # Return a list of serialized book objects

# Function to delete a book by ID
def delete_book(book_id):
    book = Book.query.get(book_id)
    if book:
        db.session.delete(book)
        db.session.commit()
        return book.to_dict()  # Optionally, return the deleted book's data
    return None

# Function to recommend a book based on available genres
def recommend_book():
    all_books = get_all_books()

    print(all_books)
    
    if not all_books:
        return None
    
    genres = [book['genre'] for book in all_books]  # Use serialized book data
    print(genres)
    recommended_books = [book for book in predefined_books if book['genre'] in genres]
    print(recommended_books)
    return random.choice(recommended_books) if recommended_books else None

# Sample predefined books for recommendation
predefined_books = [
    # Fiction
    {"title": "To Kill a Mockingbird", "author": "Harper Lee", "genre": "Fiction"},
    {"title": "1984", "author": "George Orwell", "genre": "Fiction"},
    
    # Science Fiction
    {"title": "Dune", "author": "Frank Herbert", "genre": "Science Fiction"},
    {"title": "Neuromancer", "author": "William Gibson", "genre": "Science Fiction"},
    
    # Fantasy
    {"title": "The Hobbit", "author": "J.R.R. Tolkien", "genre": "Fantasy"},
    {"title": "A Game of Thrones", "author": "George R.R. Martin", "genre": "Fantasy"},
    
    # Mystery
    {"title": "The Girl with the Dragon Tattoo", "author": "Stieg Larsson", "genre": "Mystery"},
    {"title": "Gone Girl", "author": "Gillian Flynn", "genre": "Mystery"},
    
    # Non-Fiction
    {"title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "genre": "Non-Fiction"},
    {"title": "Educated", "author": "Tara Westover", "genre": "Non-Fiction"},
    
    # Historical Fiction
    {"title": "The Book Thief", "author": "Markus Zusak", "genre": "Historical Fiction"},
    {"title": "All the Light We Cannot See", "author": "Anthony Doerr", "genre": "Historical Fiction"},
    
    # Romance
    {"title": "Pride and Prejudice", "author": "Jane Austen", "genre": "Romance"},
    {"title": "The Notebook", "author": "Nicholas Sparks", "genre": "Romance"},
    
    # Thriller
    {"title": "The Da Vinci Code", "author": "Dan Brown", "genre": "Thriller"},
    {"title": "The Silence of the Lambs", "author": "Thomas Harris", "genre": "Thriller"},
]
