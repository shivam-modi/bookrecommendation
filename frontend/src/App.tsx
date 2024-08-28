import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Recommendation from './components/Recommendation';
import BookDialog from './components/AddBookDialog';
import './App.css';

const App: React.FC = () => {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="text-2xl font-bold">Book Recommendation App</h1>
                <button
                    onClick={openDialog}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                    Add Book
                </button>
            </header>
            <main className="p-4">
                <BookList />
                <Recommendation />
            </main>
            <BookDialog isOpen={isDialogOpen} onClose={closeDialog} />
        </div>
    );
};

export default App;
