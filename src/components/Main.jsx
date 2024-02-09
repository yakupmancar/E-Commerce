import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Main = ({ category, price, search }) => {
    const [products, setProducts] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;

    useEffect(() => {
        const getProducts = async () => {

            const { data } = await axios.get(
                "https://api.escuelajs.co/api/v1/products"
            );
            setProducts(data);

            console.log(data)
        };
        getProducts();
    }, []);



    // DESCRIPTION MAX WORD;
    const MAX_WORDS = 7;
    const truncateTitle = (title, maxWords) => {
        const words = title.split(" ");
        return words.slice(0, maxWords).join(" ");
    };



    // SORTING
    const [sort, setSort] = useState("Recommended");
    const handleSort = (e) => {
        setSort(e.target.value);
    };

    let sortedProducts = [...products];
    if (sort === "Price: High to Low") {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sort === "Price: Low to High") {
        sortedProducts.sort((a, b) => a.price - b.price);
    }



    // PAGINATE
    const currentItems = sortedProducts
        .filter(
            (item) =>
                (category === "All" || item.category.name === category) &&
                (price === null ||
                    (item.price >= price[0] && item.price <= price[1])) &&
                item.title.toLowerCase().includes(search.toLowerCase())
        )
        .slice(itemOffset, itemOffset + itemsPerPage);

    const pageCount = Math.ceil(
        sortedProducts.length / itemsPerPage
    );

    const handlePageClick = (selected) => {
        const newOffset = selected * itemsPerPage;
        setItemOffset(newOffset);
    };


    return (
        <div className="mt-7">
            <section className="mb-4 flex justify-end">
                <select
                    onChange={handleSort}
                    className="py-1 px-1 outline-none border-2 border-gray-700 rounded-md"
                >
                    <option disabled value="">
                        SELECT
                    </option>
                    <option>Recommended</option>
                    <option>Price: High to Low</option>
                    <option>Price: Low to High</option>
                </select>
            </section>

            <div className="flex flex-wrap gap-x-7 gap-y-14">
                {currentItems.map((item) => (
                    <Link key={item.id} to={`detail/${item.id}`}>
                        <div className=" w-[350px] md:w-[230px] lg:w-[249.6px] cursor-pointer" key={item.id}>
                            <div>
                                <img
                                    className="w-[350px]  lg:w-[250px] lg:h-[265px] rounded border"
                                    src={item.images[0]}
                                    alt={item.title}
                                />
                                <h1 className="font-bold mt-2">{item.title}
                                    <span className="pl-1 font-normal text-sm text-gray-800">{truncateTitle(item.description, MAX_WORDS)}</span>
                                </h1>
                                <h1 className="mt-2 font-bold text-lg">${item.price}</h1>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div>
                <ReactPaginate
                    className=" mb-20 paginate"
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={({ selected }) => handlePageClick(selected)}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
};

export default Main;
