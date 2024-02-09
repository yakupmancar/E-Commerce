import Sidebar from "../components/Sidebar/Sidebar"
import Main from "../components/Main"
import { useState } from "react"

const Home = ({search, setSearch}) => {

    const [category, setCategory] = useState("All");
    const [price, setPrice] = useState(null);

    return (

        <div>

            <div className="sm:flex gap-x-6 md:gap-x-10 lg:gap-x-12">

                <section className="md:w-64 lg:w-72">
                    <Sidebar category={category} setCategory={setCategory} price={price} setPrice={setPrice} />
                </section>

                <section className="w-full h-full">
                    <Main category={category} setCategory={setCategory} price={price} setPrice={setPrice} search={search} setSearch={setSearch}/>
                </section>
            </div>

        </div>
    )
}

export default Home