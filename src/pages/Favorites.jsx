import { FaHeart } from "react-icons/fa";

const Favorites = ({ favorites, setFavorites, addCart }) => {

    //! DESCRIPTION-MAX-WORD;
    const MAX_WORDS = 10;
    const truncateTitle = (title, maxWords) => {
        const words = title.split(' ');
        return words.slice(0, maxWords).join(' ');
    };


    //! REMOVE-FAVORITES-ITEM
    const removeFavorite = (id) => {
        const newFavorites = favorites.filter((product) => product.id !== id);
        setFavorites(newFavorites);
    }

    //! CONTROL
    if (favorites.length === 0) {
        return (
            <div className="mb-16 mx-12">
                <h1 className="text-3xl text-gray-700 text-center mt-8 pb-2 border-b-2">My Favorite Products</h1>
                <p className="text-center text-xl mt-8">You don't have a favorite product</p>

            </div>
        );
    }


    //! ADD-CART
    const handleAddCart = (product) => {
        addCart(product);
        alert("Product added to Cart.")
    }


    return (
        <div>
            <h1 className="text-2xl md:text-3xl text-gray-700 text-center mt-8 pb-1 border-b-2 lg:mx-20">My Favorite Products</h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-y-20 gap-x-7 mt-10 mb-16">
                {favorites.map((product) => (
                    <div key={product.id} className="w-[280px] md:w-[300px] lg:w-[319px]">
                        <div className="" >
                            <section>
                                <div className="relative">
                                    <FaHeart onClick={() => removeFavorite(product.id)} className="cursor-pointer text-red-700 text-xl absolute mt-2 end-2" />
                                    <img className=" rounded border" src={product.images[0]} />
                                </div>
                            </section>
                            <section>
                                <h1 className="font-bold mt-2">{product.title}
                                    <span className="pl-1 font-normal text-sm text-gray-800">{truncateTitle(product.description, MAX_WORDS)}</span>
                                </h1>

                                <div className="flex items-center gap-x-4 mt-5">
                                    <h1 className="font-bold text-lg">${product.price}</h1>
                                    <button onClick={() => handleAddCart(product)} className="rounded-md text-white font-semibold py-1 px-4 bg-red-700">
                                        Add to Cart
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Favorites