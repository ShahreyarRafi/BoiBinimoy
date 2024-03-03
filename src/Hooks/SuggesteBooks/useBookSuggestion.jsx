import { useEffect, useState } from 'react';
import useOneUser from '../Users/useOneUser';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../Axios/useAxiosPublic';

const useBookSuggestion = (CurrentlyViewing) => {
    const { interest } = useOneUser();
    const axiosPublic = useAxiosPublic();



    // ---------Category Books----------

    const [booksFromCategory, setBooksFromCategory] = useState([])

    const { data: categoryDetails = [], isLoading: categoryDetailsLoading } = useQuery({
        queryKey: ['categoryDetails', interest?.category],
        queryFn: async () => {
            const categoryDetailsPromises = interest?.category?.map(async (categoryName) => {
                try {
                    const response = await axiosPublic.get(`/api/v1/category/${categoryName}`);
                    if (response.status !== 200) {
                        throw new Error('Failed to fetch category details');
                    }
                    return response.data;
                } catch (error) {
                    console.error(error);
                    return null;
                }
            });
            const categories = await Promise.all(categoryDetailsPromises);
            return categories.filter(category => category !== null).flatMap(category => category);
        },
    });

    useEffect(() => {
        if (!categoryDetailsLoading) {
            setBooksFromCategory(categoryDetails);
        }
    }, [categoryDetails, categoryDetailsLoading]);

    console.log("Books From Category", booksFromCategory);



    // ---------Writers Books----------

    const [booksFromWriters, setBooksFromWriters] = useState([]);

    const { data: writersBooks = [], isLoading: writersBooksLoading } = useQuery({
        queryKey: ['writersBooks', interest?.writer],
        queryFn: async () => {
            const writersBooksPromises = interest?.writer?.map(async (writerName) => {
                try {
                    const response = await axiosPublic.get(`/api/v1/writer/${writerName}`);
                    if (response.status !== 200) {
                        throw new Error('Failed to fetch writer details');
                    }
                    return response.data;
                } catch (error) {
                    console.error(error);
                    return null;
                }
            });
            const writers = await Promise.all(writersBooksPromises);
            return writers.filter(writer => writer !== null).flatMap(writer => writer);
        },
    });

    useEffect(() => {
        if (!writersBooksLoading) {
            setBooksFromWriters(writersBooks);
        }
    }, [writersBooks, writersBooksLoading]);

    console.log("Books From Writers", booksFromWriters);



    // ---------Publishers Books----------

    const [booksFromPublishers, setBooksFromPublishers] = useState([]);

    const { data: publisherBooks = [], isLoading: publisherBooksLoading } = useQuery({
        queryKey: ['publisherBooks', interest?.publisher],
        queryFn: async () => {
            const publisherBooksPromises = interest?.publisher?.map(async (publisherName) => {
                try {
                    const response = await axiosPublic.get(`/api/v1/publisher/${publisherName}`);
                    if (response.status !== 200) {
                        throw new Error('Failed to fetch publisher details');
                    }
                    return response.data;
                } catch (error) {
                    console.error(error);
                    return null;
                }
            });
            const publishers = await Promise.all(publisherBooksPromises);
            return publishers.filter(publisher => publisher !== null).flatMap(publisher => publisher);
        },
    });

    useEffect(() => {
        if (!publisherBooksLoading) {
            setBooksFromPublishers(publisherBooks);
        }
    }, [publisherBooks, publisherBooksLoading]);

    console.log("Books From Publishers", booksFromPublishers);



    // ---------Individual books------------

    const [bookSuggestion, setBookSuggestion] = useState([]);


    const { data: bookDetails = [], isLoading: booksLaoding } = useQuery({
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

    useEffect(() => {
        if (!booksLaoding) {
            const filteredBooks = bookDetails.filter(book => book._id !== CurrentlyViewing);
            setBookSuggestion(filteredBooks);
        }
    }, [bookDetails, CurrentlyViewing, booksLaoding]);

    console.log("Individual books", bookDetails);



    // ---------Top Tear Suggestions-----------

    const [topTearSuggestions, setTopTearSuggestions] = useState([]);

    useEffect(() => {
        // Filter books based on user interests
        const filteredBooks = [];
        booksFromCategory.forEach(book => {
            if (
                interest.writer.includes(book.writer) ||
                interest.publisher.includes(book.publisher) ||
                interest.book.includes(book._id)
            ) {
                filteredBooks.push(book);
            }
        });

        booksFromWriters.forEach(book => {
            if (
                interest.publisher.includes(book.publisher) ||
                interest.category.includes(book.category) ||
                interest.book.includes(book._id)
            ) {
                filteredBooks.push(book);
            }
        });

        booksFromPublishers.forEach(book => {
            if (
                interest.writer.includes(book.writer) ||
                interest.category.includes(book.category) ||
                interest.book.includes(book._id)
            ) {
                filteredBooks.push(book);
            }
        });

        bookSuggestion.forEach(book => {
            if (
                interest.writer.includes(book.writer) ||
                interest.publisher.includes(book.publisher) ||
                interest.category.includes(book.category)
            ) {
                filteredBooks.push(book);
            }
        });

        // Remove duplicate books
        const uniqueBooks = Array.from(new Set(filteredBooks.map(book => book._id))).map(_id => {
            return filteredBooks.find(book => book._id === _id);
        });

        setTopTearSuggestions(uniqueBooks);
    }, [booksFromCategory, booksFromWriters, booksFromPublishers, bookSuggestion, interest]);

    console.log("Top Tier Suggestions", topTearSuggestions);



    // ----------Loading------------

    const [suggetionsLoading, setSuggetionsLoading] = useState(true);

    useEffect(() => {
        if (!booksLaoding && !categoryDetailsLoading && !writersBooksLoading && !publisherBooksLoading) {
            setSuggetionsLoading(false);
        }
    }, [bookDetails, booksLaoding, categoryDetailsLoading, writersBooksLoading, publisherBooksLoading]);



    return { bookSuggestion, booksFromCategory, booksFromWriters, booksFromPublishers, topTearSuggestions, suggetionsLoading };
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



