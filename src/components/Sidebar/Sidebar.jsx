import Category from "./Category"
import Price from "./Price"

const Sidebar = ( {setCategory, setPrice} ) => {

    return (

        <div>

            <div className="border-r-2 rounded-md mt-20">

                <div className="border-y-2 mr-3 rounded-md">
                    <section>
                        <Category setCategory={setCategory} />
                    </section>

                    <section>
                        <Price setPrice={setPrice} />
                    </section>
                </div>

            </div>

        </div>
    )
}

export default Sidebar