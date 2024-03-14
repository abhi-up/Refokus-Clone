import React from "react"
import Navbar from "./components/navbar/Navbar"
import Work from "./components/hero/Work"
import Stripes from "./components/stripes/Stripes"
import Products from "./components/products/Products"
import Marquees from "./components/marquees/Marquees"
import Cards from "./components/cards/Cards"
import Footer from "./components/footer/Footer"

import LocomotiveScroll from "locomotive-scroll"

const App = () => {
    const locomotiveScroll = new LocomotiveScroll()

    return (
        <div className="w-full bg-zinc-900 text-white">
            <Navbar />
            <Work />
            <Stripes />
            <Products />
            <Marquees />
            <Cards />
            <Footer />
        </div>
    )
}

export default App
