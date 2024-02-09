import { useState } from "react";
import { FaGift } from "react-icons/fa";


const Cart = ({ cart, setCart }) => {


    //! PRICE
    const [quantity, setQuantity] = useState(Array(cart.length).fill(1)); // her ürün için miktarı saklayan bir dizi

    const handleQuantityChange = (index, event) => {
        const newQuantity = [...quantity];
        newQuantity[index] = event.target.value;
        setQuantity(newQuantity);
    };


    //! REMOVE-CART-ITEM
    const removeCart = (id) => {
        const newcart = cart.filter((product) => product.id !== id);
        setCart(newcart);
    }


    //! CONTROL
    if (cart.length === 0) {
        return (
            <div className="mb-16 mx-12">
                <h1 className="text-3xl text-gray-700 text-center mt-8 pb-2 border-b-2">My Cart</h1>
                <p className="text-center text-xl mt-8">Your cart is currently empty.</p>
            </div>
        );
    }


    //! Sepetteki ürün sayısı
    const itemCount = cart.length;

    //! Sepetteki ürünlerin toplam fiyatı
    const totalPrice = cart.reduce((total, product, index) => {
        return total + product.price * quantity[index];
    }, 0);


    return (
        <div className="mb-16 md:mx-12">
            <h1 className="text-3xl text-gray-700 text-center mt-8 pb-2 border-b-2">My Cart</h1>

            <div className="lg:flex gap-x-10">
                <div className="w-full lg:w-2/3">
                    {cart.map((product, index) => (
                        <div className="mt-10 border-b-2 border-gray-300 flex" key={product.id}>
                            <div className="flex items-center gap-x-3 pb-10">
                                <section>
                                    <img className="w-[130px] h-[150px] border rounded" src={product.images[0]} />
                                    <h1 className="font-semibold pt-1">Seller: Superstep</h1>
                                </section>

                                <section className="flex flex-col mb-6 justify-center w-[220px]">
                                    <h1>{product.title}</h1>
                                    <h1 className="mt-3 mb-1">Color, Size</h1>
                                    <div>
                                        <label htmlFor="myCheckbox" className="gap-x-1 flex items-center" >
                                            <input type="checkbox" id="myCheckbox" />
                                            <FaGift />
                                            <h1>I Want a Gift Package</h1>
                                        </label>
                                    </div>
                                </section>

                                <section className="sm:flex flex-col md:ml-10 gap-x-12">
                                    <div className="mb-5 lg:ml-16 text-lg flex gap-x-2 items-center">
                                        <span>${product.price}</span>
                                        <span>x</span>

                                        <select onChange={(e) => handleQuantityChange(index, e)} className="md:px-4 outline-none border-2 border-gray-300 py-1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>

                                    <div>
                                        <span className="font-bold text-lg">${product.price * quantity[index]}</span>

                                        <div onClick={() => removeCart(product.id)} className="flex gap-x-1 items-center ">
                                            <button><i className="fa-solid fa-xmark"></i></button>
                                            <h1 className="cursor-pointer hover:underline">Remove</h1>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="RIGHT-SIDE mt-10 mr-0 lg:mr-10 xl:mr-24 bg-[#F4F4F4] w-[370px] h-[460px] py-5 px-6">
                    <section className="flex items-center gap-x-10">
                        <h1 className=" text-2xl">ORDER SUMMARY</h1>
                        <h1 className="text-sm">{itemCount} Product</h1>
                    </section>

                    <section className="border-y-2 py-5 border-gray-300 my-5 flex items-center gap-x-20">
                        <h1 className="font-semibold">Total Price</h1>
                        <span className="text-xl font-semibold">${totalPrice}</span>
                    </section>

                    <section>
                        <h1 className="text-xl mb-4">Coupon Code :</h1>
                        <label className="flex justify-center">
                            <input className="outline-none h-[30px]" type="text" />
                            <button className="bg-[#E0E0E0] px-6 font-semibold">Send</button>
                        </label>

                        <section className="mt-6 flex items-center gap-x-20">
                            <h1 className="">Total Price</h1>
                            <span className="text-xl">${totalPrice}</span>
                        </section>
                    </section>

                    <section className="mt-6 flex flex-col gap-y-3">
                        <button className="bg-[#D0112B] text-white w-full tracking-widest py-2">CONFIRM CART<i className="fa-solid fa-chevron-right pl-1"></i></button>
                        <button className="bg-black text-white w-full tracking-widest py-2 flex items-center">
                            <div style={{ borderRadius: "0px 10px 10px 0px" }} className="bg-white items-center justify-center flex h-5 w-5">
                                <i className="fa-solid fa-circle text-[#D0112B] text-xs flex"></i>
                            </div>
                            <span className="flex mx-auto">PAY FAST</span>
                        </button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Cart