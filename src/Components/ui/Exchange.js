import ExchangeCard from "../shared/ExchangeCard";

export default function Exchange() {

    const exchangeBooks = [
        {
            "id": 1,
            "image": "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Ebar_Bhinno_Kichu_Hok_-Arif_Azad-64903-226821.jpg",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        },
        {
            "id": 1,
            "image": "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Nibir_Ganit-Chamok_Hasan-33e87-230957.jpg",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        },
        {
            "id": 1,
            "image": "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/a297b3517_198976.jpg",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        },
        {
            "id": 1,
            "image": "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Hsc_Calculas_Interactive_Map-Brishti_Farzana-e2f04-229300.jpg",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        },
        {
            "id": 1,
            "image": "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Saat_Tero_Aaro_Baro-Ahmad_Shahriar-d6ab3-227578.jpg",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        },
        {
            "id": 1,
            "image": "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Goniter_Superhero-Mottasin_Pahlovi-fb89d-290509.jpg",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        },


    ]



    return (
        <>
            <div className="container max-w-7xl mx-auto py-12">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold">Exchange Now</h2>
                    <button className="bg-[#F65D4E] px-4 py-2 rounded-full text-white flex items-center gap-1">
                        View All
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    {exchangeBooks.map(item => <ExchangeCard key={item} item={item} />)}
                </div>
            </div>
        </>
    );
}