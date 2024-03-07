// useBookSuggestion.js
import { useCallback, useContext, useEffect, useState } from 'react';
import useOneUser from '../Users/useOneUser';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../Axios/useAxiosPublic';
import { AuthContext } from '@/providers/AuthProvider';

const useBookSuggestion = (CurrentlyViewing) => {
    const { isLoggedIn } = useContext(AuthContext);
    const { interest } = useOneUser();
    const axiosPublic = useAxiosPublic();
    const [booksFromCategory, setBooksFromCategory] = useState([]);
    const [booksFromWriters, setBooksFromWriters] = useState([]);
    const [booksFromPublishers, setBooksFromPublishers] = useState([]);
    const [interestedBooks, setInterestedBooks] = useState([]);
    const [relatedBooksLoading, setRelatedBooksLoading] = useState(false);
    const [interestedBooksRelatedBooks, setInterestedBooksRelatedBooks] = useState([]);
    const [interestedBooksRelatedBooksLoading, setInterestedBooksRelatedBooksLoading] = useState(true);
    const [currentlyViewingRelatedBooks, setCurrentlyViewingRelatedBooks] = useState([]);
    const [currentlyViewingRelatedLoading, setCurrentlyViewingRelatedLoading] = useState(true);
    const [topTearSuggestions, setTopTearSuggestions] = useState([]);
    const [topTearSuggestionsLoading, setTopTearSuggestionsLoading] = useState(true);
    const [suggestionsLoading, setSuggestionsLoading] = useState(true);
    const [relatedLoading, setRelatedLoading] = useState(true);

    console.log("first")

    // Category Books
    const { data: categoryDetails = [], isLoading: categoryDetailsLoading } = useQuery({
        queryKey: ['categoryDetails', interest?.category],
        queryFn: async () => {
            // Fetch category details if user is logged in
            if (isLoggedIn && interest?.category) {
                const categoryDetailsPromises = interest.category.map(async (categoryName) => {
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
            } else {
                return []; // Return empty array if user is not logged in or no category interest
            }
        },
    });

    useEffect(() => {
        if (!categoryDetailsLoading && interest) {
            setBooksFromCategory(categoryDetails);
        }
    }, [categoryDetails, categoryDetailsLoading, interest]);

    // Writers Books
    const { data: writersBooks = [], isLoading: writersBooksLoading } = useQuery({
        queryKey: ['writersBooks', interest?.writer],
        queryFn: async () => {
            // Fetch writer details if user is logged in
            if (isLoggedIn && interest?.writer) {
                const writersBooksPromises = interest.writer.map(async (writerName) => {
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
                return writers?.filter(writer => writer !== null).flatMap(writer => writer);
            } else {
                return []; // Return empty array if user is not logged in or no writer interest
            }
        },
    });

    useEffect(() => {
        if (!writersBooksLoading && interest) {
            setBooksFromWriters(writersBooks);
        }
    }, [writersBooks, writersBooksLoading, interest]);

    // Publishers Books
    const { data: publisherBooks = [], isLoading: publisherBooksLoading } = useQuery({
        queryKey: ['publisherBooks', interest?.publisher],
        queryFn: async () => {
            // Fetch publisher details if user is logged in
            if (isLoggedIn && interest?.publisher) {
                const publisherBooksPromises = interest.publisher.map(async (publisherName) => {
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
                return publishers?.filter(publisher => publisher !== null).flatMap(publisher => publisher);
            } else {
                return []; // Return empty array if user is not logged in or no publisher interest
            }
        },
    });

    useEffect(() => {
        if (!publisherBooksLoading && interest) {
            setBooksFromPublishers(publisherBooks);
        }
    }, [publisherBooks, publisherBooksLoading, interest]);

    // Interested books
    const { data: bookDetails = [], isLoading: booksLoading } = useQuery({
        queryKey: ["bookDetails", interest?.book],
        queryFn: async () => {
            // Fetch book details if user is logged in
            if (isLoggedIn && interest?.book) {
                const bookDetailsPromises = interest.book.map(async (_id) => {
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
                return books?.filter(book => book !== null);
            } else {
                return []; // Return empty array if user is not logged in or no book interest
            }
        },
    });

    useEffect(() => {
        if (!booksLoading) {
            const filteredBooks = bookDetails.filter(book => book._id !== CurrentlyViewing);
            setInterestedBooks(filteredBooks);
        }
    }, [bookDetails, CurrentlyViewing, booksLoading]);

    // Fetch related books function
    const fetchRelatedBooks = useCallback(async (writer, publisher, category) => {
        try {
            setRelatedBooksLoading(true); // Set loading state to true
            const writerResponse = await axiosPublic.get(`/api/v1/writer/${writer}`);
            const publisherResponse = await axiosPublic.get(`/api/v1/publisher/${publisher}`);
            const categoryResponse = await axiosPublic.get(`/api/v1/category/${category}`);

            const writerBooks = writerResponse?.data || [];
            const publisherBooks = publisherResponse?.data || [];
            const categoryBooks = categoryResponse?.data || [];

            const relatedBooksData = [...writerBooks, ...publisherBooks, ...categoryBooks];

            // Remove duplicates
            const uniqueRelatedBooks = Array.from(new Set(relatedBooksData?.map(book => book?._id))).map(_id => {
                return relatedBooksData?.find(book => book?._id === _id);
            });

            setRelatedBooksLoading(false); // Set loading state to false after data fetching
            return uniqueRelatedBooks;
        } catch (error) {
            console.error("Error fetching related books:", error);
            setRelatedBooksLoading(false); // Set loading state to false in case of error
            return [];
        }
    }, [axiosPublic]);

    // Related books of Interested books
    useEffect(() => {
        const fetchRelatedBooksForAllBooks = async () => {
            try {
                setInterestedBooksRelatedBooksLoading(true);
                const relatedBooksForAll = [];
                for (const book of interestedBooks) {
                    const { writer, publisher, category } = book;
                    const relatedBooksForBook = await fetchRelatedBooks(writer, publisher, category);
                    relatedBooksForAll.push(...relatedBooksForBook);
                }
                setInterestedBooksRelatedBooks(relatedBooksForAll);
            } catch (error) {
                console.error("Error fetching related books:", error);
            } finally {
                setInterestedBooksRelatedBooksLoading(false);
            }
        };

        fetchRelatedBooksForAllBooks();
    }, [interestedBooks, fetchRelatedBooks]);

    // Related Books of Currently Viewing
    const { data: currentlyViewingBookDetails = [], isLoading: currentlyViewingBookLoading } = useQuery({
        queryKey: ["currentlyViewingBookDetails"],
        queryFn: async () => {
            try {
                const response = await axiosPublic.get(`/api/v1/buy-books/${CurrentlyViewing}`);
                if (response.status !== 200) {
                    throw new Error('Failed to fetch book details');
                }
                return response?.data;
            } catch (error) {
                console.error(error);
                return null;
            }
        },
    });

    useEffect(() => {
        if (currentlyViewingBookLoading) {
            setCurrentlyViewingRelatedLoading(true)
            return;
        }

        if (currentlyViewingBookDetails) {
            setCurrentlyViewingRelatedLoading(true)
            const { writer, publisher, category } = currentlyViewingBookDetails;
            const fetchRelatedBooksForCurrentlyViewing = async () => {
                try {
                    const relatedBooksForCurrentlyViewing = await fetchRelatedBooks(writer, publisher, category);
                    setCurrentlyViewingRelatedBooks(relatedBooksForCurrentlyViewing);
                } catch (error) {
                    console.error("Error fetching related books for currently viewing book:", error);
                    setCurrentlyViewingRelatedBooks([]);
                } finally {
                    setCurrentlyViewingRelatedLoading(false);
                }
            };

            fetchRelatedBooksForCurrentlyViewing();
        }
    }, [currentlyViewingBookDetails, currentlyViewingBookLoading, fetchRelatedBooks]);

    useEffect(() => {
        if (isLoggedIn === true && interest) {
            // Filter books based on user interests
            const filteredBooks = [];

            booksFromCategory?.forEach(book => {
                if (
                    interest?.writer?.includes(book?.writer) ||
                    interest?.publisher?.includes(book?.publisher) ||
                    interest?.book?.includes(book?._id)
                ) {
                    filteredBooks.push(book);
                }
            });

            booksFromWriters?.forEach(book => {
                if (
                    interest?.publisher?.includes(book?.publisher) ||
                    interest?.category?.includes(book?.category) ||
                    interest?.book?.includes(book?._id)
                ) {
                    filteredBooks.push(book);
                }
            });

            booksFromPublishers?.forEach(book => {
                if (
                    interest?.writer?.includes(book?.writer) ||
                    interest?.category?.includes(book?.category) ||
                    interest?.book?.includes(book?._id)
                ) {
                    filteredBooks.push(book);
                }
            });

            interestedBooks?.forEach(book => {
                if (
                    interest?.writer?.includes(book?.writer) ||
                    interest?.publisher?.includes(book?.publisher) ||
                    interest?.category?.includes(book?.category)
                ) {
                    filteredBooks.push(book);
                }
            });



            // Remove duplicate books
            const uniqueBooks = Array.from(new Set(filteredBooks?.map(book => book?._id))).map(_id => {
                return filteredBooks?.find(book => book?._id === _id);
            });

            // Shuffle the array using Fisher-Yates shuffle algorithm
            const shuffledBooks = uniqueBooks.slice();
            for (let i = shuffledBooks.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledBooks[i], shuffledBooks[j]] = [shuffledBooks[j], shuffledBooks[i]];
            }

            setTopTearSuggestionsLoading(false); // Moved outside the loop
            setTopTearSuggestions(shuffledBooks);

        }
    }, [isLoggedIn, booksFromCategory, booksFromWriters, booksFromPublishers, interestedBooks, interest]);


    console.log("Top Tier Suggestions", topTearSuggestions);


    // If Top Tear Suggestions has no data
    useEffect(() => {
        if (isLoggedIn === false) {
            // Fetch top tear suggestions when user is not logged in
            setTopTearSuggestionsLoading(true);
            const fetchBuyBooks = async () => {
                try {
                    const response = await axiosPublic.get(`/api/v1/buy-books`);
                    if (response?.status !== 200) {
                        throw new Error('Failed to fetch buy books');
                    }
                    let buyBooksData = response?.data?.buyBooks || [];

                    // Shuffle the array
                    for (let i = buyBooksData?.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [buyBooksData[i], buyBooksData[j]] = [buyBooksData[j], buyBooksData[i]];
                    }

                    // Update state with shuffled buy books data
                    setTopTearSuggestions(buyBooksData);
                } catch (error) {
                    console.error("Error fetching buy books:", error);
                } finally {
                    setTopTearSuggestionsLoading(false);
                }
            };
            fetchBuyBooks();
        }
    }, [isLoggedIn, axiosPublic]);

    // Suggestions Loading
    useEffect(() => {
        if (
            booksLoading === false &&
            categoryDetailsLoading === false &&
            writersBooksLoading === false &&
            publisherBooksLoading === false &&
            relatedBooksLoading === false &&
            topTearSuggestionsLoading === false &&
            currentlyViewingRelatedLoading === false &&
            currentlyViewingBookLoading === false
        ) {
            setSuggestionsLoading(false);
        }
    }, [booksLoading, categoryDetailsLoading, writersBooksLoading, publisherBooksLoading, relatedBooksLoading, topTearSuggestionsLoading, currentlyViewingRelatedLoading, currentlyViewingBookLoading]);

    // Related Loading
    useEffect(() => {
        if (
            relatedBooksLoading === false &&
            currentlyViewingRelatedLoading === false &&
            currentlyViewingBookLoading === false
        ) {
            setRelatedLoading(false);
        }
    }, [relatedBooksLoading, currentlyViewingRelatedLoading, currentlyViewingBookLoading]);

    return { topTearSuggestions, currentlyViewingRelatedBooks, interestedBooks, booksFromCategory, booksFromWriters, booksFromPublishers, suggestionsLoading, relatedLoading };
};

export default useBookSuggestion;
