import React, { useState } from 'react';
import { addBook } from '../services/api';
import { Book } from '../types/book';
import { validateBook } from '../utils/validators';

const BookForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationError = validateBook({ title, author, genre });
        if (validationError) {
            setError(validationError);
            return;
        }
        try {
            await addBook({ title, author, genre });
            setTitle('');
            setAuthor('');
            setGenre('');
            setError('');
        } catch (err) {
            setError('Failed to add book');
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Add a Book</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add Book
                </button>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    );
};

export default BookForm;
