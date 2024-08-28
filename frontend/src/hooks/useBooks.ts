import { useState, useEffect, useCallback } from 'react';
import { getBooks } from '../services/api';
import { Book } from '../types/book';

export const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const bookList = await getBooks();
            setBooks(bookList);
        } catch (err) {
            setError('Failed to fetch books');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return { books, loading, error, fetchBooks };
};
