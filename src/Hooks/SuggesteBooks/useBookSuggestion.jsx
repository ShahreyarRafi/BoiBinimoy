import { useEffect, useState } from 'react';
import useOneUser from '../Users/useOneUser';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../Axios/useAxiosPublic';

const useBookSuggestion = (CurrentlyViewing) => {
    const { interest } = useOneUser();
    const axiosPublic = useAxiosPublic();

    const { data: bookDetails = [], isLoading } = useQuery({
        queryKey: ["bookDetails", interest?.book],
        queryFn: async () => {
            const bookDetailsPromises = interest?.book?.map(async (_id) => {
                try {
                    const response = await axiosPublic.get(`/api/v1/buy-books/${_id}`);
                    if (response.status !== 200) {
                        throw new Error('Failed to fetch book details');
                    }
                    return response.data;
                } catch (error) {
                    console.error(error);
                    return null;
                }
            });
            const books = await Promise.all(bookDetailsPromises);
            return books.filter(book => book !== null);
        },
    });

    console.log(bookDetails);

    const [bookSuggestion, setBookSuggestion] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isLoading) {
            const filteredBooks = bookDetails.filter(book => book._id !== CurrentlyViewing);
            setBookSuggestion(filteredBooks);
            setLoading(false);
        }
    }, [bookDetails, CurrentlyViewing, isLoading]);

    return { bookSuggestion, loading };
};

export default useBookSuggestion;





// import { useEffect, useState } from 'react';
// import useOneUser from '../Users/useOneUser';

// const useBookSuggestion = (CurrentlyViewing) => {
//     const { interest } = useOneUser();
//     const [bookSuggestion, setBookSuggestion] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchBookDetails = async () => {
//             try {
//                 const bookDetailsPromises = interest?.book?.map(async (_id) => {
//                     const response = await fetch(`https://boi-binimoy-server.vercel.app/api/v1/buy-books/${_id}`);
//                     if (!response.ok) {
//                         throw new Error('Failed to fetch book details');
//                     }
//                     const bookData = await response.json();
//                     return bookData;
//                 });
//                 const books = await Promise.all(bookDetailsPromises);

//                 console.log(books);

//                 const filteredBooks = books.filter(book => book._id !== CurrentlyViewing);

//                 setBookSuggestion(filteredBooks);
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBookDetails();
//     }, [interest, CurrentlyViewing]);
// ;

//     return { bookSuggestion, loading };
// };

// export default useBookSuggestion;


