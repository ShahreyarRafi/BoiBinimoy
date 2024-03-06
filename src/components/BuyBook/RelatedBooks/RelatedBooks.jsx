import ComponentLoading from "@/components/Shared/loadingPageBook/ComponentLoading";
import BookCard from "../../Shared/BookCard";
import useBookSuggestion from '@/Hooks/SuggesteBooks/useBookSuggestion';

const RelatedBooks = ({ CurrentlyViewing }) => {
    const { currentlyViewingRelatedBooks, suggetionsLoading } = useBookSuggestion(CurrentlyViewing);

    // Slice the currentlyViewingRelatedBooks array to display only the first 6 items
    const slicedRelatedBooks = currentlyViewingRelatedBooks?.slice(0, 2);

    return (
        <div className="max-w-[200px]">
            {suggetionsLoading ? (
                <ComponentLoading/>
            ) : (
                slicedRelatedBooks?.map((item) => (
                    <div key={item?._id}>
                        <BookCard item={item} />
                    </div>
                ))
            )}
        </div>
    );
};

export default RelatedBooks;

