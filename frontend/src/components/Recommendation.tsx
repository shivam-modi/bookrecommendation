import React, { useEffect, useState } from 'react';
import { getRecommendation } from '../services/api';
import { Book } from '../types/book';

const Recommendation: React.FC = () => {
    const [recommendation, setRecommendation] = useState<Book | null>(null);

    const fetchRecommendation = async () => {
        try {
            const recommendedBook = await getRecommendation();
            setRecommendation(recommendedBook);
        } catch (err) {
            console.error('Failed to fetch recommendation');
        }
    };

    useEffect(() => {
        fetchRecommendation();
    }, []);

    return (
        <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Recommended Book</h2>
            {recommendation ? (
                <div>
                    <h3 className="text-xl font-semibold">{recommendation.title}</h3>
                    <p>by {recommendation.author}</p>
                    <p>Genre: {recommendation.genre}</p>
                </div>
            ) : (
                <p>No recommendation available</p>
            )}
        </div>
    );
};

export default Recommendation;
