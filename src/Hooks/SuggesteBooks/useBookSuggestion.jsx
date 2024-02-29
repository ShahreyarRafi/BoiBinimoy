import { useEffect, useState } from 'react';
import useOneUser from '../Users/useOneUser';

const useBookSuggestion = (CurrentlyViewing) => {
    const { interest } = useOneUser();
    const [bookSuggestion, setBookSuggestion] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const bookDetailsPromises = interest?.book?.map(async (bookId) => {
                    const response = await fetch(`https://boi-binimoy-server.vercel.app/api/v1/buy-books/${bookId}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch book details');
                    }
                    const bookData = await response.json();
                    return bookData;
                });
                const books = await Promise.all(bookDetailsPromises);

                const filteredBooks = books.filter(book => book._id !== CurrentlyViewing);

                setBookSuggestion(filteredBooks);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookDetails();
    }, [interest, CurrentlyViewing]);

    return { bookSuggestion, loading };
};

export default useBookSuggestion;
