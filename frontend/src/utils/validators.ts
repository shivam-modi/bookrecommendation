import { Book } from '../types/book';

export const validateBook = (book: Book): string | null => {
    if (!book.title.trim()) return 'Title is required';
    if (!book.author.trim()) return 'Author is required';
    
    if (!book.genre.trim()) return 'Genre is required';
    return null;
};
