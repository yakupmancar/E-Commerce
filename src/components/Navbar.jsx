import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {

    return (

        <header className="h-[57px] md:h-[75px] lg:h-[88px] flex items-center shadow-md mb-auto">

            <nav className="mx-10 md:mx-20 lg:mx-32 items-center flex w-full justify-between">

                <Link to="/">
                    <img className="w-[120px] h-[28px] sm:w-[140px] sm:h-[35px] md:w-[170px] md:h-[35px] lg:w-[200px] lg:h-[43px]" src="https://akn-ss.a-cdn.akinoncloud.com/cms/2023/10/31/137ac835-153e-4420-93a0-23b04851c260.svg" />
                </Link>

                <section className="hidden sm:block">
                    <div className="flex items-center mt-2 pb-1 border-b-2 px-2 lg:px-5 border-black">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="outline-none" placeholder="search" />
                        <IoSearchSharp className="text-xl" />

                    </div>
                </section>

                <section>
                    <div className="flex gap-x-3 md:gap-x-5 lg:gap-x-6 text-xl lg:text-2xl items-center h-full font-bold">
                        <IoSearchSharp className="text-xl block sm:hidden" />
                        <FaRegUser className="cursor-pointer" />
                        <Link to="/favorites">
                            <FaRegHeart className="cursor-pointer" />
                        </Link>

                        <Link to="/cart">
                            <BsBasket3 className="cursor-pointer" />
                        </Link>
                    </div>
                </section>
            </nav>

        </header>
    )
}

export default Navbar