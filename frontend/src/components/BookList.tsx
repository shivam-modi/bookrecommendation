import React from 'react';
import { useBooks } from '../hooks/useBooks'; // Adjust the path if necessary
import { deleteBook } from '../services/api';

const BookList: React.FC = () => {
    const { books, loading, error, fetchBooks } = useBooks();

    const handleDelete = async (id?: number) => {
        if (!id) return;
        try {
            await deleteBook(id); // Ensure deleteBook function is correctly imported
            fetchBooks(); // Refetch books after deletion
        } catch (err) {
            console.error('Failed to delete book');
        }
    };

    if (loading) return <p className="text-gray-500">Loading...</p>;

    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">Book List</h2>
            {books.length === 0 ? (
                <p className="text-gray-500">No books available</p>
            ) : (
                <ul className="space-y-2">
                    {books.map((book) => (
                        <li key={book.id} className="flex justify-between items-center p-2 border-b border-gray-200">
                            <span>{book.title} by {book.author}</span>
                            <button 
                                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                                onClick={() => handleDelete(book.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;
