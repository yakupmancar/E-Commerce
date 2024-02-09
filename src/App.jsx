import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Cart from "./pages/Cart"
import { useEffect, useState } from "react"
import Detail from "./pages/Detail"



function App() {

  //!SEARCH
  const [search, setSearch] = useState("");

  /**************************************************************************************************/

  //!FAVORITES
  const [favorites, setFavorites] = useState([]);

  //GET FAVORITES 
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, [])

  //SAVE FAVORITES
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites])

  //ADD FAVORITES
  const addFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product])
  }

  /**************************************************************************************************/

  //!CART
  const [cart, setCart] = useState([]);

  //GET CART
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [])

  //SAVE CART
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  //ADD CART
  const addCart = (product) => {
    setCart((prevCarts) => [...prevCarts, product])
  }

  return (

    <div>

      <Navbar search={search} setSearch={setSearch} />

      <div className="mx-5 md:mx-7 lg:mx-20">
        <img
          src="https://akn-ss.a-cdn.akinoncloud.com/cms/2023/10/31/5eb212e7-2365-41e9-b313-c548f2124981.jpg" />
      </div>

      <div className="mx-5 md:mx-10 lg:mx-20">
        <Routes>
          <Route path="/" element={<Home search={search} setSearch={setSearch} />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} addCart={addCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/detail/:id" element={<Detail addFavorites={addFavorites} addCart={addCart} />} />
        </Routes>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>


  )
}

export default App
