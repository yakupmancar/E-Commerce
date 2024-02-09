import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";
import SimpleImageSlider from "react-simple-image-slider";


const Detail = ({ addFavorites, addCart }) => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    //!ADD-FAVORITES
    const handleAddFavorites = () => {
        addFavorites(product);
        alert("Product added to Favorites.")
    }


    //! ADD-CART
    const handleAddCart = () => {
        addCart(product);
        alert("Product added to Cart.")
    }


    //!API
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
            setProduct(data);
        };
        getProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }


    //! CAROUSEL-IMAGE
    const images = [
        { url: product.images[0] },
        { url: product.images[1] },
        { url: product.images[2] },
    ];


    return (
        <div className="my-16 md:mx-5 lg:mx-10 ">

            <div className="lg:flex ">
                <section className="w-full flex justify-center">
                    <SimpleImageSlider
                        className="responsive"
                        height={550}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        width={550}
                    />
                </section>

                <section className="w-1/2 mt-10 lg:mt-0 flex-col mx-auto">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-xl">{product.title}</h1>
                        <h1 className="mt-2 mb-5">{product.description}</h1>
                        <h1 className="text-xl font-bold">${product.price}</h1>
                    </div>

                    <div className="border-t-2 my-7 py-5">
                        <div className="flex justify-start items-center lg:gap-x-4">
                            <button onClick={handleAddCart} className="flex justify-start items-center gap-x-2 text-white font-semibold tex text-sm xl:text-lg px-10 xl:px-16 py-2 bg-red-700">
                                <BsBasket3 className="cursor-pointer" />
                                Add to Cart
                            </button>

                            <div className="group">
                                <button onClick={handleAddFavorites} className="border-2 border-gray-200 py-3 px-3 group-hover:border-red-700 transition-all duration-150">
                                    <FaRegHeart className="text-gray-200 group-hover:text-red-700" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div >
    )
}

export default Detail