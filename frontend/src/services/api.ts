import axios from 'axios';
import { Book } from '../types/book';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/v1';

export const addBook = async (book: Book) => {
    await axios.post(`${API_URL}/books/`, book);
};

export const getBooks = async (): Promise<Book[]> => {
    const response = await axios.get(`${API_URL}/books/`);
    return response.data;
};

export const deleteBook = async (id: number) => {
    await axios.delete(`${API_URL}/books/${id}/`);
};

export const getRecommendation = async (): Promise<Book> => {
    const response = await axios.get(`${API_URL}/books/recommend/`);
    return response.data;
};
