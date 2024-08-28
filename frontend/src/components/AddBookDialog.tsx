import React, { useState } from 'react';
import Modal from 'react-modal'; // Ensure to install react-modal
import { useBooks } from '../hooks/useBooks';
import { addBook } from '../services/api';

Modal.setAppElement('#root'); // Set the root element for accessibility

const BookDialog: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const { fetchBooks } = useBooks(); // Use the hook to refetch books

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addBook({ title, author, genre });
            onClose(); // Close dialog on success
            fetchBooks(); // Refetch books after adding
        } catch (error) {
            console.error('Failed to add book');
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Add Book"
            className="fixed inset-0 flex items-center justify-center p-4 bg-gray-900 bg-opacity-50"
            overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50"
        >
            <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
                <h2 className="text-xl font-semibold mb-4">Add New Book</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Author</label>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Genre</label>
                        <input
                            type="text"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Add Book
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="ml-2 bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </Modal>
    );
};

export default BookDialog;
