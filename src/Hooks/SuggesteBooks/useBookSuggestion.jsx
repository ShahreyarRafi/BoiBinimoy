import { useCallback, useEffect, useState } from "react";
import useOneUser from "../Users/useOneUser";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useBookSuggestion = (CurrentlyViewing) => {
  const { interest } = useOneUser();
  const axiosPublic = useAxiosPublic();

  // ---------Category Books----------

  const [booksFromCategory, setBooksFromCategory] = useState([]);

  const { data: categoryDetails = [], isLoading: categoryDetailsLoading } =
    useQuery({
      queryKey: ["categoryDetails", interest?.category],
      queryFn: async () => {
        const categoryDetailsPromises = interest?.category?.map(
          async (categoryName) => {
            try {
              const response = await axiosPublic.get(
                `/api/v1/category/${categoryName}`
              );
              if (response.status !== 200) {
                throw new Error("Failed to fetch category details");
              }
              return response.data;
            } catch (error) {
              console.error(error);
              return null;
            }
          }
        );
        const categories = await Promise.all(categoryDetailsPromises);
        return categories
          .filter((category) => category !== null)
          .flatMap((category) => category);
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
    queryKey: ["writersBooks", interest?.writer],
    queryFn: async () => {
      const writersBooksPromises = interest?.writer?.map(async (writerName) => {
        try {
          const response = await axiosPublic.get(
            `/api/v1/writer/${writerName}`
          );
          if (response.status !== 200) {
            throw new Error("Failed to fetch writer details");
          }
          return response.data;
        } catch (error) {
          console.error(error);
          return null;
        }
      });
      const writers = await Promise.all(writersBooksPromises);
      return writers
        .filter((writer) => writer !== null)
        .flatMap((writer) => writer);
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

  const { data: publisherBooks = [], isLoading: publisherBooksLoading } =
    useQuery({
      queryKey: ["publisherBooks", interest?.publisher],
      queryFn: async () => {
        const publisherBooksPromises = interest?.publisher?.map(
          async (publisherName) => {
            try {
              const response = await axiosPublic.get(
                `/api/v1/publisher/${publisherName}`
              );
              if (response.status !== 200) {
                throw new Error("Failed to fetch publisher details");
              }
              return response.data;
            } catch (error) {
              console.error(error);
              return null;
            }
          }
        );
        const publishers = await Promise.all(publisherBooksPromises);
        return publishers
          .filter((publisher) => publisher !== null)
          .flatMap((publisher) => publisher);
      },
    });

  useEffect(() => {
    if (!publisherBooksLoading) {
      setBooksFromPublishers(publisherBooks);
    }
  }, [publisherBooks, publisherBooksLoading]);

  console.log("Books From Publishers", booksFromPublishers);

  // ---------Interested books------------

  const [interestedBooks, setInterestedBooks] = useState([]);

  const { data: bookDetails = [], isLoading: booksLaoding } = useQuery({
    queryKey: ["bookDetails", interest?.book],
    queryFn: async () => {
      const bookDetailsPromises = interest?.book?.map(async (_id) => {
        try {
          const response = await axiosPublic.get(`/api/v1/buy-books/${_id}`);
          if (response.status !== 200) {
            throw new Error("Failed to fetch book details");
          }
          return response.data;
        } catch (error) {
          console.error(error);
          return null;
        }
      });
      const books = await Promise.all(bookDetailsPromises);
      return books.filter((book) => book !== null);
    },
  });

  useEffect(() => {
    if (!booksLaoding) {
      const filteredBooks = bookDetails.filter(
        (book) => book._id !== CurrentlyViewing
      );
      setInterestedBooks(filteredBooks);
    }
  }, [bookDetails, CurrentlyViewing, booksLaoding]);

  console.log("Interested Books", bookDetails);

  // ----------------Related books-----------------

  // ---------Fetch related books function-----------

  const fetchRelatedBooks = useCallback(
    async (writer, publisher, category) => {
      try {
        const writerResponse = await axiosPublic.get(
          `/api/v1/writer/${writer}`
        );
        const publisherResponse = await axiosPublic.get(
          `/api/v1/publisher/${publisher}`
        );
        const categoryResponse = await axiosPublic.get(
          `/api/v1/category/${category}`
        );

        const writerBooks = writerResponse.data || [];
        const publisherBooks = publisherResponse.data || [];
        const categoryBooks = categoryResponse.data || [];

        const relatedBooksData = [
          ...writerBooks,
          ...publisherBooks,
          ...categoryBooks,
        ];

        // Remove duplicates
        const uniqueRelatedBooks = Array.from(
          new Set(relatedBooksData.map((book) => book._id))
        ).map((_id) => {
          return relatedBooksData.find((book) => book._id === _id);
        });

        return uniqueRelatedBooks;
      } catch (error) {
        console.error("Error fetching related books:", error);
        return [];
      }
    },
    [axiosPublic]
  );

  // ---------- Related books of Interested books -----------

  const [interestedBooksRelatedBooks, setInterestedBooksRelatedBooks] =
    useState([]);
  const [
    interestedBooksRelatedBooksLoading,
    setInterestedBooksRelatedBooksLoading,
  ] = useState(true);

  // Effect to fetch related books for each interested book
  useEffect(() => {
    const fetchRelatedBooksForAllBooks = async () => {
      try {
        setInterestedBooksRelatedBooksLoading(true);
        const relatedBooksForAll = [];
        for (const book of interestedBooks) {
          const { writer, publisher, category } = book;
          const relatedBooksForBook = await fetchRelatedBooks(
            writer,
            publisher,
            category
          );
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

  if (interestedBooksRelatedBooksLoading === false) {
    console.log("Related Books", interestedBooksRelatedBooks);
  }

  console.log("Related Books Loading", interestedBooksRelatedBooksLoading);

  // --------- Related Books of Currently Viewing -----------

  const [currentlyViewingRelatedBooks, setCurrentlyViewingRelatedBooks] =
    useState([]);

  const {
    data: currentlyViewingBookDetails = [],
    isLoading: currentlyViewingBookLoading,
  } = useQuery({
    queryKey: ["currentlyViewingBookDetails"],
    queryFn: async () => {
      try {
        const response = await axiosPublic.get(
          `/api/v1/buy-books/${CurrentlyViewing}`
        );
        if (response.status !== 200) {
          throw new Error("Failed to fetch book details");
        }
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  });

  useEffect(() => {
    if (currentlyViewingBookLoading) {
      return;
    }

    if (currentlyViewingBookDetails) {
      const { writer, publisher, category } = currentlyViewingBookDetails;
      const fetchRelatedBooksForCurrentlyViewing = async () => {
        try {
          const relatedBooksForCurrentlyViewing = await fetchRelatedBooks(
            writer,
            publisher,
            category
          );
          setCurrentlyViewingRelatedBooks(relatedBooksForCurrentlyViewing);
        } catch (error) {
          console.error(
            "Error fetching related books for currently viewing book:",
            error
          );
          setCurrentlyViewingRelatedBooks([]);
        }
      };

      fetchRelatedBooksForCurrentlyViewing();
    }
  }, [
    currentlyViewingBookDetails,
    currentlyViewingBookLoading,
    fetchRelatedBooks,
  ]);

  console.log("Currently Viewing Book Id", CurrentlyViewing);
  console.log("Currently Viewing Book Details", currentlyViewingBookDetails);
  console.log("Currently Viewing Related Books", currentlyViewingRelatedBooks);

  // ---------Top Tear Suggestions------------

  const [topTearSuggestions, setTopTearSuggestions] = useState([]);

  useEffect(() => {
    // Filter books based on user interests
    const filteredBooks = [];
    booksFromCategory.forEach((book) => {
      if (
        interest?.writer.includes(book.writer) ||
        interest?.publisher.includes(book.publisher) ||
        interest?.book.includes(book._id)
      ) {
        filteredBooks.push(book);
      }
    });

    booksFromWriters.forEach((book) => {
      if (
        interest?.publisher.includes(book.publisher) ||
        interest?.category.includes(book.category) ||
        interest?.book.includes(book._id)
      ) {
        filteredBooks.push(book);
      }
    });

    booksFromPublishers.forEach((book) => {
      if (
        interest?.writer.includes(book.writer) ||
        interest?.category.includes(book.category) ||
        interest?.book.includes(book._id)
      ) {
        filteredBooks.push(book);
      }
    });

    interestedBooks.forEach((book) => {
      if (
        interest?.writer.includes(book.writer) ||
        interest?.publisher.includes(book.publisher) ||
        interest?.category.includes(book.category)
      ) {
        filteredBooks.push(book);
      }
    });

    interestedBooksRelatedBooks.forEach((book) => {
      if (
        interest?.writer.includes(book.writer) ||
        interest?.publisher.includes(book.publisher) ||
        interest?.category.includes(book.category)
      ) {
        filteredBooks.push(book);
      }
    });

    // Remove duplicate books
    const uniqueBooks = Array.from(
      new Set(filteredBooks.map((book) => book._id))
    ).map((_id) => {
      return filteredBooks.find((book) => book._id === _id);
    });

    setTopTearSuggestions(uniqueBooks);
  }, [
    booksFromCategory,
    booksFromWriters,
    booksFromPublishers,
    interestedBooks,
    interestedBooksRelatedBooks,
    interest,
  ]);

  console.log("Top Tier Suggestions", topTearSuggestions);

  // ----------Loading------------

  const [suggetionsLoading, setSuggetionsLoading] = useState(true);

  useEffect(() => {
    if (
      !booksLaoding &&
      !categoryDetailsLoading &&
      !writersBooksLoading &&
      !publisherBooksLoading
    ) {
      setSuggetionsLoading(false);
    }
  }, [
    bookDetails,
    booksLaoding,
    categoryDetailsLoading,
    writersBooksLoading,
    publisherBooksLoading,
  ]);

  return {
    topTearSuggestions,
    currentlyViewingRelatedBooks,
    interestedBooks,
    booksFromCategory,
    booksFromWriters,
    booksFromPublishers,
    suggetionsLoading,
  };
};

export default useBookSuggestion;
